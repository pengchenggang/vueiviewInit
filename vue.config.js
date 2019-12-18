// vue.config.js 帮助文档
// https://cli.vuejs.org/zh/config/#baseurl
// author:Reciter


const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production'
  ? './'
  : './'

module.exports = {
  publicPath: BASE_URL,
  assetsDir: "./static",
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  // 设为false打包时不生成.map文件
  productionSourceMap: false
}