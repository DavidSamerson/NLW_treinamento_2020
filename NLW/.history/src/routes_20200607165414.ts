import express from 'express';

//desacopla as rotas do arquivo de server
const routes = express.Router();

routes.get ('/', (request, response) => {
    return response.json({message : 'hello'});
 });
