const path = require('path');
const PACKAGE = require('./package.json');

const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | (c) ' + new Date().getFullYear() + ', ' + PACKAGE.author + ' | ' + PACKAGE.license + ' | ' + PACKAGE.homepage;

/**
 * A function thaat returns a default webpack development configuration for local development.
 * @param       {Object} webpack           A reference to the webpack module.
 * @param       {Object} HtmlWebpackPlugin A reference to the html-webpack-plugin module.
 * @param       {Object} ExtractTextPlugin A reference to the extract-text-webpack-plugin module.
 */
function WebpackDevelopmentConfiguration (webpack, HtmlWebpackPlugin, ExtractTextPlugin) {
  return {
    cache: true,
    watch: true,
    context: __dirname,
    entry: {
      scripts: ['react', './example/example.js'],
      styles: ['./example/example.scss']
    }
  };
}

module.exports = WebpackDevelopmentConfiguration;
