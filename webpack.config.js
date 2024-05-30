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
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'userscript-master.js',
    path: path.resolve(__dirname, 'dist'),
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
