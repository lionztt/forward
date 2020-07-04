# ES6

## 问题

1.ES6 模块化如何使用，开发环境如何打包？  

2.Class 和普通构造函数有何区别？

3.Promise 的基本使用和原理？

4.ES6 其他常用功能？



### ES6 模块化如何使用，开发环境如何打包

**模块化基本语法**
- export/import
```javascript
/*util1.js*/
// export default 导出默认（只有一个）引入不需要加大括号
export default {a : 100}

/*util2.js*/
export function f1(){
    console.log('f1')
}
export function f2(){
    console.log('f2')
}
```
```javascript
/*index.js*/
import util1 from './util1.js'
import {f1,f2} from './util1.js'

console.log(util1)
f1()
f2()
```
**开发环境配置--babel**
1. 安装babel
```
npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest
```
2. 设置.babelrc隐藏文件(一个babel配置的json文件)
```json
{
    "presets":["es2015","latest"],//规则
    "plugins": []//插件
}
```
3. 全局安装babel-cli
```
sudo npm install -g babel-cli
babel --version
```
4. 编译 es6 文件并输出
```
babel ./src/util1.js --out-file ./compiled/util1.js
```
**开发环境-webpack**
1. 安装 webpack 和 babel-loader
```
npm install webpack babel-loader --save-dev
```
2. 配置 webpack.config.js
```javascript
module.exports = {
    entry: './src/index.js',//入口文件
    output: {//出口设置
        path: __dirname,//当前目录
        filename: './build/bundle.js'//出口文件会自动创建
    },
    module:{// 模块
        rules:[{// 规则
            test: /\.js?$/,// 匹配.js结尾文件
            exclude: /(node_modules)/, // 除了第三方模块
            loader: 'babel-loader'// 通过babel来编译
        }]
    }
}
```
3. 配置 package.json 中 "scripts" 属性
```
"start":"webpack",
```
4. 运行 npm start
通过 start 命令，在 package.json 中运行 webpack，然后根据webpack.config.js 进行编译

JS的众多模块化标准

nodejs不支持import/export语法，支持Commendjs模块方法。





