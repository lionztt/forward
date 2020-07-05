import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
    entry: 'src/index.js',
    format: 'umd',//格式umd兼容AMD/CMD等
    plugins:[
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest:'build/bundle.js'
}