angular
  .module('todoApp')
  .service('TodoSrvc', function($http) {

    this.getTodos = function() {
      return $http.get('todo/getTodos').then(function(response) {
        return response.data;
      });
    }

    this.addTodo = function(todo) {
      return $http.post('todo/addTodo', {todo: todo}).then(function(response) {
        return response.data;
      });
    }

    this.updateTodo = function(todo) {
      return $http.put('todo/updateTodo', {todo: todo}).then(function(response) {
        return response.data
      });
    }

    this.removeTodo = function(todo) {
      return $http.post('todo/removeTodo', {todo: todo});
    }
  });
