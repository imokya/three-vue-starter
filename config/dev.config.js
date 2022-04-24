const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config.json')
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

module.exports = merge(commonConfig, devConfig)

