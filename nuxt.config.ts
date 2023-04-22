import postcssConfig from './postcss.config.json'

export default defineNuxtConfig({
  postcss: process.env.NODE_ENV == 'production' ? postcssConfig : undefined
})
