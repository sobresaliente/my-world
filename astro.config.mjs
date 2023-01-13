import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import addClasses from 'rehype-add-classes';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), tailwind(), mdx()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[addClasses, {
      h1: 'text-4xl text-red-600 font-rowdies'
    }]]
  },
  output: "server",
  adapter: vercel()
});