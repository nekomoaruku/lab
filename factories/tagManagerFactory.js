(function() {
  var tagManagerFactory = function() {

    /**
     * messageに含まれる#タグを返します。
     * #タグが存在しない場合、空配列を返します。
     * @param message
     * @returns []
     */
    function getTags(message) {
      return message.match(/#\S+/g) || [];
    }

    // public method
    return {
      getTags: getTags
    }

  };
  app.factory('tagManager', tagManagerFactory);
})();