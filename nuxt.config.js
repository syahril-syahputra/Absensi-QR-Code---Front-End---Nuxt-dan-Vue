require('dotenv').config()
export default {
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Absensi QR Code - RO Malang',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: ['~/assets/css/main.css', '~/assets/css/transitions.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    { src: '~/plugins/v-calendar', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,

    credentials: true,
  },

  router: {
    base: '/absensi/',
    middleware: ['auth'],

  },
  auth: {
    scopeKey: 'role',
    redirect: {
      login: '/',

      callback: '/callback',
      home: '/dashboard'
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://kanwilmalang.com:81/absensi/apiabsensiqrcode',
        endpoints: {
          login: {
            url: 'http://kanwilmalang.com:81/absensi/apiabsensiqrcode/api/login',
          },
          user: {
            url: 'http://kanwilmalang.com:81/absensi/apiabsensiqrcode/api/user',
          }
        },
      },
    },
  },
  generate: {
    dir: 'absensi'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
}
