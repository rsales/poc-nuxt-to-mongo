// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image'],
  runtimeConfig: {
    mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase",
  },
})