// inheritance : one objects gets access to the properties and methods of another object.

// function constructors: a normal function that is used to construct objects ( the "this" variable points a new empty objects , and that object is returned 
// from the function automatically )

// create a constructor function with 2 params
// set the this.firstname = first object
// set the this.lastname = second object
// NOw create a prototype function expression
//



function Person(firstname, lastname) {
	
	this.firstname = firstname;
	this.lastname = lastname;
	
}
// building a greet function using the prototype 
Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
// console.log(john.firstname);		// John
john.greet();						// Hello, John Doe

var jane = new Person('Jane', 'Doe');
jane.greet();						// Hello, Jane Doe

console.log(john.__proto__);		// Person { greet: [Function] }
console.log(jane.__proto__);		// Person { greet: [Function] }
console.log(john.__proto__ === jane.__proto__);		// true