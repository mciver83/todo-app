angular
  .module('todoApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('todos', {
          url: '/',
          templateUrl: '/templates/todo.html',
          controller: 'TodoCtrl'
      })

    $urlRouterProvider.otherwise('/')
  })
