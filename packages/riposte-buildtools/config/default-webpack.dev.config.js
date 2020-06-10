module.exports = (webpack, HtmlWebpackPlugin, MiniCssExtractPlugin) => {
  const configuration = {
    entry: {
      app: ['./src/index.js']
    },
    devtool: 'source-map',
    resolveExtensions: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      pathinfo: true,
      filename: '[name].js',
      path: path.resolve('./dist'),
      publicPath: '/'
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader'
        }]
      }, {
        test: /\.(css|scss|sass)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'resolve-url-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }, {
          test: /\.html$/,
          use: [{
            loader: 'html-loader'
          }]
        }, {
          test: /\.(jpg|png|woff|woff2|eot|ttf|ico)$/,
          use: [{
            loader: 'file-loader?name=[name].[ext]'
          }]
        }, {
          test: /\.(json|geojson)$/,
          use: [{
            loader: 'json-loader'
          }]
        }]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new HtmlWebpackPlugin({
        template: './src/index.ejs'
      })
    ]
  };

  return configuration;
};
