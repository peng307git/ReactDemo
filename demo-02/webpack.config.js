module.exports = {
  entry: "./js/index.js",
  output: {
    path: "./build/",
    filename: "index.js"
  },
  module: {
    loaders: [{
      test: /.css$/,
      loaders: ["style", "css"],
      exclude: "/node_modules/"
    }]
  },
  devServer: {
    hot: true,
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.css', '.jsx']
  }
}