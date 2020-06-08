import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//desacopla as rotas do arquivo de server
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get ('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show); 
routes.get('/points', pointsController.index); 

//index => exibir
//show => mostrar
//create
//update
//delete


export default routes