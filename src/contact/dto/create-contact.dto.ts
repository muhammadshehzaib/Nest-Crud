import { Category } from "../schemas/contact.schema"

export class CreateContactDto{
    readonly title:string
    readonly description:string
    readonly author:string
    readonly price:number
    readonly category:Category
}

