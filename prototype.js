function Person(name,job){
}
Person.prototype.name = "John";
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	console.log(this.name);
}
var person1 = new Person();
var person2 = new Person();

person1.sayName();
person2.sayName();