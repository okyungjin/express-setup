import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  mode: 'development',
  entry: path.resolve(path.resolve(), 'client/index.js'),
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(path.resolve(), 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '할 일 목록~!'
    }),
    new CleanWebpackPlugin(),
  ],
};
