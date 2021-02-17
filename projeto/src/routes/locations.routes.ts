import { Router } from 'express';
import connectionKnex from '../database/connection';

const locationsRoutes = Router();

locationsRoutes.post('/',async (request,response)=>{
    const { name,image,email,watsapp,latitude,longititude,city,uf,items} = request.body;
    const location ={
        name,/** name ta recebendo o valor de name mesmo que foi recebido e destruturado:short sintax */
        image:"fake.jpg",
        email,
        watsapp,
        latitude,
        longititude,
        city,
        uf,
        items
    }
    const newIds = await connectionKnex('locations').insert(location);
    const locationId= newIds[0];
    const locationItems = items.map((item_id:number)=>{
        return{
            item_id,
            location_id:locationId
        }
    });
    await connectionKnex('locations_items').insert(locationItems);
    return response.json({id:locationId,...location});/**spred operation */
});

export default locationsRoutes;