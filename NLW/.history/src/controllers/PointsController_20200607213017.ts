import knex from '../database/connection';
import {Request, Response} from 'express';

class PointsContoller {
    async create (request : Request, response : Response) {
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

    const trx = await knex.transaction(); // evita erros de transação.

    const point = {
        image: 'image',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    }

    const insertedIds = await trx('points').insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id:number) => {
        return {
            item_id,
            point_id
        };
    })

    await trx('point_items').insert(pointItems);

    return response.json({
        id: point_id,
        ...point
    });
    }

    async show (request : Request, response : Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();
        
        if(!point){
            return response.status(400).json({message: 'Point not found.'});
        } 

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id);

        return response.json({point, items});
    }
}

export default PointsContoller;