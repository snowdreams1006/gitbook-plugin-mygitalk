const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackCommonConf = require("./webpack.common.js");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");

module.exports = merge(webpackCommonConf, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.BannerPlugin('powered by https://github.com/snowdreams1006 \r'),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
});