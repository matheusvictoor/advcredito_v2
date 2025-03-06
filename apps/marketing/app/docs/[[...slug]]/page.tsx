import '~/app/mdx.css';

import * as React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allDocs } from 'content-collections';
import { ChevronRightIcon } from 'lucide-react';

import { baseUrl } from '@workspace/routes';
import { ScrollArea } from '@workspace/ui/components/scroll-area';
import { cn } from '@workspace/ui/lib/utils';

import { Mdx } from '~/components/blog/mdx-component';
import { DocsPager } from '~/components/docs/docs-pager';
import { DocsToc } from '~/components/docs/docs-toc';
import { getTableOfContents } from '~/lib/toc';

async function getDocFromParams(props: NextPageProps) {
  const params = await props.params;
  if (!params) {
    return null;
  }
  const slug =
    (Array.isArray(params.slug) ? params.slug?.join('/') : params.slug) || '';
  const doc = allDocs.find(
    (doc) =>
      doc.slugAsParams === slug || (!slug && doc.slugAsParams === 'index')
  );
  if (!doc) {
    return null;
  }
  return doc;
}

export async function generateMetadata(
  props: NextPageProps
): Promise<Metadata> {
  const doc = await getDocFromParams(props);
  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: `${baseUrl.Marketing}${doc.slug}`
    }
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/')
  }));
}

export default async function DocsPage(
  props: NextPageProps
): Promise<React.JSX.Element> {
  const doc = await getDocFromParams(props);
  if (!doc) {
    return notFound();
  }
  const toc = await getTableOfContents(doc.body.raw);
  return (
    <main className="relative xl:grid xl:grid-cols-[1fr_250px]">
      <div className="mx-auto w-full min-w-0 py-10 xl:border-r xl:pr-6">
        <div className="mb-10 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRightIcon className="size-3.5 shrink-0" />
          <div className="text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn('scroll-m-24 text-3xl font-bold tracking-tight')}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-base text-muted-foreground">{doc.description}</p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-2 pb-10 pl-6 ">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-2 h-[calc(100svh-3.5rem)] py-12">
              <DocsToc toc={toc} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
