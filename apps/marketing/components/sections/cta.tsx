import * as React from 'react';
import Link from 'next/link';

import { routes } from '@workspace/routes';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { TextGenerateEffect } from '~/components/fragments/text-generate-effect';

export function CTA(): React.JSX.Element {
  return (
    <GridSection className="bg-diagonal-lines">
      <div className="container flex flex-col items-center justify-between gap-6 bg-background py-16 text-center">
        <h3 className="m-0 max-w-fit text-3xl font-semibold md:text-4xl">
          <TextGenerateEffect words="Ready to start?" />
        </h3>
        <BlurFade
          inView
          delay={0.6}
        >
          <Link
            href={routes.dashboard.auth.SignUp}
            className={cn(buttonVariants({ variant: 'default' }), 'rounded-xl')}
          >
            Start for free
          </Link>
        </BlurFade>
      </div>
    </GridSection>
  );
}
