import express from 'express';
import knex from './database/connection';

//desacopla as rotas do arquivo de server
const routes = express.Router();

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

routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf, 
        items
    } = request.body;

    const ids = await knex('points').insert({
        image: 'image',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });
    const point_id = ids[0];

    const pointItems = items.map((item_id:number) => {
        return {
            item_id,
            point_id
        };
    })

    await knex('point_items').insert(pointItems);

    return response.json({success: true});
});

export default routes