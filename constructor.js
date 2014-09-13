function Animal(name) {

  this.name = name;

  this.run = function() {

    console.log("running "+this.name);

  }

}

var animal = new Animal('Foxie');
animal.name = 'lion';

animal.run();

function Rabbit(name) {

  Animal.apply(this, arguments) // inherit

  this.bounce = function() {
	console.log("bouncing "+this.name)
  }
}

var rabbit = new Rabbit("Rab")

rabbit.bounce() // own method

rabbit.run()    // inherited method

function Tigger(name) {
  Animal.call(this, "Mr. " + name.toUpperCase())
  // ..
}
 
var tigger = new Tigger("Rab")
 
tigger.run()
console.log(tigger.name);

function Ant(name) {

  Animal.apply(this, arguments) 

  var parentRun = this.run  // keep parent method

  this.run = function() {  
    console.log("bouncing "+this.name)
parentRun.apply(this)  // call parent method
  }
}

var ant = new Ant("ant")

ant.run()    // inherited method
ant.parentRun;

function Dog(name) {

  Animal.call(this, "Mr. " + name.toUpperCase()) 

  var created = new Date()  // private

  function sayHi() {  // private
    console.log("I'm talking rabbit " + name)
  }

  this.report = function() {  
    sayHi.apply(this)
    console.log("Created at " + created)
  }
}

var dog = new Dog("dog")

dog.report()

console.log(dog.created);

