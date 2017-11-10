var webpack = require("webpack");
var path = require("path");
var PACKAGE = require("./package.json");
var PACKAGE_NAME = PACKAGE.name + "-" + PACKAGE.version;
var BUILD_DIR = path.resolve(__dirname, "bundle");
var APP_DIR = path.resolve(__dirname, "src");

var pathsToClean = ["bundle/"];
var cleanOptions = {
  root: __dirname,
  verbose: true
};
var config = {
  entry: "./index.js",
  output: {
    path: BUILD_DIR, //Path where the bundle should be exported
    filename: PACKAGE_NAME + ".js", //Filename
    publicPath: "/", //Where the js gets loaded from

    library: "realtimechart",
  libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        enforce: "pre",
        use: "json-loader"
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: ["babel-loader"],
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
  ]
};
module.exports = config;
