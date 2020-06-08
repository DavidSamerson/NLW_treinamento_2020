import express from 'express';
import knex from './database/connection';

//desacopla as rotas do arquivo de server
const routes = express.Router();

routes.get ('/items', async (request, response) => {
    const items = await knex('items').select('*');

    return response.json(items);
 });

export default routes