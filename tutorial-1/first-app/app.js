
function sayHello(name) {
    console.log('Hello ' + name); 
}

sayHello('Hooman');

// console is a global object, as well as setTimeout and interval
// global replaces window, but variables are not part of global
var message = '';

// console.log(module);

const log = require('./logger.js');

//console.log(log);

//logger.log('message');
log('message');