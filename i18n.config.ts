import { Locale } from 'vue-i18n'

function getLocale(): Locale {
  if (process.client) {
    const storageLanguage = localStorage.getItem('language')
    if (storageLanguage) return storageLanguage

    const navigatorLanguage = navigator.language.toLowerCase()
    if (navigatorLanguage) return navigatorLanguage
  }

  return import.meta.env.I18N_LOCALE || 'en'
}

export default defineI18nConfig(() => ({
  globalInjection: false,
  locales: [
    {
      code: 'en',
      file: 'en.json'
    },
    {
      code: 'ru',
      file: 'ru.json'
    },
    {
      code: 'uk',
      file: 'uk.json'
    }
  ],
  legacy: false,
  locale: getLocale(),
  langDir: 'locales',
  fallbackLocale: import.meta.env.I18N_FALLBACK_LOCALE || 'en',
  pluralRules: {
    ru: function (choice: number, choicesLength: number) {
      if (choicesLength == 1) return 0

      if (choicesLength == 2) {
        const lastCharacter = choice % 10
        if (lastCharacter == 1) {
          return 1
        } else {
          return 0
        }
      }

      if (choicesLength == 3) {
        const lastTwoCharacters = choice % 100
        if (lastTwoCharacters > 10 && lastTwoCharacters < 20) {
          return 0
        }

        const lastCharacter = choice % 10
        switch (lastCharacter) {
          case 0:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            return 0

          case 1:
            return 1

          case 2:
          case 3:
          case 4:
            return 2
        }
      }
    }
  }
}))
