import path from 'path';
import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { codeImport } from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import { createHighlighter } from 'shiki';

const prettyCodeOptions: Options = {
  theme: 'github-dark',
  getHighlighter: (options) =>
    createHighlighter({
      ...options
    }),
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedChars(node) {
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className = ['word--highlighted'];
  }
};

export const authors = defineCollection({
  name: 'author',
  directory: 'content',
  include: '**/authors/*.mdx',
  schema: (z) => ({
    ref: z.string(),
    name: z.string().default('Anonymous'),
    avatar: z.string().url().default('')
  })
});

export const posts = defineCollection({
  name: 'post',
  directory: 'content',
  include: '**/blog/*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    published: z.string().datetime(),
    category: z.string().default('Miscellaneous'),
    author: z.string()
  }),
  transform: async (data, context) => {
    const body = await compileMDX(context, data, {
      remarkPlugins: [
        remarkGfm, // GitHub Flavored Markdown support
        codeImport // Enables code imports in markdown
      ],
      rehypePlugins: [
        rehypeSlug, // Automatically add slugs to headings
        rehypeAutolinkHeadings, // Auto-link headings for easy navigation
        [rehypePrettyCode, prettyCodeOptions]
      ]
    });
    const author = context
      .documents(authors)
      .find((a) => a.ref === data.author);
    return {
      ...data,
      author,
      slug: `/${data._meta.path}`,
      slugAsParams: data._meta.path.split(path.sep).slice(1).join('/'),
      body: {
        raw: data.content,
        code: body
      }
    };
  }
});

export const docs = defineCollection({
  name: 'doc',
  directory: 'content',
  include: '**/docs/*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string()
  }),
  transform: async (data, context) => {
    const body = await compileMDX(context, data, {
      remarkPlugins: [
        remarkGfm, // GitHub Flavored Markdown support
        codeImport // Enables code imports in markdown
      ],
      rehypePlugins: [
        rehypeSlug, // Automatically add slugs to headings
        rehypeAutolinkHeadings, // Auto-link headings for easy navigation
        [rehypePrettyCode, prettyCodeOptions]
      ]
    });
    return {
      ...data,
      slug: `/${data._meta.path}`,
      slugAsParams: data._meta.path.split(path.sep).slice(1).join('/'),
      body: {
        raw: data.content,
        code: body
      }
    };
  }
});

export default defineConfig({
  collections: [authors, posts, docs]
});
