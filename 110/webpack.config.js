const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlTemplate = require('html-webpack-template')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const API_URL = process.env.API_URL || '/api'
  return {
    entry: [
      '@babel/polyfill', // babel-polyfill so we don't need to import it anywhere
      './src',
    ],
    module: {
      rules: [
        { // Load JS files
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        { // Load CSS files
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        { // Load other files
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: ['file-loader'],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        // Make CSS smaller
        new OptimizeCssAssetsPlugin(),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({ 
        'process.env.API_URL': JSON.stringify(API_URL)
      }),
      // Skip the part where we would make a html template
      new HtmlWebpackPlugin({
        inject: false,
        template: htmlTemplate,
        appMountId: 'root',
      }),
      // Extract css
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name]-[id].css',
      }),
      new UglifyJsPlugin()
    ],
  }
}