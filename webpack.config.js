var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./app",
    vendor: [
      'es6-shim',
      'zone.js/dist/zone',
      'reflect-metadata',
      'angular2/core',
      'angular2/platform/browser'
    ]
  },
  output: {
    path: './dist/js',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      'vendor',
      'vendor.bundle.js'
    )
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint',
        exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
      }
    ],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
    }]
  }

};
