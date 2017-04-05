(function (exports) {
'use strict';

var maxColumns = 20;

var columnsHTML = '';
for (var i = maxColumns - 1; i >= 0; i--) {
	columnsHTML += '<div class="go-column"></div>';
}

var gridHTML = "\n\t<div class=\"go-main\">\n\t\t<div class=\"go-container\">\n\t\t\t<div class=\"go-grid\">\n\t\t\t\t" + columnsHTML + "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";

var gridCSS = "\n\n\t.go-main {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\topacity: 0.5;\n\t\tz-index: 999999999999;\n\t}\n\n\t.go-container {\n\t\tmax-width: 1440px;\n\t\theight: 100%;\n\t\tmargin: auto;\n\t\tbackground-color: rgba(0,250,0,0.2);\n\t}\n\n\t.go-grid {\n\t\tdisplay: flex;\n\t\theight: 100%;\n\t\tjustify-content: space-between;\n\t\tbackground-color: rgba(255,255,255,0.2);\n\t}\n\n\t.go-column {\n\t\tdisplay: none;\n\t\theight: 100%;\n\t\tflex-grow: 1;\n\t\tflex-shrink: 0;\n\t\tbackground-color: rgba(0,200,0,0.5);\n\t}\n\n\t.go-column:not(:first-child) {\n\t\tmargin-left: 1px\n\t}\n\n\t@media ( min-width: 0px ) {\n\t\t.go-container {\n\t\t\tpadding: 0px 20px;\n\t\t}\n\t\t.go-column:nth-child(-n+10) {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t@media ( min-width: 768px ) {\n\t\t.go-container {\n\t\t\tpadding: 0px 44px;\n\t\t}\n\t\t.go-column:nth-child(-n+20) {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t@media ( min-width: 1280px ) {\n\t\t.go-container {\n\t\t\tpadding: 0px 40px;\n\t\t}\n\t}\n\n";







var gridVisible = false;
var gridComponent;

var eventsMap = {
	'ICON_CLICK' : toggleGrid,
};

chrome.runtime.onMessage.addListener(function ( message, sender, senderResponse ) {
	if ( !message.event || !(message.event in eventsMap ) ) { return }
	eventsMap[message.event]();
});


chrome.runtime.sendMessage({ message : 'test message from content' });



function toggleGrid () {

	if ( !gridVisible ) {
		gridComponent = createGridOverlayComponent();
		gridVisible = true;
		document.body.appendChild(gridComponent);
	} else {
		gridComponent.remove();
		gridComponent = null;
		gridVisible = false;
	}
}


function buildGridOverlayHTML () {
	return ("\n\t\t<style>\n\t\t\t" + gridCSS + "\n\t\t</style>\n\n\t\t" + gridHTML + "\n\t")
}


function createGridOverlayComponent () {
	var html = buildGridOverlayHTML();
	var root = document.createElement('div');
	root.innerHTML = html;
	root.style.pointerEvents = 'none';
	return root;
}

}((this.LaravelElixirBundle = this.LaravelElixirBundle || {})));
//# sourceMappingURL=content.js.map
