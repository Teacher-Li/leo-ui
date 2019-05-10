const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',

  // 输出文件目录
  outputDir: "dist",

  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,

  filenameHashing: false,
  devServer: {
    host: 'localhost',
    port: 1024,
    https: false,
    open: true,
    hotOnly: false,
    proxy: null,
    before: app => {}
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },

  // 生产环境 sourceMap
  productionSourceMap: false,
};