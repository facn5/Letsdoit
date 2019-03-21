// part 2 linking it all together
// var logic = require("./logic");
//function deleteButtonNode() {} // The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = []; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    var description = document.createElement("span");
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    var markButtonNode = document.createElement("button");
    markButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    deleteButtonNode.className = "fas fa-trash-alt";
    markButtonNode.className = "fas fa-check";
    description.innerText = todo.description;

    if (todo.done) {
      description.className = "marked";
    }

    todoNode.appendChild(deleteButtonNode);
    todoNode.appendChild(markButtonNode);
    todoNode.appendChild(description);

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var newState = {};
      var descValue = document.getElementById("text-box").value;
      document.getElementsByTagName("span").innerText = descValue;
      var newid = todoFunctions.generateId();
      newState.id = newid;

      newState.description = descValue;
      newState.done = false;

      state = todoFunctions.addTodo(state, newState);
      update(state);
      document.getElementById("text-box").value = "";
    });
  }

  // you should not need to change this function
  function sortById(x, y) {
    var firstKey = x.id;
    var secKey = y.id;
    if (firstKey < secKey) return 1;
    return -1;
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    state = todoFunctions.sortTodos(state, sortById);
    window.localStorage.myList = JSON.stringify(state);
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
