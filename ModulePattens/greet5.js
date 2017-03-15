var greeting = 'Hello world!!!!';

function greet() {
	console.log(greeting);
}
// the reveealing mosule pattern: exposing only the proterties and 
// mehtods you want via return object
module.exports = {
	greet: greet
}

