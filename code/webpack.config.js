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