module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './dist/mygitalk.min.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}