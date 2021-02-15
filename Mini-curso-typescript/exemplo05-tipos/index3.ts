/** Inferencia de tipo -> Sé quando eu não declaro a variavel e ja passo o valor dele ex string ai o typescript ja assume que essa
 * variavel é string
 */
let mensagem = "Alguma mensagem";

// window.addEventListener("click",(e)=>{
//     console.log(e.target);
// });


/** Tipos complexos------------------------------------------------------------------------------------------------------------- */

/** UNION -> é poder assumir um outro tipo , usar operador "|"        ----------------------------------------------------------- */
function logDetails(uid:number|string,item:string){
    console.log(` A produt with ${uid} is not valid for ${item}`);
}
logDetails(1,"sapato");
logDetails("1","sapato");

/** Type ALIAS -> é declarar  um tipo no qual a variavel pode assumir um outro tipo so que ja declarado , usar operador "|" ------- */
type UId = number | string;
function logDetails2(uid:UId,item:string){
    console.log(` A produt with ${uid} is not valid for ${item}`);
}
logDetails2(1,"sapato");
logDetails2("1","sapato");

/** AUla 08 type ALIAS com inserctions ------------------------------------------------------------------------------------------------*/
//crio os tipos
type AccountInfo ={
    id:number;
    name:string;
    email?:string   /**? indica que é opcional */
}
type Charinfo={
    telefone:number;
    idade:number
}

//preencho os tipos
const account : AccountInfo = {  /**crio uma account dizendo que ele e do tipo AccountInfo */
    id:1,
    name:"clodoaldo",
    email:"clodoaldo.brtp4@gmail.com"
}
const char : Charinfo = {  /**crio uma account dizendo que ele e do tipo AccountInfo */
    telefone:43756843765,
    idade:25
}
//crio um tipo que é a junçao dos 2
type Usuario = AccountInfo & Charinfo;
const user:Usuario ={
    id:1,
    name:"clodoaldo",
    email:"clodoaldo.brtp4@gmail.com",
    telefone:43756843765,
    idade:25
}