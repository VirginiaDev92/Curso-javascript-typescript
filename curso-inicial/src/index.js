const express = require('express');

const app = express(); //crio uma instancia do express
app.use(express.json());

//criando primeira rota
app.get('/projects',(request,response)=>{
    const {title,autor} = request.query;
    console.log(title,autor);
    return response.json([
        'Projeto 1','Projeto 2','Projeto 3'
    ]);
});

app.post('/projects',(request,response)=>{
    const body = request.body;
    console.log(body);/**pegando tudo que foi enviado pelo cliente */
    return response.json([
        'Projeto 1','Projeto 2','Projeto 3','Projeto 4'
    ]);
});

app.put('/projects/:id/owner/:owner_id',(request,response)=>{/* nomde e proprietario */
    const { id,owner_id } = request.params;
    console.log(id,owner_id);
    return response.json([
        'Projeto 5','Projeto 2','Projeto 3','Projeto 4'
    ]);
});

app.delete('/projects',(request,response)=>{
    return response.json([
        'Projeto 5','Projeto 4'
    ]);
});

app.listen(3333,()=>{
    console.log("backend started!   ;)");
});//digo qual ele vai ouvir