class PointsContoller {
    async create (request, response) {
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

    const insertedIds = await trx('points').insert({
        image: 'image',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id:number) => {
        return {
            item_id,
            point_id
        };
    })

    await trx('point_items').insert(pointItems);

    return response.json({success: true});
    }
}

export default PointsContoller;