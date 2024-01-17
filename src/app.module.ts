import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ContactModule,ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true,
  }),
  ContactModule,
  MongooseModule.forRoot(process.env.DBURI)
],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
