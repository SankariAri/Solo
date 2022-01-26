const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let NODE_ENV;

module.exports = {
    entry: './client/index.js',
    output: {
        path:path.resolve(__dirname, './build'),
        filename:'bundle.js', 
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: { presets: ['@babel/preset-env', '@babel/preset-react']},  
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
          publicPath: '/build',
        },
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'html-webpack-plugin',
          template: 'index.html',
        }),
      ],
}
