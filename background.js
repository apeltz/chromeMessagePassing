// background.js
console.log("I can be accessed from backround.js");

$(document).ready(function() {
  $('#btn').on('click', function() {
    var messageToActiveTab = {instructions: "giveMeFirstImgPlease"};
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, messageToActiveTab, function(response) {
        $('#theImg').remove();
        $('#infoFromTabDOM').append('<img id="theImg" src="'+response.imgTagSrc+'" />');
      });
    });
  });
});
