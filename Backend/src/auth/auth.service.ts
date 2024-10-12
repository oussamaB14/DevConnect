import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';
import * as argon2 from 'argon2';
//import { CurrentUser } from './types/current-user';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthService {
  private googleClient: OAuth2Client;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,
  ) {
    this.googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found!');
    const isPasswordMatch = await compare(password, user.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { id: user.id };
  }

  async login(userId: string) {
    // const payload: AuthJwtPayload = { sub: userId };
    // const token = this.jwtService.sign(payload);
    // const refreshToken = this.jwtService.sign(payload, this.refreshTokenConfig);
    const { accessToken, refreshToken } = await this.generateTokens(userId);
    const hashedRefreshToken = await argon2.hash(refreshToken);
    await this.userService.updateHashedRefreshToken(userId, hashedRefreshToken);
    return {
      id: userId,
      accessToken,
      refreshToken,
    };
  }
  // async generateTokens(userId: string) {
  //   const payload: AuthJwtPayload = { sub: userId };
  //   const [accessToken, refreshToken] = await Promise.all([
  //     this.jwtService.signAsync(payload),
  //     this.jwtService.signAsync(payload, this.refreshTokenConfig),
  //   ]);
  //   return {
  //     accessToken,
  //     refreshToken,
  //   };
  // }
  async generateTokens(userId: string) {
    const payload: AuthJwtPayload = { userId }; // Explicitly use `userId` here
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(userId: string) {
    const { accessToken, refreshToken } = await this.generateTokens(userId);
    const hashedRefreshToken = await argon2.hash(refreshToken);
    await this.userService.updateHashedRefreshToken(userId, hashedRefreshToken);
    return {
      id: userId,
      accessToken,
      refreshToken,
    };
  }

  async validateRefreshToken(userId: string, refreshToken: string) {
    const user = await this.userService.findOne(userId);
    if (!user || !user.hashedRefreshToken)
      throw new UnauthorizedException('Invalid Refresh Token');

    const refreshTokenMatches = await argon2.verify(
      user.hashedRefreshToken,
      refreshToken,
    );
    if (!refreshTokenMatches)
      throw new UnauthorizedException('Invalid Refresh Token');

    return { id: userId };
  }

  async signOut(userId: string) {
    console.log(`Sign out user with id ${userId}`);
    const user = await this.userService.findOne(userId);
    console.log(`${user}`);
    if (!user) {
      console.log(`User with id ${userId} not found or no refresh token`);
      throw new UnauthorizedException('Invalid Refresh Token');
    }
    console.log(`Reset refresh token for user with id ${userId}`);
    await this.userService.updateHashedRefreshToken(userId, null);

    return { message: `User with id ${userId} signed out`, id: userId };
  }
  async validateJwtUser(userId: string) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new UnauthorizedException('User not found!');
    return user;
  }

  async validateGoogleUser(googleUser: CreateUserDto) {
    const user = await this.userService.findByEmail(googleUser.email);
    if (user) return user;
    return await this.userService.create(googleUser);
  }

  async verifyGoogleToken(token: string) {
    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      return {
        email: payload.email,
        firstName: payload.given_name,
        lastName: payload.family_name,
        avatarUrl: payload.picture,
      };
    } catch {
      throw new UnauthorizedException('Invalid Google token');
    }
  }

  async register(user: CreateUserDto) {
    const existingUser = await this.userService.findByEmail(user.email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    return this.userService.create(user);
  }
  // async isTokenInvalidated(userId: string): Promise<boolean> {
  //   // Check if the token has been invalidated in the database or cache
  //   // For example, you can check a "token_invalidated" flag in the user's database record
  //   const user = await this.userService.findOne(userId);
  //   return user.tokenInvalidated;
  // }
}
