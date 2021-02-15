/**Pegando os imput element do html        |       informo o tipo"HTMLInputElement" pq se não o typescript não reconhece */
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button")!;/**aqui tem um erro que se eu tenho o buuton na tela eu confirmo com ! */

function sum(input1:number,input2:number):number{
    return input1+input2;
}

button.addEventListener("click",()=>{
    console.log(sum(Number(input1.value),Number(input2.value)));/**Acessar o valor do input input1.value mas o valor vem em string */
});