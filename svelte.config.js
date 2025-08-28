// svelte.config.js
import adapterAuto from '@sveltejs/adapter-auto'
import adapterNode from '@sveltejs/adapter-node'
import adapterStatic from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

import mdsvexConfig from './mdsvex.config.js'

const adapters = {
  auto: adapterAuto(),
  node: adapterNode(),
  static: adapterStatic({
    assets: 'build',
    fallback: undefined,
    pages: 'build',
  }),
}

/** @type {import("@sveltejs/kit").Config} */
export default {
  extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])],
  kit: {
    adapter:
      process.env.ADAPTER
        ? adapters[process.env.ADAPTER.toLowerCase()]
        : Object.keys(process.env).some(key => ['NETLIFY', 'VERCEL'].includes(key))
          ? adapters.auto
          : adapters.static,
    csp: {
      directives: {
        'style-src': ['self', 'unsafe-inline', 'https://giscus.app'],
      },
      mode: 'auto',
    },
    paths: {
      base: '/blog',
    },
    prerender: {
      handleMissingId: 'warn',
      handleHttpError: 'warn'
      // handleHttpError: ({ path, referrer, message }) => {
      //   if (path === '/') return; // ignore bad "/" references
      //   throw new Error(message);
      // }
    },
  },
  preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],
  
}
