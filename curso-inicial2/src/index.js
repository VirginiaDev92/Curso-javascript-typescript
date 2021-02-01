const express = require("express");

const app = express();
app.use(express.json());/* Poder saber receber json */


app.listen(3333,()=>{/*Disponibilize essa porta 3333 para utilizar na aplicação */
    console.log("backend started!   ;)");
});