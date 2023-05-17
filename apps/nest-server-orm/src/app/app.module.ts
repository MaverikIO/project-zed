import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { EventsModule } from './api/events/events.module'
import { PingModule } from './api/ping/ping.module';
import { SwaggerModule } from './api/swagger/swagger.module';
import { UsersModule } from './api/users/users.module';
import { OrganizationsModule } from './api/organizations/organizations.module';
import { AuthModule } from './api/auth/auth.module';

import process from 'process';

import dotenv from 'dotenv'
dotenv.config({ path: 'apps/_env/events-application/.env' })
const secret = process.env['JWT_SECRET']


@Module({
  imports: [
    PingModule, 
    
    EventsModule, 
    UsersModule,
    OrganizationsModule,
    AuthModule,

    JwtModule.register({
      global: true,
      secret,
      signOptions: { expiresIn: '60s' },
    }),

    SwaggerModule,  // must be last
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
