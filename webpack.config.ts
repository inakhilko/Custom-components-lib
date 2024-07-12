import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { Configuration } from 'mini-css-extract-plugin';

type Mode = 'production' | 'development';
interface EnvVariables {
  mode: Mode;
}

export default (env: EnvVariables): Configuration => {
  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      libraryTarget: 'umd',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(s*)css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.tsx', '.ts'],
    },
    devServer: {
      port: 5000,
      open: true,
    },
  };
};
