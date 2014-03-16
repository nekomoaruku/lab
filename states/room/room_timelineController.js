(function() {
  var roomTimelineController = function($scope, tagManager) {

    $scope.message = "";
    $scope.messages = [];

    $scope.submitMessage = function() {
      if ($scope.message.trim()) {
        var newMessage = {
          message: $scope.message,
          date: new Date(),
          tags: tagManager.findTags($scope.message)
        };
        if (newMessage.tags) {
          tagManager.addTag(newMessage.message);
        }
        $scope.messages.unshift(newMessage);
      }
      $scope.message = "";
      document.querySelector('textArea').focus();
    };

  };
  roomTimelineController.$inject = ['$scope', 'tagManager'];
  app.controller('roomTimelineController', roomTimelineController);
})();