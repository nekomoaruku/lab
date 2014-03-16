(function() {
  var roomTagListController = function($scope) {
    $scope.hello = "Hello! This is TagList Controller!";
  };
  roomTagListController.$inject = ['$scope'];
  app.controller('roomTagListController', roomTagListController);
})();