import { resolve } from 'path'
import Aura from '@primeuix/themes/aura'
import { appDescription } from './app/constants/index'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  srcDir: 'app',

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@primevue/nuxt-module',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  css: [
    '@/assets/styles/css-vars.scss',
    '@/assets/styles/index.scss',
    '@/assets/styles/override.scss',
  ],

  primevue: {
    /* Configuration */
    options: {
      theme: {
        preset: Aura,
      },
    },
    components: {
      // issues: https://github.com/primefaces/primevue/issues/7434
      exclude: ['Form', 'FormField'],
    },
  },

  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', file: 'zh-CN.json', name: '简体中文' },
      { code: 'zh-TW', iso: 'zh-TW', file: 'zh-TW.json', name: '繁體中文' },
      { code: 'en', iso: 'en-US', file: 'en-US.json', name: 'English' },
      { code: 'ja', iso: 'ja-JP', file: 'ja-JP.json', name: '日本語' },
      { code: 'ko', iso: 'ko-KR', file: 'ko-KR.json', name: '한국어' }
    ],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'locales',
    vueI18n: 'i18n.config.ts',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        // 禁用移动端缩放
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ]
    },
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },
})