export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ostéopathe Paris 16ème | Patricia Chung',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Votre Osthéopathe à Paris 16eme Patricia Chung vous accueille dans son cabinet pour apaiser toutes vos douleurs !' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;500;700&display=swap' },
      { hid: 'canonical', rel: 'canonical', href: 'https://votreosteopatheparis16.netlify.app' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'Votre Osthéopathe à Paris 16eme Patricia Chung vous accueille dans son cabinet !',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: 'Votre Osthéopathe à Paris 16eme Patricia Chung vous accueille dans son cabinet !',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Votre Osthéopathe à Paris 16eme Patricia Chung vous accueille dans son cabinet !',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Votre Osthéopathe à Paris 16eme Patricia Chung vous accueille dans son cabinet !',
      },
      { hid: 'keywords', name: 'keywords', content: 'osteopathe, paris, paris 16eme, 16, douleurs, drainage lymphatique, femme enceinte, nourisson, sportifs, nutrition, urgence, soins, cabinet' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: process.env.WEBSITE_URL },
      { hid: 'og:title', name: 'og:title', content: 'Votre Ostéopathe Paris 16ème | Patricia Chung' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Votre Ostéopathe Paris 16ème | Patricia Chung' },
      { hid: 'og:locale', name: 'og:locale', content: 'fr' },
      { hid: 'og:image', name: 'og:image', content: '/favicon.ico' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION_TOKEN },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // 'nuxt-purgecss',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
