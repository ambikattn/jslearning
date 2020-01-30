var Animal = function(legs,eyes,age){
    this.legs = legs;
    this.eyes = eyes;
    this.age = age
}
Animal.prototype.nature = 'nice';
var rabbit = new Animal('4','2','12');
console.log(rabbit.legs);
console.log(rabbit.nature);