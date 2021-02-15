/**Void -> tipo vazio */
function logger():void{
    console.log("nao retorna nada, ele ja sabe até");
}

/**Null e | undefined -> servem para indicar valor indefinido etc, exemplo criando um novo tipo*/
type Bla = string|undefined;

/**Never -> tipo que nunca vai retornar, exemplo com erro ele nem retorna nada,joga so a  exeção na tela -------------------------------------------------------- */
throw new Error("erro");

/** Tipo Objeto */
let cartas:object;
cartas={
    key:"fi",
    keylog:"foder"
}