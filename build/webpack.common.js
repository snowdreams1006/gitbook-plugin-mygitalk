const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");

module.exports = {
    entry: path.join(srcPath, "index"),
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "test-mygitalk",
            filename: "index.html"
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                loader: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: distPath
    }
};