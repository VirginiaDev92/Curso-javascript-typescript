import { Router } from 'express';
import itemsRoutes from './items.routes';

const routes = Router();
routes.use('/items',itemsRoutes);/** quando eu acessar /items quero que ele var para  itemsRoutes, entao tem que ser ."use"*/
/** pq ele esta usando a rota que esta la em itemsRoutes */
export default routes;