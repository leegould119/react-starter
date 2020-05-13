const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "dist")
    },
    //For showing correct line numbers and code in console
    devtool: "cheap-module-source-map",
    module: {
        rules: [
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
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            BASEPATH: "''",
            WEB_PACK_CONFIG_RUNNING: "'development-config'"
        }),
        new CopyWebpackPlugin([{ from: "src/img", to: "../dist/src/img" }])
    ]
};