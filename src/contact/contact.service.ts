import { Injectable,NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from './schemas/contact.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class ContactService {
    constructor(@InjectModel(Contact.name)
    private contactModel:mongoose.Model<Contact>
    ){}

    async findAll(): Promise<Contact[]> {
        const contact = await this.contactModel.find();
        return contact;
      }
    
      async create(contact: Contact): Promise<Contact> {
        const res = await this.contactModel.create(contact);
        return res;
      }
    
      async findById(id: string): Promise<Contact> {
        const contact = await this.contactModel.findById(id);
    
        if (!contact) {
          throw new NotFoundException('contact not found.');
        }
    
        return contact;
      }
    
      async updateById(id: string, contact: Contact): Promise<Contact> {
        return await this.contactModel.findByIdAndUpdate(id, contact, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string): Promise<Contact> {
        return await this.contactModel.findByIdAndDelete(id);
      }
}
