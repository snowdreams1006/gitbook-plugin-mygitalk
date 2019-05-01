module.exports = {
    entry: './src/index.js',
    output: {
        path: "./dist",
        filename: 'mygitalk.min.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}