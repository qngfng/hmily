/**
 * Created by Bear on 17/12/6.
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html'
            }
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"  // creates style nodes from JS strings
                }, {
                    loader: "css-loader"    // translates CSS into CommonJS
                }, {
                    loader: "less-loader"   // compiles Less to CSS
                }]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
};