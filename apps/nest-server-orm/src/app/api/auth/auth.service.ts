import { Injectable } from '@nestjs/common';
import { orm } from '@agape/orm';

import { Interface } from '@agape/types';
import { Credentials, User } from 'lib-platform';

import bcrypt from 'bcryptjs';
import { Exception } from '@agape/exception';

@Injectable()
export class AuthService {
    
    async login( credentials: Interface<Credentials> ) {
        
        const user = await orm.lookup( User, { username: credentials.username } ).exec()

        const authenticated = bcrypt.compareSync(credentials.password, user.password)

        if ( authenticated ) console.log("USER AUTHENTICATED")

        if ( ! authenticated ) {
            throw new Exception(401)
        }
    }


}
