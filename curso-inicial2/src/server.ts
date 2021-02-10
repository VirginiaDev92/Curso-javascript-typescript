import express, { request, response } from 'express';
import routes from './routes';//se o nome index nem precisa colocar o index pq ele ja procura

const app = express();

// app.get('/',(request,response)=>{
//     return response.json({message:"Oá mundo ts!"});
// });
app.use(routes);

app.listen(3333,()=>{
    console.log("Api rodando Perfeitamente na porta 3333.....");
});