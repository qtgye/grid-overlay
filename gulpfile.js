const elixir = require('laravel-elixir')
const { Plugins, Task } = elixir;

// console.log('elixir.config',elixir.config);
elixir.config.assetsPath = 'assets';

elixir(( mix )=>{

	mix.sass('options.scss', 'assets/css/options.css')

	mix.rollup('popup.js', 'dist/scripts/popup.js')
	mix.rollup('background.js', 'dist/scripts/background.js')
	mix.rollup('options.js', 'dist/scripts/options.js')
	mix.rollup('content.js', 'dist/scripts/content.js')

	// Mix styles together with vendor
	mix.styles([
		'../vendor/bootstrap/dist/css/bootstrap.css',
		'options.css'
	], 'dist/css/options.css')

})
