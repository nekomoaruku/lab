(function() {
  var uploaderPreviewController = function($scope) {
    $scope.hello = "hello world!";
  };
  uploaderPreviewController.$inject = ['$scope'];
  app.controller('uploaderPreviewController', uploaderPreviewController);
})();