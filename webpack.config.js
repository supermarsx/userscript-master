const path = require('path');

module.exports = {
  entry: './source/userscript-master.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    iife: false,
    filename: 'userscript-master.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'master',
      type: 'window'
    }
  },
  optimization: {
    usedExports: true,
  },
  mode: 'none',
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  }
};
