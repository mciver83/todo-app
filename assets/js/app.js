angular
  .module('todoApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: '/templates/todo.html',
          controller: 'TodoCtrl'
      })
      .otherwise('/')

  })
