/**Pegando os imput element do html        |       informo o tipo*/
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("button");
function sum(input1, input2) {
    return input1 + input2;
}
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value))); /**Acessar o valor do input input1.value mas o valor vem em string */
});
