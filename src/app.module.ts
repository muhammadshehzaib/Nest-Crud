import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ContactModule,ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true,
  }),
  ContactModule,
  MongooseModule.forRoot(process.env.DBURI),
  AuthModule,
  UsersModule
],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
