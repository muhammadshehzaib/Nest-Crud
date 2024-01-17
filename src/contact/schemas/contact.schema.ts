import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ADVENTURE = 'Adventure',
    CALSSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy',
  }
@Schema({
    timestamps:true,
})

export class Contact{
    @Prop()
    title: string;
  
    @Prop()
    description: string;
  
    @Prop()
    author: string;
  
    @Prop()
    price: number;
  
    @Prop()
    category: Category;
}
export const ContactSchema = SchemaFactory.createForClass(Contact)