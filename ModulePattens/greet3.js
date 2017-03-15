// create a function constructor
// attach a message with the export object

function Greetr() {
	this.greeting = 'Hello world!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}
// create a new object new Greetr()
module.exports = new Greetr();
