import babel from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'
import image from '@rollup/plugin-image'
import visualizer from 'rollup-plugin-visualizer'
import json from 'rollup-plugin-json'

const dist = 'dist'
const bundle = 'bundle'
const production = !process.env.ROLLUP_WATCH

const outputs = [
  {
    file: `${dist}/${bundle}.cjs.js`,
    format: 'cjs',
  },
  {
    file: `${dist}/${bundle}.esm.js`,
    format: 'esm',
  },
  {
    name: 'GithubProfile',
    file: `${dist}/${bundle}.umd.js`,
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      Component: 'React',
      axios: 'axios',
    },
    format: 'umd',
  },
]
const common = {
  input: 'src/index.js',
  watch: {
    chokidar: false,
  },
  external: ['react', 'prop-types', 'axios'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['transform-react-remove-prop-types'],
    }),
    image(),
    string({
      include: '**/*.css',
    }),
    json(),
    visualizer(),
    production && terser(),
  ],
}
export default outputs.map((output) => ({
  ...common,
  output,
}))
