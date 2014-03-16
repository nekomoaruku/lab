var app = angular.module('lab', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url
  $urlRouterProvider.otherwise('/room');

  // Set up router
  $stateProvider
    .state('room', {
      url: '/room',
      views: {
        '@': {
          templateUrl: 'states/room/room.html'
        },
        'timeline@room': {
          templateUrl: 'states/room/room_timeline.html',
          controller: 'roomTimelineController'
        },
        'tagList@room': {
          templateUrl: 'states/room/room_tagList.html',
          controller: 'roomTagListController'
        }
      }
    });
});
