var test = require('tape');
var logic = require('./logic');

test('add todo', function(t) {
  var actual = logic.addTodo(
    [
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: false }
    ],
    { id: 0, description: "fourth todo", done: false }
  );
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false },
    { id: 0, description: "fourth todo", done: false }
  ];
  t.deepEqual(actual,expected,'to test if todo added');
  t.end();
});

test('delete todo',function(t){
  var actual = logic.deleteTodo([
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: false }
    ],-1);
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false }
  ];
  t.deepEqual(actual,expected,'to test if todo deleted');
  t.end();
});