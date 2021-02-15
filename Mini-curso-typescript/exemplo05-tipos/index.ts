/** Tipos */

/** Boleanos -> no typescrip um tipo booleano so pode assumir true ou false, nem pode ser string nem 1 ou 0 como no C ----------------------------------------*/
let isOpen:boolean;
isOpen =true;
console.log(isOpen);

/**Strings -> é representação de texto -------------------------------------------------------------------------------------------------------------------------*/
let message:string;
message= "Olá mundo typescript como vai esse desenvolvimento web aii";
/** beckstick colocando variavel dentro,tudo dentro do backstick é string */
message= `Olá mundo typescript como vai ${isOpen} esse desenvolvimento web aii`;
console.log(message);

/**Number ->  numeros,seja ele decimal,hexadecimal etc -----------------------------------------------------------------------------------------------------------*/
let numero:number;
numero = 10;
console.log(numero);

/**Array -> tem que definir o tipo do array ---------------------------------------------------------------------------------------------------------------------*/
let items:number[];
let item1:string[];
items = [1,2,3,4,5,6,7,8,9,0];
item1 =["asd","sad","das"];
/** ou posso assinar tambem parecido com o java -------------------------------------------------------------------------------------------------------------------*/
let item2:Array<string>;
item2=["qewe"]
console.log(items[0],item1[0],item2[0]);

/**Tuplas -> array com "numero de elementos" e "tipo definido" ----------------------------------------------------------------------------------------------------*/
let title:[number,string];
title = [1,"caduzeira"];
console.log(title);

/**Enum -> é um enumerator com valores "chave e valor", é um conjunto de chave e valor  ---------------------------------------------------------------------------*/
enum Color{
    white='#fff',
    black='#000'
}

/**Any ->pode ser qualquer valor ,qualquer coisa. NOrmalmente vc quer que seu codigo nn tenha valores desse tipo----------------------------------------------------*/
let coisa:any;
coisa=["1sdfsghd5"];
console.log(coisa);