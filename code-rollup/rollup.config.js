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