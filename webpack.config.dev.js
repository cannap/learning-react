var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  debug: true,
  devServer: {
    // proxy calls to api to our own node server backend
    proxy: {
      '/api/v1/*': 'http://localhost:5000/'
    },
  },
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.scss$/,
        loader: 'style?sourceMap!css?sourceMap!sass?sourceMap'
      },

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};