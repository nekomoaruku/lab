(function() {

  var uploaderPreviewController = function($scope, fileReader) {

    $scope.name = "Manni";
    $scope.uploadFile = null;
    $scope.file = null;

    console.log(fileReader);

    $scope.fileChosen = function() {
      var file = document.querySelector("#fileBtn").files[0];
      fileReader.read(file)
        .then(function(result) {
          console.log(result);
          $scope.uploadFile = result;
        }, function(error) {
          console.log(error);
        }, function(progress) {
          console.log(progress);
        });
    }

  };

  uploaderPreviewController.$inject = ['$scope', 'fileReader'];
  app.controller('uploaderPreviewController', uploaderPreviewController);

})();