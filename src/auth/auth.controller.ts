import { Controller, Post, Request } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { User } from 'src/users/schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,
  private usersService:UsersService) {}

  @Post('login')
  @ApiCreatedResponse({
    description:"Created Access token as response",
    type:User
 })
 @ApiBadRequestResponse({       
    description:"Access token Cannot Created"
})
  async login(@Request() req): Promise<any> {
    const user = req.user;
    const token = await this.authService.login(user);
    return { token };
  }

  @Post('register')
  @ApiCreatedResponse({
    description:"Created User Object as response",
    type:User
 })
 @ApiBadRequestResponse({       
    description:"User object Cannot Created"
})
  async register(@Request() req): Promise<any> {
    const { username,email, password } = req.body;
    const user = await this.usersService.create(username,email, password);
    return { user };
  }
}