const path = require('path');

function WebpackOutputFile (environment) {
  const directory = (environment === 'PROD') ? './dist' : './.tmp';
  let output = {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(directory)
  };

  if (environment === "PROD") {
    output['pathinfo'] = true;
  }

  return output;
}

module.exports = WebpackOutputFile;
