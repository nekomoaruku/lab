(function() {

  var fileReader = function($q) {

    function _getFileReader(deferred) {
      var reader = new FileReader();
      reader.onload = function() {
        deferred.resolve(reader.result);
      };
      reader.onerror = function() {
        deferred.reject(reader.result);
      };
      reader.onprogress = function(event) {
        var progress = Math.round((event.loaded / event.total) * 100);
        deferred.notify(progress);
      };
      return reader;
    }

    function read(file) {
      var deferred = $q.defer();
      var reader = _getFileReader(deferred);
      reader.readAsDataURL(file);
      return deferred.promise;
    }

    return {
      read: read
    }
  };

  fileReader.$inject = ['$q'];
  app.factory('fileReader', fileReader);

})();