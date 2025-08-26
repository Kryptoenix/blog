import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/blog/assets/kryptoenix.png',
    bio: 'A cybersecurity diary',
    metadata: [
      {
        icon: 'i-mdi-github',
        link: 'https://github.com/Kryptoenix',
        rel: 'github',
      },
      {
        icon: 'i-ic-twotone-rss-feed',
        link: '/blog/atom.xml',
        rel: 'rss',
      },
    ],
    name: 'Kryptoenix',
    status: '🕵',
  },
  description: 'Powered by SvelteKit/Urara',
  domain: (import.meta.env.URARA_SITE_DOMAIN ?? 'localhost:5173/blog'),
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? (import.meta.env.DEV ? 'http://' : 'https://'),
  subtitle: 'blog',
  themeColor: '#3D4451',
  title: 'Kryptoenix',
}
