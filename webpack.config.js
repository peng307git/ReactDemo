//joel 
var path = require('path');
var webpack = require("webpack");
module.exports = {
    entry:['webpack/hot/dev-server',path.resolve(__dirname,'lesson1/main.js')],
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'bundle.js'
    },
    devServer:{
        inline:true,
        port:9999
    },
    module:{
        loaders:[
            {
                test:/\.js?$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel',
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]

};