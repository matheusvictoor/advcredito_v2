import * as React from 'react';

import { FlickeringGrid } from '~/components/fragments/flickering-grid';
import { GridSection } from '~/components/fragments/grid-section';

export function StoryValues(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container relative max-w-4xl overflow-hidden py-24 md:py-32">
        <p className="mx-auto text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
          "We believe AI should enhance human relationships, not replace them."
        </p>
        <FlickeringGrid
          className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,hsl(var(--background)),transparent)]"
          squareSize={4}
          gridGap={6}
          color="gray"
          maxOpacity={0.12}
          height={400}
          width={1000}
        />
      </div>
    </GridSection>
  );
}
