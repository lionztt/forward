# ES6

## 问题

1.ES6 模块化如何使用，开发环境如何打包？

2.Class 和普通构造函数有何区别？

3.Promise 的基本使用和原理？

4.ES6 其他常用功能？

## ES6 模块化如何使用，开发环境如何打包

### 模块化基本语法

* export/import

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

    /*index.js*/
    import util1 from './util1.js'
    import {f1,f2} from './util1.js'

    console.log(util1)
    f1()
    f2()
  ```

### babel转换

1. 安装babel

   ```text
    npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest
   ```

2. 设置.babelrc隐藏文件\(一个babel配置的json文件\)

   ```javascript
    {
        "presets":["es2015","latest"],//规则
        "plugins": []//插件
    }
   ```

3. 全局安装babel-cli

   ```text
    sudo npm install -g babel-cli
    babel --version
   ```

4. 编译 es6 文件并输出

   ```text
    babel ./src/util1.js --out-file ./compiled/util1.js
   ```

### webpack打包

1. 安装 webpack 和 babel-loader

   ```text
    npm install webpack babel-loader@7.1.2 --save-dev
   ```

_注意：babel-core的默认下载版本是6.x.x与babel-loader默认版本8.x.x有冲突，所以要指定babel-loader安装版本为7.x.x，否则报错。_

1. 配置 webpack.config.js

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

2. 配置 package.json 中 "scripts" 属性

   ```javascript
    "build": "webpack --config webpack.config.js",
   ```

3. 运行 npm run build 命令 通过 build 命令，在 package.json 中找到运行 webpack 的命令，然后根据webpack.config.js 进行编译

### Rollup打包

Rollup是下一代JavaScript模块打包工具。相比其他JavaScript打包工具，Rollup总能打出更小，更快的包。Rollup通过对代码的静态分析，分析出冗余代码，在最终的打包文件中将这些冗余代码删除掉，进一步缩小代码体积。

1. 安装rollup相关工具

   ```text
    npm i --save-dev rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers babel-preset-latest
   ```

2. 配置babel配置文件.babelrc

   ```javascript
    {
        "presets":[
            ["latest",{
                "es2015":{
                    "modules":false // 不关心第三方插件
                }
            }]
            ],//规则
        "plugins": ["external-helpers"]//插件
    }
   ```

3. 配置 rollup.config.js

   ```javascript
    import babel from 'rollup-plugin-babel'
    import resolve from 'rollup-plugin-node-resolve'

    export default {
        entry: 'src/index.js',
        format: 'umd',//格式umd兼容AMD/CMD等打包标准
        plugins:[
            resolve(),
            babel({
                exclude: 'node_modules/**'
            })
        ],
        dest:'build/bundle.js'
    }
   ```

4. 修改 package.json 打包命令

   ```javascript
    "build": "rollup -c rollup.config.js",
   ```

Rollup与webpack对比

* Rollup只能用于打包模块化，需要与Gulp等集成使用；webpack功能更强大，打包后有基于webpack的冗余代码。  
* Rollup在精简代码上做到了极致；webpack的学习成本较大。

### JS的众多模块化标准

* 没有模块化（蛮荒时代）
* AMD 成为标准，require.js
* 前端打包工具，webpack等，后端为Commendjs标准
* ES6统一标准（import/export）
* nodejs 积极支持，浏览器尚未统一

nodejs 8以前版本不支持import/export语法，支持Commendjs模块方法。

## Class与普通构造函数区别

### JS构造函数

```javascript
    function MathHandle(x, y){
        this.x = x;
        this.y = y;
    }

    MathHandle.prototype.add = function(){
        return this.x + this.y
    }

    var m = new MathHandle(1, 2)
    console.log(m.add()) // 3
```

### Class语法

```javascript
    class MathHandle {
        constructor(x, y) { // new关键字立马执行的函数
            this.x = x;
            this.y = y;
        }
        add() { // 扩展方法
            return this.x + this.y;
        }
    }

    const m = new MathHandle(1, 2);
    console.log(m.add()) // 3

    console.log(typeof MathHandle) // "function"
    console.log(MathHandle === MathHandle.prototype.constructor) // "true"
    console.log(m.__proto__ === MathHandle.prototype)//  "true"
```

class 是一种语法糖，本质与js普通构造函数没有区别。

### 继承

#### js

```javascript
    // 这种方法无法向父亲传递参数，且所有实例公用一个父亲属性及方法
    function Animal() {
        this.eat = function() {
            console.log('animal eat')
        }
    }

    function Dog() {
        this.bark = function() {
            console.log('dog bark')
        }
    }

    // 继承
    Dog.prototype = new Animal()

    var hashiqi = new Dog()
    hashiqi.bark()
    hashiqi.eat()
```

#### class

```javascript
    class Animal{
        constructor(name){
            this.name = name
        }
        eat(){
            console.log(`${this.name} eat`)
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super(name)
            this.name = name
        }
        bark() {
            console.log(`${this.name} bark`)
        }
    }

    const hashiqi = new Dog('哈士奇')
    hashiqi.eat() 
    hashiqi.bark()
```

