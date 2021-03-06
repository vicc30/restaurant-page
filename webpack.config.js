const path = require('path');

module.exports = {
    entry: './src/index.js',
    //watch the changes and re render
    watch: true,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                //CSS import modules
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                //Images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};