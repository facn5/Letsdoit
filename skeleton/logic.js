// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    var newid;
    newtodos = JSON.parse(JSON.stringify(todos));
    newid = todoFunctions.generateId();
    newTodo.id = newid;

    //  var newarr = Object.keys(newTodo).map(function(key) {
    //    return [Number(key), newTodo[key]];
    //  });
    //    var newKey = { newid };
    //  newKey.description = " description";
    //  var newKey = Object.assign(newid, description);//
    newtodos.concat(newTodo);
    return newtodos.concat(newTodo);
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    newtodos = JSON.parse(JSON.stringify(todos));
    //  for (var i = 0; i < newtodos.length; i++) {
    //  var obj = newtodos[idToDelete];
    //
    //    if (newtodos.indexOf(obj.id) !== -1) {
    //    newtodos.splice(i, 1);
    //  }
    //    }
    var sliced = Array.prototype.slice.call(newtodos, idToDelete);

    //  console.log(newtodos);
    console.log(sliced);
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map

    newtodos = JSON.parse(JSON.stringify(todos));
    //newtodos[idToMark].setAttribute("style", "background-color: red;");
    newtodos[idToMark].done = !newtodos[idToMark].done;
    console.log(newtodos[idToMark]);

    return newtodos;
  },

  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
console.log("the file is connected");

todoFunctions.addTodo(
  [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false }
  ],
  { id: 0, description: "fourth todo", done: false }
);
