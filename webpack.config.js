const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = {
    entry: {
        main: './src/App.jsx'
    },
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.(png|jpg)$/,
            loader: 'file-loader'
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        },
        {
            test: /\.css$/,
            use: ["style-loader",{ 
                loader: 'css-loader',
                 options: {
                      minimize: true, 
                }
            },
            {
                loader: 'postcss-loader'
            }
        ]
        },
        {
            test: /\.(sass|scss)$/,
            use: ["style-loader", { 
                    loader: 'css-loader',
                     options: {
                          minimize: true, 
                    }, 
                },
                {
                    loader: 'postcss-loader'
                },
                "sass-loader"]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader"
            }
            ]
        }
        ]
    },
    devServer: {
        historyApiFallback: true,
        // host: '0.0.0.0',//your ip address
        // port: 8080,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        })
    ]
};