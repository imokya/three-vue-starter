const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')
const commonConfig = require('./common.config')
const { merge } = require('webpack-merge')

const devConfig = {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    static: {
      publicPath: config.publicPath
    }
  }
}

const finalConfig = merge(commonConfig, devConfig)
module.exports = finalConfig
