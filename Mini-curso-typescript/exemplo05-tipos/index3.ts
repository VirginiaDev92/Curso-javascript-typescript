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
