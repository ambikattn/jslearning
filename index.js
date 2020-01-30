/*Prototype and inhertence example
Animal is a prototype here, 

*/
var Animal = function(legs,eyes,age){
    this.legs = legs;
    this.eyes = eyes;
    this.age = age
}
Animal.prototype.nature = 'nice';
var rabbit = new Animal('4','2','12');
console.log(rabbit.legs);//4
console.log(rabbit.nature);//nice
