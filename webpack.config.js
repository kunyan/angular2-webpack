var webpack = require('webpack');

module.exports = {
    entry: "./app.ts",
    output: {
        path: './dist/js',
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }

};
