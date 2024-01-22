import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;


@Schema()
export class User {
  @ApiProperty({
    description:"Username",
    example:"Shehzaib",
})
  @Prop({})
  username: string;
    
  @ApiProperty({
    description:"email",
    example:"shehzaib001@gmail.com",
})
  @Prop({ })
  email: string;
  
  @ApiProperty({
    description:"password",
    example:"shehzaib001",
})
  @Prop({ })
  password: string;
}


export const UserSchema = SchemaFactory.createForClass(User);