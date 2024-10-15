import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GoogleAuthGuard } from './google-auth/google-auth.guard';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtAuthGuard: JwtAuthGuard,
    private readonly googleAuthGuard: GoogleAuthGuard,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      await this.jwtAuthGuard.canActivate(context);
      return true; // If JWT is valid, allow access
    } catch {
      try {
        // If JWT fails, try Google Auth
        await this.googleAuthGuard.canActivate(context);
        return true; // If Google auth is valid, allow access
      } catch (error) {
        throw new UnauthorizedException(
          `User not authenticated: ${error.message}`,
        );
      }
    }
  }
}
