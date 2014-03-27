var app = angular.module('lab', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url
  $urlRouterProvider.otherwise('/uploader');

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
    })
    .state('uploader', {
      url: '/uploader',
      views: {
        '@': {
          templateUrl: 'states/uploader/uploader.html'
        },
        'preview@uploader': {
          templateUrl: 'states/uploader/uploader_preview.html',
          controller: 'uploaderPreviewController'
        }
      }
    });
});
