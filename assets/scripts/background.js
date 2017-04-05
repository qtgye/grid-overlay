(function (exports) {
'use strict';

chrome.browserAction.onClicked.addListener(function (e) {
	getActiveTab( function (tabId) {
			chrome.tabs.sendMessage( tabId, { event: "ICON_CLICK", message: "The icon was clicked!"}, function () {
				//
			});
	});

});

// chrome.storage.local.set({"foo":"bar"}, data => console.log(data))

// chrome.extension.onRequest.addListener((request, sender, sendResponse) => {
// 	// if (request.method === "getHTML") {
//  //    sendResponse({data: document.title});
//  //  } else {
//  //    sendResponse({});
//  //  }
// })

// chrome.extension.sendRequest({method: "getHTML", data: document.title});

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });

chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
	console.log('received by background : ', request);
	console.log('sender',sender);

	chrome.tabs.sendMessage(sender.id, {greeting: "Thanks. I have recevied your message"}, function () {

	});

});




function getActiveTab (callback) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  callback(tabs[0].id);
	});
}

}((this.LaravelElixirBundle = this.LaravelElixirBundle || {})));
//# sourceMappingURL=background.js.map
