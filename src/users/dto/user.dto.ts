import { User } from "../schemas/user.schema"

export class CreateUserDto{
    readonly username:string
    readonly email:string
    readonly password:string
    // readonly price:number
    // readonly category:Category
}

