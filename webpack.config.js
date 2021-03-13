const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "./client/index"
  ],
  mode: "production",
  module: {
    rules: [
      { test: /\.js?$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  resolve: {
    modules: [
      path.resolve("./"),
      path.resolve("./node_modules")
    ],
    extensions: [".js"]
  },
  output: {
    path: path.join(__dirname, "/client/dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "/client/dist"),
    hot: true,
    port: 8080
  },
  devtool: "source-map"
};
