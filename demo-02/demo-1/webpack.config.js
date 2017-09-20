var path = require("path");

module.exports = {
    entry:{
        index:__dirname+"/app/index.js",   
        main:__dirname+"/app/main.js"
      },
      output: {
        path: __dirname+'/build',
        filename: '[name].js'
      },
    module:{
        loaders:[{
            test:/\.jsx?$/,   //用正则来匹配js 文件或者jsx文件
            loader:'babel-loader' ,//加载模块 loader 是 ‘babel-loader’ 的缩写
        }]
    }

};
//module.exports = config;