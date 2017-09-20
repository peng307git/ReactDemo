/**
 * Created by chkui on 2016/11/16.
 */
module.exports = {
  entry: ['./dev/js/index/comps/main.js'],//定义要引入的js文件
  output: {
    path: __dirname,
    filename: './dev/js/index/index.js' //定义要输出的js文件
  },
  module: {
    loaders: [{
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015','react']
        }
      },{
        test: /.css$/,
        loaders: ["style-loader", "css-loader"]
      }, {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=25000' //只解析小于25000字节的图片
      }
    ]
  }
};