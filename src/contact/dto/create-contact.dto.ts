import { ApiProperty } from "@nestjs/swagger"

export class CreateContactDto{
    @ApiProperty({
        description:"Name",
        example:"shehzaib",
    })
    readonly name:string

    @ApiProperty({
        description:"Contact No",
        example:"03059540083",
    })
    readonly contactNo:string
}

