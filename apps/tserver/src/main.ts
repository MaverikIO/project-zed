import express from 'express';

const port = process.env.PORT ? Number(process.env.PORT) : 3002;
const verbose = true;

const app = express();

/* logging */
app.use( 
  (request, response, next ) => {
    if ( verbose ) console.log( request.url )
    next()
  }
)

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, () => {
  console.log(`Express (without libs) started at http://localhost:${port}`);
});
