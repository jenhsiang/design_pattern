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

//���۳y��?
function CarMaker() { }
 
//�Ҧ��l?�q�Τ�k
CarMaker.prototype.drive = function () {
  console.log( "Vroom, I have " + this.doors + " doors");
};
 
//??�u�D��k �l??�k?��
CarMaker.factory = function(type) {
  var constr = type,
      newcar;
 
  //�p�G�۳y��?���s�b�A??��??
  if(typeof CarMaker[constr] !== "function") {
    throw {
      name: "Error",
      message: constr + " doesn't exist"
    };
  }
 
  //?�Ӥ�?�A��??�Ӥ@��
  if(typeof CarMaker[constr].prototype.drive !== "function") {
    CarMaker[constr].prototype = new CarMaker();
  }
 
  newcar = new CarMaker[constr]();
 
  return newcar;
};
 
// �w?���P���l?�H
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