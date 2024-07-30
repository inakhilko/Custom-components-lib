import path from 'path';

export default {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist', 'src'),
    filename: 'index.js',
    libraryTarget: 'umd',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: [/(\.test\.(ts|tsx)$)/, /node_modules/],
        use: 'ts-loader',
      },
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  externals: {
    react: 'react',
  },
};
