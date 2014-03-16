var app = angular.module('lab', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url
  $urlRouterProvider.otherwise('/room');

  // Set up router
  $stateProvider
    .state('room', {
      url: '/room',
      templateUrl: 'states/room/room.html',
      controller: 'roomController'
    });
});
