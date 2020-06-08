class ItemsController {

    async index (request, response) {
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