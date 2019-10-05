module.exports = {
    //Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
    //指定根目录，便不会再上父级目录查找配置
    root: true,
    //全局变量
    env: {
        //shared-node-browser => brower,node
        browser: true,
        node: true,
        es6: true
    },
    parser: "babel-eslint",//babel-eslint解析器，支持babel语法
    //解析器选项，帮助ESLint 确定什么是解析错误
    parserOptions: {
        ecmaVersion: 6,//指定使用的 ECMAScript 版本
        sourceType: "module",//设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        ecmaFeatures: {
            // globalReturn:true,//全局作用域下是否启用return
            // impliedStrict :"",//是否启用‘use strict’
            jsx :true,
        },
    },
    //默认规则
    extends: [
        "eslint:recommended",
        // "plugin:vue/recommended",
        // "plugin:prettier/recommended"
      ],
    //定义使用的全局变量，防止报错
    globals: {

    },
    //插件,校验.vue文件
    plugins: [
        "vue",
        "html"
    ],
    //警告规则
    rules: {
       "no-unused-vars":0
    }
}