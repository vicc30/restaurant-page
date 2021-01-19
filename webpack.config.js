const path = require('path');

module.exports = {
    entry: './src/index.js',
    //watch the changes and re render
    watch: true,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                //CSS import modules
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};