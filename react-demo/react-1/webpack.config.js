var webpack=require('webpack');
module.exports={
  entry:__dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: 'build.js'
  },
  devServer: {
    contentBase:__dirname + '/build',
    port:"9999",
    host:"localhost",
    hot:true,
    inline: true,
    historyApiFallback: true,
    noInfo: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};