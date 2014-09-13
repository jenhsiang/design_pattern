function personFactory(name,job){
	var o = new Object();
	
	o.name = name;
	o.job = job;
	o.queryJob = function(){
		console.log(this.job);
	};
	return o;
}

var person1 = personFactory("John","Software Developer");
var person2 = personFactory("Mary","Product Manager");

console.log(person1.name);
person2.queryJob();

//父构造函?
function CarMaker() { }
 
//所有子?通用方法
CarMaker.prototype.drive = function () {
  console.log( "Vroom, I have " + this.doors + " doors");
};
 
//??工厂方法 子??法?承
CarMaker.factory = function(type) {
  var constr = type,
      newcar;
 
  //如果构造函?不存在，??生??
  if(typeof CarMaker[constr] !== "function") {
    throw {
      name: "Error",
      message: constr + " doesn't exist"
    };
  }
 
  //?承父?，但??承一次
  if(typeof CarMaker[constr].prototype.drive !== "function") {
    CarMaker[constr].prototype = new CarMaker();
  }
 
  newcar = new CarMaker[constr]();
 
  return newcar;
};
 
// 定?不同的子?象
CarMaker.Compact = function() {
  this.doors = 4;
};
CarMaker.Convertible = function() {
  this.doors = 2;
};
CarMaker.SUV = function() {
  this.doors = 24;
};
 
//??
var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
corolla.drive();
solstice.drive();
cherokee.drive();
 
//Vroom, I have 4 doors
//Vroom, I have 2 doors
//Vroom, I have 24 doors