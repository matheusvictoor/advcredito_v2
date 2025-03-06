import * as React from 'react';

import { GridSection } from '~/components/fragments/grid-section';

export function StoryVision(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container max-w-6xl py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Our vision
            </h2>
            <p className="text-2xl font-medium leading-relaxed md:text-3xl">
              "CRM shouldn't just store relationships — it should actively help
              you build better ones with AI."
            </p>
          </div>
          <div className="space-y-6 text-base text-muted-foreground md:text-lg">
            <p>
              Traditional CRMs were built for a different era. We're creating
              the first true AI-native platform that automates the mundane and
              amplifies what humans do best: building meaningful relationships.
            </p>
            <p>
              By combining cutting-edge AI with decades of sales expertise,
              we've created a CRM that actually helps you sell better —
              predicting outcomes, suggesting next steps, and handling routine
              tasks automatically.
            </p>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
