const path = require('path')
const container = require('markdown-it-container')

module.exports = {
  dest: 'vuepress',
  title: "SA",
  description: 'Vote for Cthulhu! Why settle for the lesser evil!',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  activeHeaderLinks: true,
  algolia: {
    apiKey: 'f417527242ae53d1f9d2913eb1ef07d4',
    indexName: 'SABlog'
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/container', true],
    ['@vuepress/nprogress', true],
    ['@vuepress/active-header-links', true],
    ['@vuepress/register-components', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-131334453-1'
    }],
  ],
  themeConfig: {
    repo: 'hirCodd',
    label: '简体中文',
    selectText: '选择语言',
    nav: require('./nav/index'),
    sidebar: {
      '/blog/frontend/': genFrontendConfig('前端开发'),
    }
  },
}

function genFrontendConfig (title){
  return [
    {
      title,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}
