import express, { request, response } from 'express';

const app = express();

app.get('/',(request,response)=>{
    return response.json({message:"Oá mundo ts!"});
});

app.listen(3333,()=>{
    console.log("Api rodando Perfeitamente na porta 3333.....");
});