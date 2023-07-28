import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard }],
  controllers: [AuthController],
})
export class AuthModule {}
