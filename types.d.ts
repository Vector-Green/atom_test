/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly I18N_LOCALE: string
  readonly I18N_FALLBACK_LOCALE: string
}
declare module 'dotenv-flow'
interface ImportMeta {
  readonly env: ImportMetaEnv
}
