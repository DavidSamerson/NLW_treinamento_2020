import knex from '../database/connection';
import {Request, Response} from 'express';

class ItemsController {

    async index (request : Request, response: Response) {
    const items = await knex('items').select('*');

    const serialisedItems = items.map(item => { 
        return {
            id: item.id,
            titulo: item.titulo,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    });

    return response.json(serialisedItems);
    }
}

export default ItemsController;