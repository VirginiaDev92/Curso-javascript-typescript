class UserAccount{/** Como toda claase ela deve ter seus atributos e deve ter o metodo construtor */
    name:string;
    age:number;

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

const will = new UserAccount("will",25);

console.log(will,will.getName(),will.getAge());
/**  extendendo outra classe */
class CharAccount extends UserAccount{
    email:string;
    fone:number;
    constructor(name:string,age:number,email:string,fone:number){
        super(name,age);/**sempre pegar da classe mae */
        this.email = email;
        this.fone = fone;

    }
}

const willace = new CharAccount("willace",25,"wallace@fgsdhjfg.com",99067);
console.log( willace, willace.getName(), willace.getAge());




























