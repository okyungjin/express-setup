import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'development',
  entry: path.resolve(path.resolve(), 'client/index.js'),
  output: {
    filename: 'main.js?v=[hash]',
    path: path.resolve(path.resolve(), 'dist'),
    clean: true
  },
  module: {
    rules: [{
    }, {
      test: /\.(styl|css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '할 일 목록!',
    }),
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: `Build Date: ${new Date().toLocaleString()}`
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
};
