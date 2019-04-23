var greet = require('./greet'); // use a string aka name or location of module to import/use

//you dont need .js extension in node!

//a module is to encapsulate the code, in greet.js the code is protected so index.js cant just get the code

//note the greet above must be invoked, you passed the function, not invoked
greet();