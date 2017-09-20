var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:{
    build:"./static/index.js",   
    app:"./static/app.js"
  },
  output: {
    path: __dirname+'/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }
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
        title:"helloyes",
        filename:'body.html',   //自动生成的文件名称
        chunks:['app']          //自动生成文件的入口js        
  })  
  ]
};