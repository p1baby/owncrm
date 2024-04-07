// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image' ,
    'shadcn-nuxt' ,
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
	  'nuxt-icon',
    '@pinia/nuxt',
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
      }]
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./store/**'],
  },
  
})
