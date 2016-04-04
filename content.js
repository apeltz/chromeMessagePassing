// content.js
console.log("I can be accessed from content.js");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.instructions === "giveMeFirstImgPlease"){
        var firstImgTag = 'http:'+$('body').find('img').attr('src').replace(/http:|https:/,'');
        var messageBackToExtension = {fromTab: "imgTagAsRequested", imgTagSrc: firstImgTag};
        sendResponse(messageBackToExtension);
      }

});
