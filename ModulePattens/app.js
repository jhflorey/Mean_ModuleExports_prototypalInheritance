var greet = require('./greet1');
greet();							// Hello world

var greet2 = require('./greet2').greet;
greet2();							// Hello world !

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';	// Hello world!!

var greet3b = require('./greet3');
greet3b.greet();
greet3b.greeting = 'love';					// Changed hello world!

var greet3c = require('./greet3');
greet3c.greet();							// love


var Greet4 = require('./greet4');
// * because now Greet4 is a constructor, have Greet4 in a capital
var grtr = new Greet4();
grtr.greet();						// Hello world !!!


// or we can do this step in this way:

var Greet4 = require('./greet4');
var greet4 = new Greet4();
greet4.greet();					// Hello world !!!


var greet5 = require('./greet5');
greet5.greet();							// Hello World !!!!