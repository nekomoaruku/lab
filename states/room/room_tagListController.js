(function() {
  var roomTagListController = function($scope, tagManagerService) {

    $scope.tagList = tagManagerService.tagList;
    $scope.$watch('tagList', function(newValue) {
      $scope.tagList = newValue;
    });

  };
  roomTagListController.$inject = ['$scope', 'tagManagerService'];
  app.controller('roomTagListController', roomTagListController);
})();