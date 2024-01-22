import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


@Schema({
    timestamps:true,
})

export class Contact{
    @ApiProperty({
        description:"Name",
        example:"shehzaib",
    })
    @Prop()
    name: string;
  
    @ApiProperty({
        description:"Contact No",
        example:"03059540083",
    })
    @Prop()
    contactNo: string;
    
}
export const ContactSchema = SchemaFactory.createForClass(Contact)