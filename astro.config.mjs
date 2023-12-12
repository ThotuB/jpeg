import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap(), tailwind(), solidJs()],
	output: 'server',
	adapter: vercel()
})
