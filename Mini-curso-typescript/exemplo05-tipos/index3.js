/** Inferencia de tipo -> Sé quando eu não declaro a variavel e ja passo o valor dele ex string ai o typescript ja assume que essa
 * variavel é string
 */
var mensagem = "Alguma mensagem";
// window.addEventListener("click",(e)=>{
//     console.log(e.target);
// });
/** Tipos complexos------------------------------------------------------------------------------------------------------------- */
/** UNION -> é um outro tipo no qual ele pode ser usar operador "|"                        ------------------------------------- */
function logDetails(uid, item) {
    console.log(" A produt with " + uid + " is not valid for " + item);
}
logDetails(1, "sapato");
logDetails("1", "sapato");
