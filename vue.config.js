//vue.config.js
module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Time Tracking'
      return args
    })
  },
  publicPath: '/time-tracking/',
}
