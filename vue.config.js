module.exports = {
  // 基本路径
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',

  // 输出文件目录
  outputDir: "dist",

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

  // 生产环境 sourceMap
  productionSourceMap: false,
};