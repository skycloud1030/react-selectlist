const path = require("path");
const webpack = require("webpack");
const node_modules_dir = __dirname + "/node_modules";
var plugins = [];

var config = {
  entry: {
    index: path.resolve(__dirname, "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "ReactSelectlist",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  plugins: plugins,
  resolve: { alias: {} },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: { cacheDirectory: true },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?name=[path][name].[ext]&limit=50000",
      }, // inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=[path][name].[ext]",
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader?name=[path][name].[ext]&prefix=font/&limit=50000",
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          "url-loader?name=[path][name].[ext]&limit=50000&mimetype=application/octet-stream",
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          "url-loader?name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml",
      },
    ],
  },
};

module.exports = config;
