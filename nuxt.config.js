export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  env: {
    api_url: process.env.API_URL,
    static_api_url: process.env.STATIC_API_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'manager-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'}
    ],
    bodyAttrs: {
      class: '' // Add `white-content` class here to enable "white" mode.
    }
  },
  router: {
    linkExactActiveClass: 'active',
    middleware: ['auth']
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    `~/plugins/dashboard-plugin.js`
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ar',
        file: 'ar.js'
      },
      {
        code: 'ru',
        file: 'ru.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
    strategy: 'prefix_except_default'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/, 'auth-next/dist'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  },

  // Auth module configuration: https://auth.nuxtjs.org/
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    },
    fullPathRedirect: true,
    strategies: {
      local: {
        scheme: 'refresh',
        autoFetchUser: true,
        token: {
          property: 'content.access_token',
          maxAge: 1440 // 1 day (24 * 60)
        },
        refreshToken: {
          property: 'content.refresh_token',
          maxAge: 43200 // 30 days (24 * 60 * 30)
        },
        user: {
          property: 'content'
        },
        endpoints: {
          login: {
            url: '/ajax/idm/auth/login',
            method: 'post',
            propertyName: 'content.access_token',
            refreshToken: 'content.refresh_token'
          },
          user: {
            url: '/ajax/idm/auth/user',
            method: 'get',
            propertyName: 'content'
          },
          logout: {
            url: '/ajax/idm/auth/logout',
            method: 'delete'
          },
          refresh: {
            url: '/ajax/idm/auth/refresh',
            method: 'post',
            propertyName: 'content.refresh_token'
          }
        }
      }
    }
  }
}
