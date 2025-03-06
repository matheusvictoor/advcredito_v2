import * as React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowLeftIcon } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@workspace/ui/components/avatar';
import { Separator } from '@workspace/ui/components/separator';

import { Mdx } from '~/components/blog/mdx-component';
import { getInitials } from '~/lib/formatters';

type BlogPostProps = {
  post: {
    title: string;
    description: string;
    published: string;
    category: string;
    author:
      | {
          name?: string;
          avatar?: string;
        }
      | undefined;
    body: {
      raw: string;
      code: string;
    };
  };
};

export function BlogPost({ post }: BlogPostProps): React.JSX.Element {
  return (
    <div className="border-b">
      <div className="container mx-auto flex max-w-3xl flex-col space-y-4 py-20">
        <div className="mx-auto w-full min-w-0">
          <Link
            href="/blog"
            className="group mb-12 flex items-center space-x-1 text-sm leading-none text-foreground duration-200 hover:underline"
          >
            <ArrowLeftIcon className="size-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
            <span>All posts</span>
          </Link>
          <div className="space-y-8">
            <div className="flex flex-row items-center justify-between gap-4 text-base text-muted-foreground">
              <span className="flex flex-row items-center gap-2">
                {post.category}
              </span>
              <span className="flex flex-row items-center gap-2">
                <time dateTime={post.published}>
                  {format(post.published, 'dd MMM yyyy')}
                </time>
              </span>
            </div>
            <h1 className="font-heading text-3xl font-semibold tracking-tighter xl:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.description}</p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Avatar className="relative size-7 flex-none rounded-full">
                  <AvatarImage
                    src={post.author?.avatar}
                    alt="avatar"
                  />
                  <AvatarFallback className="size-7 text-[10px]">
                    {getInitials(post.author?.name ?? '')}
                  </AvatarFallback>
                </Avatar>
                <span>{post.author?.name ?? ''}</span>
              </div>
              <div>{estimateReadingTime(post.body.raw)}</div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="container mx-auto flex max-w-3xl py-20">
        <Mdx code={post.body.code} />
      </div>
    </div>
  );
}

function estimateReadingTime(
  text: string,
  wordsPerMinute: number = 250
): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes === 1 ? '1 minute read' : `${minutes} minutes read`;
}
