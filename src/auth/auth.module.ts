import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    UserModule,
    PassportModule,
    JwtModule.register({
      secret : '112233447585969',
      signOptions : {
        expiresIn : '120s'
      }
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports : [AuthService, JwtModule]
})
export class AuthModule {}
