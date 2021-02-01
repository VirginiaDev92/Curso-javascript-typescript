const express = require('express');

const app = express(); //crio uma instancia do express

//criando primeira rota
app.get('/projects',(request,response)=>{
    return response.json([
        'Projeto 1','Projeto 2','Projeto 3'
    ]);
});

app.post('/projects',(request,response)=>{
    return response.json([
        'Projeto 1','Projeto 2','Projeto 3','Projeto 4'
    ]);
});

app.put('/projects',(request,response)=>{
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