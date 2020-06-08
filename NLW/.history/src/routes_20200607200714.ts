import express from 'express';
import knex from './database/connection';

//desacopla as rotas do arquivo de server
const routes = express.Router();

routes.get ('/items', (request, response) => {
    const items = knex('items').select('*');


    return response.json({message : 'hello'});
 });

export default routes