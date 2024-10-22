import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';
import productionDbConfig from './config/db.config.production';
import { GoogleStrategy } from './auth/strategies/google.strategy';
import { PostModule } from './post/post.module';
import googleOauthConfig from './auth/config/google-oauth.config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comment/comment.module';
@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: '.env',
      load: [dbConfig, productionDbConfig, googleOauthConfig],
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => {
    //     console.log('NODE_ENV:', process.env.NODE_ENV);
    //     return process.env.NODE_ENV === 'production'
    //       ? configService.get('dbconfig.production')
    //       : configService.get('dbconfig.dev');
    //   },
    //   inject: [ConfigService],
    // }),
    MongooseModule.forRoot(dbConfig().url, {
      dbName: dbConfig().database,
    }),
    UserModule,
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
