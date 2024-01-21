import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;


@Schema()
export class User {
  @Prop({  })
  username: string;

  @Prop({ })
  email: string;

  @Prop({ })
  password: string;
}

// export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);