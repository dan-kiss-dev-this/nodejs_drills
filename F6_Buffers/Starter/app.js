// we convert string 'Hello' to binary data below using utf8
var buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[1]);

buf.write('wo');
console.log(buf.toString());