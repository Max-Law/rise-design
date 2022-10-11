const { defineConfig } = require('@vue/cli-service');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
// 打包分析工具
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: true, //兼容ie
  publicPath: './',
  css: {
    extract: false, //是否提取css文件
  },
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin(),
      new MonacoWebpackPlugin({
        languages: ['json', 'javascript', 'typescript'],
      }),
    ],
  },
});
