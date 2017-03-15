// in this case i will introduce mutating object in JS
// exports vs. module.export
// Howecer, just use module.exports is a better way of coding


exports = function() {
	console.log('Hello');
}

console.log(exports);
console.log(module.exports);