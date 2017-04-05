(function (exports) {
'use strict';

// console.log('window',window);
// console.log('chrome',chrome);
// console.log('document',document);

// const div = document.createElement('div')
// div.textContent = 'Grid Overlay'
// document.body.appendChild(div)

chrome.runtime.onMessage.addListener(function ( message, sender, senderResponse ) {
	console.log('message received from background : ', message);
});


chrome.runtime.sendMessage({ message : 'test message from content' });

}((this.LaravelElixirBundle = this.LaravelElixirBundle || {})));
//# sourceMappingURL=content.js.map
