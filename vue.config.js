const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://developer-lostark.game.onstove.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // /api를 제거
      },
    },
  },
});