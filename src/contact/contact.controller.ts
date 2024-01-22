import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './schemas/contact.schema';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('contacts')
export class ContactController {
    constructor(private contactService:ContactService){}
    @Get()
    async getAllContacts():Promise<Contact[]>{
        return this.contactService.findAll()
    }

     @Post()
     @ApiCreatedResponse({
        description:"Created Contact Object as response",
        type:Contact
     })
     @ApiBadRequestResponse({       
        description:"Contact Cannot Created"
    })
    async createContacts(
    @Body()
    contact:CreateContactDto,
    ):Promise<Contact>{
        return this.contactService.create(contact)
    }

    @Get(':id')
    async getContacts(
        @Param('id')
        id:string
    ):Promise<Contact>{

        return this.contactService.findById(id)
    }


    @Put(':id')
    async updateContacts(
        @Param('id')
        id:string,
        @Body()
    contact:UpdateContactDto,
    ):Promise<Contact>{
        return this.contactService.updateById(id,contact)
    }
    @Delete(':id')
    async deleteContacts(
        @Param('id')
        id:string
    ):Promise<Contact>{

        return this.contactService.deleteById(id)
    }

}
