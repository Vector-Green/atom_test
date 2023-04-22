/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly I18N_LOCALE: string
  readonly I18N_FALLBACK_LOCALE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
