/**
 * [GenerateHtmlWebpackPlugin description]
 * @param       {[type]} environment [description]
 * @param       {[type]} template    [description]
 * @param       {[type]} favicon     [description]
 * @constructor
 */
function GenerateHtmlWebpackPlugin (environment, template, favicon) {
  let plugin = {
    template: template || 'index.ejs',
    favicon: favicon || 'favicon.ico',
    inject: false
  };

  if (environment === 'PROD') {
    plugin['minify'] = {
      collapseWhitespace: true,
      removeComments: true
    };
  }

  return new HtmlWebpackPlugin(plugin);
}

module.exports = GenerateHtmlWebpackPlugin;
