angular
  .module('todoApp')
  .controller('TodoCtrl', function($scope, TodoSrvc) {

    getTodos();

    $scope.addTodo = function(todo) {
      TodoSrvc.addTodo(todo).then(function(response) {
        $scope.todos.push(response);
        $scope.newTodo = {};
      });
    }

    $scope.updateTodo = function(todo) {
      TodoSrvc.updateTodo(todo).then(function(response) {
        getTodos();
      });
    }

    $scope.removeTodo = function(todo) {
      TodoSrvc.removeTodo(todo).then(function() {
        $scope.todos.splice($scope.todos.indexOf(todo), 1);
      });
    }

    function getTodos() {
      TodoSrvc.getTodos().then(function(response) {
        $scope.todos = response;
      });
    }
  })
