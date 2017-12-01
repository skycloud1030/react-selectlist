var path = require('path');
var webpack = require('webpack');
var node_modules_dir = __dirname + '/node_modules';
var min= process.argv.indexOf("--min")===-1?false:true;
var plugins=[];

if(min){
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }))
}

var config = {
    entry: {
      "react-selectlist":path.resolve(__dirname, 'index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: "ReactSelectlist",
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      'react': 'react',
      'react-dom': 'react-dom'
    },
    plugins: plugins,
    resolve: { alias: {} },
    module: {
        loaders: [
          {
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            query: {
              cacheDirectory:true,
              presets: ['env', 'stage-0', 'react']
            }
          },
          {
            test: /\.css$/,
            exclude: /(node_modules|bower_components)/,
            loader: "style!css"
          },
          { test: /\.(png|jpg|gif)$/,loader: 'url-loader?name=[path][name].[ext]&limit=50000'}, // inline base64 URLs for <=8k images, direct URLs for the rest
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=[path][name].[ext]" },
          { test: /\.(woff|woff2)$/, loader:"url-loader?name=[path][name].[ext]&prefix=font/&limit=50000" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?name=[path][name].[ext]&limit=50000&mimetype=application/octet-stream" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" }
        ],
    }
};


module.exports = config;
