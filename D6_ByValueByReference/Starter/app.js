//pass by value
function change(b) {
  b=2;
  console.log(b);
};

var a =1
change(a);

console.log(a);

//pas by reference
function changeObj(d) {
  d.prop1= function() {};
  d.prop2={};
}

var c = {};

changeObj(c);

//as c is referened and d tell it what the reference should look like, c will change as you modify it in memory
//to an object you can add in and change properties due to ability to change by reference
console.log(c);