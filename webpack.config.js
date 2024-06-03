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
    clean: true,
    filename: 'userscript-master.js',
    path: path.resolve(__dirname, 'dist'),
    scriptType: 'text/javascript',
    library: {
      name: 'master',
      type: 'assign'
    }
  },
  optimization: {
    usedExports: true,
  },
  mode: 'production',
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  }
};
