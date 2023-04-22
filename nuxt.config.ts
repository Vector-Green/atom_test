import postcssConfig from './postcss.config.json'

import DefineOptions from 'unplugin-vue-define-options/dist/rollup'

import ElementPlus from 'unplugin-element-plus/dist/vite'

import svg from 'vite-plugin-svgo'

export default defineNuxtConfig({
  postcss: process.env.NODE_ENV == 'production' ? postcssConfig : undefined,
  ssr: false,
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },
  build: {
    transpile: ['element-plus']
  },
  experimental: {
    payloadExtraction: true,
    inlineSSRStyles: false
  },
  modules: [
    '@element-plus/nuxt',
    [
      '@nuxt-modules/compression',
      {
        filter: () => true,
        algorithm: 'brotliCompress'
      }
    ],
    [
      '@nuxt-modules/compression',
      {
        filter: () => true,
        algorithm: 'gzip'
      }
    ],
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  vite: {
    plugins: [
      ElementPlus({}),
      DefineOptions(),
      process.env.NODE_ENV == 'production'
        ? svg({
            multipass: true,
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    convertColors: {
                      currentColor: true
                    }
                  }
                }
              }
            ]
          })
        : undefined
    ],
    build: {
      minify: process.env.NODE_ENV == 'production' ? 'terser' : false,
      terserOptions: {
        compress: {
          arguments: true,
          arrows: true,
          booleans_as_integers: true, //! unsafe for discord //! unsafe for nest
          booleans: true,
          collapse_vars: true,
          comparisons: true,
          computed_props: true,
          conditionals: true,
          dead_code: true,
          defaults: true,
          directives: true,
          drop_console: true, //?
          drop_debugger: true,
          ecma: 2020,
          evaluate: true,
          expression: true,
          global_defs: {},
          hoist_funs: true,
          hoist_props: true,
          hoist_vars: true,
          ie8: false,
          if_return: true,
          inline: true,
          join_vars: true,
          keep_classnames: false, //! unsafe for discord
          keep_fargs: false,
          keep_fnames: false,
          keep_infinity: false,
          loops: true,
          module: true,
          negate_iife: true,
          passes: 10,
          properties: true,
          pure_funcs: [],
          pure_getters: 'strict',
          reduce_vars: true,
          reduce_funcs: true,
          sequences: true,
          side_effects: true,
          switches: true,
          toplevel: true,
          top_retain: null,
          typeofs: true,
          unsafe_arrows: true,
          unsafe: true, //! unsafe for discord
          unsafe_comps: true,
          unsafe_Function: true,
          unsafe_math: true,
          unsafe_symbols: true,
          unsafe_methods: true,
          unsafe_proto: true,
          unsafe_regexp: true,
          unsafe_undefined: true,
          unused: true
        },
        ecma: 2020,
        enclose: false,
        ie8: false,
        keep_classnames: false, //!unsafe for discord
        keep_fnames: false,
        mangle: {
          eval: true,
          keep_classnames: false, //!unsafe for discord
          keep_fnames: false,
          module: true,
          //nth_identifier
          properties: false, //!unsafe for frontend
          // properties: {
          // builtins: false,
          // debug: false,
          // keep_quoted: false,
          // nth_identifier
          // regex: undefined,
          // reserved: [],
          // },
          safari10: false,
          toplevel: true
        },
        module: true,
        nameCache: undefined,
        format: {
          ascii_only: false,
          beautify: false,
          braces: false,
          comments: false,
          ecma: 2020,
          ie8: false,
          keep_numbers: false,
          indent_level: 0,
          indent_start: 0,
          inline_script: true,
          keep_quoted_props: false,
          max_line_len: false,
          preamble: undefined,
          preserve_annotations: false,
          quote_keys: false,
          quote_style: 0,
          safari10: false,
          semicolons: true,
          shebang: true,
          webkit: false,
          wrap_iife: false,
          wrap_func_args: true
        },
        parse: {
          bare_returns: true,
          html5_comments: false,
          shebang: true
        },
        safari10: false,
        sourceMap: false,
        toplevel: true
      }
    }
  }
})
