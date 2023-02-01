import * as http from 'http';

const port = process.env.PORT ? Number(process.env.PORT) : 3001;
const verbose = true;

http.createServer( 
    ( request, response ) => {

        /* logging */
        if ( verbose ) console.log( request.url )

        response.write('Hello world!')
        response.end()
    },
)
.listen(
    port, () => console.log(`Server started at http://localhost:${port}`)
)
