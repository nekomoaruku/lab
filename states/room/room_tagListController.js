(function() {
  var roomTagListController = function($scope, tagManager) {

    $scope.tagList = tagManager.tagList;
    $scope.$watch('tagList', function(newValue) {
      $scope.tagList = newValue;
    });

  };
  roomTagListController.$inject = ['$scope', 'tagManager'];
  app.controller('roomTagListController', roomTagListController);
})();