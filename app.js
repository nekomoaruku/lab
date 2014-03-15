var app = angular.module('lab', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url
  // Without '/', you will have a problem!
  $urlRouterProvider.otherwise('/lab');

  // Set up router
  // For url, you must prefix the '/'
  $stateProvider
    .state('lab', {
      url: '/lab',
      templateUrl: 'states/lab/lab.html',
      controller: 'labController'
    });
});

