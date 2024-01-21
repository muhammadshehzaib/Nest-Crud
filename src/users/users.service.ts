import mongoose, { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User  } from './schemas/user.schema';
// import { CreateCatDto } from './dto/create-cat.dto';

// export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: mongoose.Model<User>) {}

  async create(username:string,email:string,password:string): Promise<User> {
    const user = new this.userModel({ username,email, password, });
    return user.save();
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
}