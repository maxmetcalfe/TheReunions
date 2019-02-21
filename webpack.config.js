const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './client/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js']
  },
  output: {
    path: path.join(__dirname, '/client/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "/client/dist"),
    hot: true,
    port: 8080
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: "source-map"
};
