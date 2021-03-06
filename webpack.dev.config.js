const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: ['./src/public/index.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.es6'],
    },
    mode: 'development',
    target: 'web',
    devtool: '#source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitWarning: true,
                    failOnError: false,
                    failOnWarning: false
                }
            },
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        //options: { minimize: true }
                    }
                ]
            },
            { 
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/assets/index.html",
            filename: "./index.html",
            excludeChunks: [ 'server' ]
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}