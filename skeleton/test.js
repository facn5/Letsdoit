var test = require("tape");
var logic = require("./logic");

test("the length of addtodo after the a", function(t) {
  var actual = todoFunctions.addTodo(
    [
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: false }
    ],
    { id: 0, description: "fourth todo", done: false }
  ).length;

  var expected = 4;
  t.equal(actual, expected, "Should make the first function work");
  t.end();
});

test("Example test", function(t) {
  t.pass();
  t.end();
});
