import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Interface } from '@agape/types';
import { Credentials } from 'lib-platform';

import { alchemy } from '@project-zed/lib-alchemy'

@Controller('api/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

    @Post()
    create( @Body() payload: Interface<Credentials> ) {

        const credentails = alchemy.inflate(Credentials, payload)

        return this.service.login( credentails )
    }


}
