import { Injectable } from '@nestjs/common';
import { orm } from '@agape/orm';

import { Interface } from '@agape/types';
import { Credentials, User } from 'lib-platform';


@Injectable()
export class AuthService {
    
    async login( credentails: Interface<Credentials> ) {
        // const user = await orm.lookup( User, { username: credentails.username } ).exec()


    }


}
