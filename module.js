var testModule = (function(){
	var counter = 0;
	return {
		incrementCounter: function(){
			return ++counter;
		},
		resetCounter:function(){
			counter = 0;
		},
		setCount:function(val){
			counter = val;
		}
	};
}) ();

testModule.resetCounter();
console.log(testModule.incrementCounter());
testModule.setCount(100);
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());

var testModule2 = (function(){
	var counter = 0;
	return {
		incrementCounter: function(){
			return ++counter;
		},
		resetCounter:function(){
			counter = 0;
		},
		setCount:function(val){
			counter = val;
		}
	};
});

var test2 = new testModule2();
test2.resetCounter();
console.log(test2.incrementCounter());
test2.setCount(100);
console.log(test2.incrementCounter());
console.log(test2.incrementCounter());