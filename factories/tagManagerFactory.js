(function() {
  var tagManagerFactory = function($rootScope) {

    var tagList = [
      {
        tagName: "#TODO",
        messages: [
          {
            text: "#xxxxのようなハッシュタグを文章につけることで",
            date: new Date()
          },
          {
            text: "タグとして記録を残すことができます",
            date: new Date()
          },
          {
            text: "TODOやMEMOなどにご利用ください",
            date: new Date()
          }
        ]
      }
    ];

    function addTag(message) {
      var tagNames = findTags(message);
      var message = {
        text: message.replace(/#\S+/g, ""),
        date: new Date()
      };
      if (message.text.trim()) {
        tagNames.forEach(function(tagName) {
          var isNewTagName = true;
          tagList.forEach(function(item) {
            if (tagName === item.tagName) {
              item.messages.push(message);
              isNewTagName = false;
            }
          });
          if (isNewTagName) {
            tagList.push({
              tagName: tagName,
              messages: [message]
            });
          }
        });
      }
    }

    function findTags(message) {
      return message.match(/#\S+/g) || [];
    }

    // public method
    return {
      tagList: tagList,
      findTags: findTags,
      addTag: addTag
    }

  };
  app.factory('tagManager', tagManagerFactory);
})();