const maxColumns = 20

let columnsHTML = ''
for (var i = maxColumns - 1; i >= 0; i--) {
	columnsHTML += '<div class="go-column"></div>'
}

const gridHTML = `
	<div class="go-main">
		<div class="go-container">
			<div class="go-grid">
				${columnsHTML}
			</div>
		</div>
	</div>
`

const gridCSS = `

	.go-main {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		opacity: 0.5;
		z-index: 999999999999;
	}

	.go-container {
		max-width: 1440px;
		height: 100%;
		margin: auto;
		background-color: rgba(0,250,0,0.2);
	}

	.go-grid {
		display: flex;
		height: 100%;
		justify-content: space-between;
		background-color: rgba(255,255,255,0.2);
	}

	.go-column {
		display: none;
		height: 100%;
		flex-grow: 1;
		flex-shrink: 0;
		background-color: rgba(0,200,0,0.5);
	}

	.go-column:not(:first-child) {
		margin-left: 1px
	}

	@media ( min-width: 0px ) {
		.go-container {
			padding: 0px 20px;
		}
		.go-column:nth-child(-n+10) {
			display: block;
		}
	}

	@media ( min-width: 768px ) {
		.go-container {
			padding: 0px 44px;
		}
		.go-column:nth-child(-n+20) {
			display: block;
		}
	}

	@media ( min-width: 1280px ) {
		.go-container {
			padding: 0px 40px;
		}
	}

`







let gridVisible = false;
let gridComponent;

const eventsMap = {
	'ICON_CLICK' : toggleGrid,
}

chrome.runtime.onMessage.addListener(( message, sender, senderResponse ) => {
	if ( !message.event || !(message.event in eventsMap ) ) return
	eventsMap[message.event]()
})


chrome.runtime.sendMessage({ message : 'test message from content' })



function toggleGrid () {

	if ( !gridVisible ) {
		gridComponent = createGridOverlayComponent()
		gridVisible = true
		document.body.appendChild(gridComponent)
	} else {
		gridComponent.remove()
		gridComponent = null
		gridVisible = false
	}
}


function buildGridOverlayHTML () {
	return `
		<style>
			${gridCSS}
		</style>

		${gridHTML}
	`
}


function createGridOverlayComponent () {
	let html = buildGridOverlayHTML()
	let root = document.createElement('div')
	root.innerHTML = html
	root.style.pointerEvents = 'none'
	return root;
}
