export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ostéopathe Paris 16eme et Drainage Lymphatique | Patricia Chung',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description', content: "Patricia Chung - Ostéopathe Paris 16 et Drainage Lymphatique Renata França à Porte de Saint-Cloud. Ostéopathe à Paris.  "
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;500;700&display=swap' },
      { hid: 'canonical', rel: 'canonical', href: 'https://www.votreosteopatheparis16.com/' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: "Patricia Chung - Ostéopathe Paris 16 et Drainage Lymphatique Renata França à Porte de Saint-Cloud. Ostéopathe à Paris.",
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: "Patricia Chung - Ostéopathe Paris 16 et Drainage Lymphatique Renata França à Porte de Saint-Cloud. Ostéopathe à Paris. ",
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "Patricia Chung - Ostéopathe Paris 16 et Drainage Lymphatique Renata França à Porte de Saint-Cloud. Ostéopathe à Paris. ",
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: "Patricia Chung - Ostéopathe Paris 16 et Drainage Lymphatique Renata França à Porte de Saint-Cloud. Ostéopathe à Paris. ",
      },

      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.votreosteopatheparis16.com/' },
      { hid: 'og:title', name: 'og:title', content: 'Ostéopathe Paris 16eme et Drainage Lymphatique | Patricia Chung' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Ostéopathe Paris 16eme et Drainage Lymphatique | Patricia Chung' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Patricia Chung - Ostéopathe Paris 16 et Drainage Lymphatique Renata França à Porte de Saint-Cloud. Ostéopathe à Paris. ",
      },
      { hid: 'og:locale', name: 'og:locale', content: 'fr' },
      { hid: 'og:image', name: 'og:image', content: 'https://votreosteopatheparis16.com/favicon.ico' },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Votre Ostéopathe Paris 16ème | Patricia Chung',
      },
      { hid: 'google-site-verification', name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION_TOKEN },
    ],
    script: [
      { hid: 'gsap', src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js", defer: true },
      { hid: 'scrollTrigger', src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js", defer: true }
    ],

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
    'nuxt-lazysizes',


    // 'nuxt-purgecss',

  ],
  lazySizes: {
    extendAssetUrls: {
      img: ['src', 'srcset', 'data-src', 'data-srcset'],
      source: ['src', 'srcset', 'data-src', 'data-srcset'],

      // Example for a custom component
      AppImage: ['source-md-url', 'image-url'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [


  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
