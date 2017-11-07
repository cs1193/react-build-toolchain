const PACKAGE = require('./package.json');
const BANNER = PACKAGE.name + ' - ' + PACKAGE.version + ' | (c) ' + new Date().getFullYear() + ', ' + PACKAGE.author + ' | ' + PACKAGE.license + ' | ' + PACKAGE.homepage;

module.exports = new webpack.BannerPlugin(BANNER);
