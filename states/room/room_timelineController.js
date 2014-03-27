(function() {
  var roomTimelineController = function($scope, tagManagerService) {

    $scope.message = "";
    $scope.messages = [];

    $scope.submitMessage = function() {
      if ($scope.message.trim()) {
        var newMessage = {
          message: $scope.message,
          date: new Date(),
          tags: tagManagerService.findTags($scope.message)
        };
        if (newMessage.tags) {
          tagManagerService.addTag(newMessage.message);
        }
        $scope.messages.unshift(newMessage);
      }
      $scope.message = "";
      document.querySelector('textArea').focus();
    };

  };
  roomTimelineController.$inject = ['$scope', 'tagManagerService'];
  app.controller('roomTimelineController', roomTimelineController);
})();