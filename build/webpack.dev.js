const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const webpackCommonConf = require("./webpack.common.js");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");

module.exports = merge(webpackCommonConf, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        progress: true,
        contentBase: distPath,
        open: true,
        compress: true,
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});