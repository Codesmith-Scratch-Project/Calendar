const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env } = require('process')

module.exports = {
  mode: env.NODE_ENV,
  entry: { src: './client/App.jsx' },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: './client/index.html'
  })],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/build',
    },
    proxy:  { '/auth' : 'http://localhost:3000',
              '/calendar':'http://localhost:3000' },
  },
  module: {
    rules: [{
      test: /\.js|\.jsx?/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
      }],
      exclude: /node_modules/,
    },
    {
      test: /\.css/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};