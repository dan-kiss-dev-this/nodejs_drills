var Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res){
    //seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'Learn Node',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Buy Dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Go to the gym',
        isDone: false,
        hasAttachment: false
      },
    ];
    Todos.create(starterTodos, function(err, results){
      if (err) {
        console.log(err);
      }
      res.send(results);
    });
  });
}