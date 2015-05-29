
  angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn web design', done:true},
      {text:'learn web development', done:true},
      {text:'learn HTML5 and CSS3', done:true},
      {text:'learn canvas', done:false},
      {text:'learn javascript basics', done:true},
      {text:'learn javascript intermediate', done:true},
      {text:'learn javascript advace', done:false},
      {text:'be master at javascript', done:false},
      {text:'learn an angular', done:true},
      {text:'build an angular app', done:false},
      {text:'learn an ember', done:true},
      {text:'build an ember app', done:false},
      {text:'learn a backbone', done:true},
      {text:'build a backbone app', done:false},
      {text:'learn a jquery', done:true},
      {text:'build a jquery app', done:false},
      {text:'learn a github', done:true},
      {text:'be master at git', done:false},
      {text:'make a website', done:true},
      {text:'make 5 more in next 2 months', done:false},
      {text:'make 10 more in next 4 months', done:false}
    ];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
