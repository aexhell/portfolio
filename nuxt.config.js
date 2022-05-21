const _ = {
  capitalize: (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }
}

export default {
  head: {
    title: 'aexhell.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'aexhell. front-end developer. reach for the moon.' },
      { name: 'og:site_name', content: 'aexhell\'s works.' },
      { name: 'og:title', content: 'phobos.' },
      { name: 'theme-color', content: '#ae9dce' },
      { property: 'og:description', content: '16-yo front-end developer and UX designer. reach for the moon.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'canonical', href: 'https://aexhell.life' },
      { name: 'HandheldFriendly', content: 'true' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ]
  },
  globalName: 'phobos',
  globals: {
    id: globalName => `__${globalName}`,
    nuxt: globalName => `$${globalName}`,
    context: globalName => `__${globalName.toUpperCase()}__`,
    pluginPrefix: globalName => globalName,
    readyCallback: globalName => `on${_.capitalize(globalName)}Ready`,
    loadedCallback: globalName => `_on${_.capitalize(globalName)}Loaded`
  },
  css: [
    '~/assets/global.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/solid/nuxt'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {}
}
