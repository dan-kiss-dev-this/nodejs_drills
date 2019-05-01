var obj = {
  name: 'John Doe',
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();
// we use .call to invoke greet but we pass in a new object 'this' will point to
obj.greet.call({ name: 'Jane Doe'}) //, param1, param2)

obj.greet.apply({ name: 'Jane Doe'}) //,[param1, param2])