import * as http from 'http';

import { URL } from 'url';

export async function proxy( to: string, request: http.IncomingMessage, response: http.ServerResponse ) {
    const { hostname, pathname, port } = new URL(to)

    const options =  {
        hostname,
        port,
        path: pathname,
        method: request.method,
        headers: request.headers
    };

    const proxy = http.request( options, result => {
        response.writeHead(result.statusCode, result.headers)
        result.pipe( response, { end: true })
    } )

    request.pipe( proxy, { end: true })

}
