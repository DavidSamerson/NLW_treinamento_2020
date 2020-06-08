import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
// import ItemsController from './controllers/ItemsController';

//desacopla as rotas do arquivo de server
const routes = express.Router();
const pointsController = new PointsController();

routes.get ('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serialisedItems = items.map(item => { 
        return {
            id: item.id,
            titulo: item.titulo,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    });

    return response.json(serialisedItems);
});

routes.post('/points', pointsController.create);

export default routes