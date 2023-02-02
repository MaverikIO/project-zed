import * as http from 'http';
import { proxy } from './proxy';

const port = process.env.PORT ? Number(process.env.PORT) : 3001;
const verbose = true;

const server = http.createServer()

server.on('request', async ( request, response ) => {

    /* logging */
    if ( verbose ) console.log( request.url )

    if ( request.url === '/' ) {
        proxy('http://localhost:3002', request, response )
    }
    else {
        response.write('Hello world!')
        response.end()
    }

} )

server.listen(
    port, () => console.log(`Server started at http://localhost:${port}`)
)
