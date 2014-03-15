(function() {
  var roomController = function($scope) {
    $scope.message = "";
    $scope.messages = [];

    $scope.submitMessage = function() {
      if ($scope.message.trim()) {
        $scope.messages.unshift($scope.message);
      }
      $scope.message = "";
      document.querySelector('textArea').focus();
    }
  };
  roomController.$inject = ['$scope'];
  app.controller('roomController', roomController);
})();