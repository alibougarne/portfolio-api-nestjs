import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
<<<<<<< HEAD
import AuthController from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
=======
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '48h' },
    }),
    UsersModule
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
>>>>>>> 8841f6c2c2ed71c4845e08e6c79690292d33eb31
})
export class AuthModule {}
