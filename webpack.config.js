import path from 'path';

export default {
  mode: 'development',
  entry: path.resolve(path.resolve(), 'public/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(path.resolve(), 'public'),
  },
};
