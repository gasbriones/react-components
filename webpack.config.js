var webpack = require('webpack');
var path = require('path');


module.exports = {
    context: path.join(__dirname, '/src'),
    entry: "./components/controller.jsx",
    output: {
        path: path.resolve(__dirname + "/public/dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [{
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }]
    },
    devServer: {
        historyApiFallback: true
    }
}