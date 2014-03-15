(function() {
  var labController = function($scope) {
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
  labController.$inject = ['$scope'];
  app.controller('labController', labController);
})();