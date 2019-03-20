var test = require('tape');
var logic = require('./logic');

var state = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: true },
  { id: -1, description: "third todo", done: false }
]; 

test('add todo', function(t) {
  var actual = logic.addTodo(state,
    { id: 0, description: "fourth todo", done: false }
  );
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: true },
    { id: -1, description: "third todo", done: false },
    { id: 0, description: "fourth todo", done: false }
  ];
  t.deepEqual(actual,expected,'to test if todo added');
  t.end();
});

test('delete todo',function(t){
  var actual = logic.deleteTodo(state,-1);
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: true }
  ];
  t.deepEqual(actual,expected,'to test if todo deleted');
  t.end();
});

test('mark todo',function(t){
  var actual = logic.markTodo(state,-3);
  var expected = [
    { id: -3, description: "first todo", done: true },
    { id: -2, description: "second todo", done: true },
    { id: -1, description: "third todo", done: false }
  ];
  t.deepEqual(actual,expected,'todo list marked or not');
  t.end();
});

test('sort done todos',function(t){
  var actual = logic.sortTodos(state,"done");
  var expected = [
    { id: -2, description: "second todo", done: true }
  ];
  t.deepEqual(actual,expected,'to sort the todos');
  t.end();
});

test('sort undone todos',function(t){
  var actual = logic.sortTodos(state,"undone");
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -1, description: "third todo", done: false }
  ];
  t.deepEqual(actual,expected,'to sort the todos');
  t.end();
});