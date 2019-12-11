import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/app.js',
  output: {
    file: './resources/js/bundle.js',
    name: 'App',
    format: 'iife',
  },
  plugins: [
    resolve(),
    serve({
      open: true,
      contentBase: './',
      port: 5000,
    }),
    livereload(),
    svelte({
      css: stylesheet => {
        stylesheet.write('./resources/css/bundle.css')
      },
    }),
  ],
}
