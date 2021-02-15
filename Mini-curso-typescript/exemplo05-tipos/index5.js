/**MODIFIES  aula 9                           ------------------------------------------------------------------------------------------------ */
//São nada mais nada menos do que os limitadores de acesso private,protected etc que existem na Orientação a objetos
var UserAccountTwo = /** @class */ (function () {
    function UserAccountTwo(name, age) {
        this.name = name;
        this.age = age;
    }
    //gets e seters
    UserAccountTwo.prototype.getName = function () {
        return this.name;
    };
    UserAccountTwo.prototype.setName = function (name) {
        this.name = name;
    };
    UserAccountTwo.prototype.getAge = function () {
        return this.age;
    };
    UserAccountTwo.prototype.setAge = function (age) {
        this.age = age;
    };
    return UserAccountTwo;
}());
var userr = new UserAccountTwo("caduzera", 25);
console.log(userr.getName());
var tlou = {
    title: "Agora vai",
    description: "Agora vai é um bloco que vai de retaftsft",
    genre: ["PS3", "PS4", "PS5"],
    getSimilar: function (title) {
        console.log(".........................." + title);
    }
};
