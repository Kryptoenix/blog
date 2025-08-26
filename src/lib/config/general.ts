import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'forest',
    text: '🌲 Forest',
  },
  {
    name: 'cmyk',
    text: '🖨 Light',
  },
  {
    name: 'dracula',
    text: '🧛 Dark',
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave',
  },
]

export const head: HeadConfig = {
  custom: ({ dev, page, post }) =>
    dev
      ? []
      : [
          // IndieAuth
          '<link rel="authorization_endpoint" href="https://indieauth.com/auth">',
          '<link rel="token_endpoint" href="https://tokens.indieauth.com/token">',
        ],
  me: ['https://github.com/Kryptoenix'],
}

export const header: HeaderConfig = {
  nav: [

    {
      link: '/blog/about',
      text: 'About',
    },
  ],
  search: {
    provider: 'google',
  },
}

export const footer: FooterConfig = {
  nav: [
    {
      link: '/blog/atom.xml', // Updated path
      text: 'Feed',
    },
    {
      link: '/blog/sitemap.xml', // Updated path
      text: 'Sitemap',
    },
  ],
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: '2-digit',
  },
}

export const feed: FeedConfig = {}
