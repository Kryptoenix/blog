import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  bridgy: {
    post: ['mastodon'],
  },
  comment: {
    giscus: {
      category: 'General',
      categoryID: 'DIC_kwDONJlkbs4Cj8Zg',
      lang: 'en',
      reactionsEnabled: true,
      repo: 'Kryptoenix/blog',
      repoID: 'R_kgDONJlkbg',
      theme: 'preferred_color_scheme',
    },
    style: 'boxed',
    use: ['Webmention', 'Giscus'],
    webmention: {
      commentParade: true,
      form: true,
      sortBy: 'created',
      sortDir: 'down',
      username: 'Kryptoenix',
    },
  },
}
