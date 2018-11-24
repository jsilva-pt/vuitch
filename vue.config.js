module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vuitch/'
    : '/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
