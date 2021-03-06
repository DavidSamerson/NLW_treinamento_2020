import express from 'express';
import knex from './database/connection';

//desacopla as rotas do arquivo de server
const routes = express.Router();

routes.get ('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serialisedItems = items.map(item => { 
        return {
            titulo: item.titulo,
            image_url: `http://localhost:3333/uploads/'${item.image}`
        }
    });

    return response.json(serialisedItems);
 });

export default routes