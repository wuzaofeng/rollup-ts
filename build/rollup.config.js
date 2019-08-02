
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
// import {uglify} from 'rollup-plugin-uglify'

const extensions = ['.js', '.ts']

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    sourcemap: true,
    name: 'xyzq'
  },
  plugins: [
    resolve({ extensions }),
    typescript(),
    commonjs(),
    // uglify()
  ]
}