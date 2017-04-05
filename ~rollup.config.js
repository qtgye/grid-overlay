const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')


// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';

module.exports =  {
  format: 'iife',
  plugins: [
  	resolve(),
  	babel({
  	exclude: 'node_modules/**'
  }) ],
};
