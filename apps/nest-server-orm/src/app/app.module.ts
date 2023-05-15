import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { EventsModule } from './api/events/events.module'
import { PingModule } from './api/ping/ping.module';
import { SwaggerModule } from './api/swagger/swagger.module';
import { UsersModule } from './api/users/users.module';
import { OrganizationsModule } from './api/organizations/organizations.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    PingModule, 
    
    EventsModule, 
    UsersModule,
    OrganizationsModule,
    AuthModule,

    SwaggerModule,  // must be last
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
