const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config.json')
const commonConfig = require('./common.config')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const proConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?[contenthash]'
    }),
    new CleanWebpackPlugin()
  ],

}
  
module.exports = merge(commonConfig, proConfig)

