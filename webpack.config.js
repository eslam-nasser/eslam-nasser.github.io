const path = require('path');

module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    watch: true,
    // devServer: {
    //     contentBase: path.join(__dirname, './'),
    //     compress: true,
    //     port: 9000,
    // },
    // watchOptions: {
    //     poll: true,
    // },
};
