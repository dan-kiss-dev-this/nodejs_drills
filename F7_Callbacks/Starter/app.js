function greet(callback) {
  console.log('Hello!');
  var data = {
    name: 'John Doe'
  };
  // see you pass the callback some data, as you pass function greet a callback and the callback is invoked with the data above it as you invoke greet  below it will contain the data originally passed to it, maybe you run the callback after it gets back some data
  callback(data);
}

greet(function (data) {
  console.log('the callback was invoked');
  console.log(data);
});

greet(function (data) {
  console.log('the 2nd callback was invoked');
  console.log(data.name)
});