/**MODIFIES  aula 9                           ------------------------------------------------------------------------------------------------ */
//São nada mais nada menos do que os limitadores de acesso private,protected etc que existem na Orientação a objetos
class UserAccountTwo{/** Como toda claase ela deve ter seus atributos e deve ter o metodo construtor */
    private name:string;
    private age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }


    //gets e seters
    getName():string {
        return this.name;
    }
    setName(name:string):void{
        this.name =name;
    }
    getAge():number{
        return this.age;
    }
    setAge(age:number){/** sem explicitar o retorno */
        this.age = age;
    }
}
const userr = new UserAccountTwo("caduzera",25);
console.log(userr.getName());

/** Interfaces em typescript */
interface IGame{
    title:string;
    description:string;
    genre:string[];
    getSimilar:(title:string)=>void;

}
const tlou: IGame = {
    title:"Agora vai",
    description:"Agora vai é um bloco que vai de retaftsft",
    genre:["PS3","PS4","PS5"],
    getSimilar:(title:string)=>{
        console.log(`..........................${title}`);
    }
}
tlou.getSimilar("hfsjdhfjkhsdjkf");

/** Parei na aula 10 
 * https://www.youtube.com/watch?v=x-q7kGA_yp0&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_&index=10
 * 
 * 
*/




















