const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './assets/js/index.js',
        'app.min': './assets/js/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js/compiled'),
    },
    mode: 'production',
    watch: true,
    devServer: {
        publicPath: './',
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             include: /\.min\.js$/,
    //         }),
    //     ],
    // },
    // devServer: {
    //     contentBase: path.join(__dirname, './'),
    //     compress: true,
    //     port: 9000,
    // },
    // watchOptions: {
    //     poll: true,
    // },
};
