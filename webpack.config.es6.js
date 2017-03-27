var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  entry:{
    build:"./es6/index.js"
  },
  output: {
    path: __dirname+'/build',
    filename: 'es6_build.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, 
        loader: 'style-loader!css-loader',
        exclude:"/node_modules/"
      },
      {
        test:/.js$/,
        loaders:['babel-loader'],
        exclude:"/node_modules/",
        include:path.resolve(__dirname,'/es6/')
      }
    ]
  },
  devServer:{
    hot:true,
    inline:true
  },
  resolve: {
    extensions: ['.js', '.css', '.jsx']
  },
  plugins:[
  new htmlWebpackPlugin({
        title:"es2016",
        filename:'es2016-1.html'
  })  
  ]
};