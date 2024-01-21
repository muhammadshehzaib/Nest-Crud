import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import {CreateUserDto} from "./dto/user.dto"
// import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactController {
    constructor(private userService:UsersService){}
    
    @Post()
    async createContacts(
        @Body()
        user:CreateUserDto,
        ):Promise<User>{
            return this.userService.create(user.username,user.email,user.password
                )
        }
        
    }