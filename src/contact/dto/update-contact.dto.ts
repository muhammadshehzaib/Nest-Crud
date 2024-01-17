import { Category } from "../schemas/contact.schema"

export class UpdateContactDto{
    readonly title:string
    readonly description:string
    readonly author:string
    readonly price:number
    readonly category:Category
}