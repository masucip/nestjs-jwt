import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService : UserService,
        private jwtService : JwtService
    ){

    }

    async cekUser(username : string, password:string){
        let user = await this.userService.findUsername(username,password)
        if(user){
            return user
        }
        else{
            return null
        }
    }

    async login(user:any){
        let payload = {id : user.id, username : user.username, nama_user : user.nama_user}
        return {
            token : this.jwtService.sign(payload)
        }
    }
}
