import { Router } from 'express';
import connectionKnex from '../database/connection';

const itemsRoutes = Router();
itemsRoutes.get('/',async (request,response)=>{
    const listaItems = await connectionKnex('items').select('*');
    const serializedItems = listaItems.map(item =>{
        return {
            id:item.id,
            title:item.title,
            image_url:`http://localhost:3333/uploads/${item.image}`
        }
    });
    return response.json(serializedItems);
});

export default itemsRoutes;