import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService : AuthService
    ){

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    cekUser(){
        return  "ok"
    }

    @Post()
    async login(@Body('username') username : string, @Body('password') password : string){
        let user = await this.authService.cekUser(username,password)
        if(user){
            return await this.authService.login(user)
        }
    }
}
