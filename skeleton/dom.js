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
    // you will need to use addEventListener
    var description = document.createElement("span");
    // add span holding description
    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);
    todoNode.appendChild(description);

    deleteButtonNode.className = "fas fa-trash-alt";
    description.innerText = todo.description;

    // add markTodo button
    var markTodoButtonNode = document.createElement("button");

    // add classes for css
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit

      // what is inside event.target?
      event.preventDefault();
      lettodoObj = {};
      document.getElementsByTagName("span").innerText = document.getElementById(
        "text-box"
      ).value;

      console.log(document.getElementById("text-box").value);
      lettodoObj.description = document.getElementById("text-box").value;
      //var y = (document.getElementsByTagName("span").textContent = x);

      // hint: todoFunctions.addTodo
      state = todoFunctions.addTodo(state, lettodoObj); // ?? change this!
      renderState(state);
      console.log("this works");
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
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
