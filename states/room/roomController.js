(function() {
  var roomController = function($scope, tagManager) {
    $scope.message = "";
    $scope.messages = [];

    $scope.submitMessage = function() {
      if ($scope.message.trim()) {
        var newMessage = {
          message: $scope.message,
          date: new Date(),
          tags: tagManager.getTags($scope.message)
        };
        $scope.messages.unshift(newMessage);
      }
      $scope.message = "";
      document.querySelector('textArea').focus();
    }
  };
  roomController.$inject = ['$scope', 'tagManager'];
  app.controller('roomController', roomController);
})();