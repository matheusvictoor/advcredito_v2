import '~/app/mdx.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPosts } from 'content-collections';

import { baseUrl } from '@workspace/routes';

import { BlogPost } from '~/components/sections/blog-post';

async function getBlogPostFromParams(props: NextPageProps) {
  const params = await props.params;
  if (!params) {
    return null;
  }
  const slug =
    (Array.isArray(params.slug) ? params.slug?.join('/') : params.slug) || '';
  const post = allPosts.find(
    (post) =>
      post.slugAsParams === slug || (!slug && post.slugAsParams === 'index')
  );
  if (!post) {
    return null;
  }
  return post;
}

export async function generateMetadata(
  props: NextPageProps
): Promise<Metadata> {
  const post = await getBlogPostFromParams(props);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${baseUrl.Marketing}${post.slug}`
    }
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/')
  }));
}

export default async function BlogPostPage(props: NextPageProps) {
  const post = await getBlogPostFromParams(props);
  if (!post) {
    return notFound();
  }
  return <BlogPost post={post} />;
}
