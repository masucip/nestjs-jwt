import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usr : Repository<User>
  ){

  }
  create(createUserDto: CreateUserDto) {
    return this.usr.save(createUserDto);
  }

  findAll() {
    return this.usr.find();
  }

  findOne(id: number) {
    return this.usr.findOne(id);
  }

  findUsername(username, password) {
    return this.usr.findOne({username:username, password : password});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.usr.findOne(id)
    user.nama_user = updateUserDto.nama_user
    user.email = updateUserDto.email
    user.username = updateUserDto.username
    user.password = updateUserDto.password
    return this.usr.save(user);
  }

  async remove(id: number) {
    let user = await this.usr.findOne(id)
    return this.usr.remove(user);
  }
}
