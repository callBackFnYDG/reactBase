const path = require('path');

//导入 在内存中自动生成 index 页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),//源文件
    filename: 'index.html'//生成的内存中首页的名称
})

// 向外暴漏一个配置文件; 
//因为 webpack是基于Node构建的;
// Node 是谷歌的引擎抠出来的
module.exports = {
    //development production
    mode:"development", 
    //在webpack 4.X中，有很大特性，就是 约定大于配置 
    // 约定 默认的打包入口路径是 src->index.js
    entry: "./src/main.js",
    plugins: [
        htmlPlugin
    ]

}