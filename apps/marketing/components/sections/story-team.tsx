import * as React from 'react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@workspace/ui/components/avatar';

import { GridSection } from '~/components/fragments/grid-section';

const DATA = [
  {
    name: 'Rick Sanchez',
    role: 'Machine Learning Engineer',
    image: '/assets/story/rick-sanchez.webp',
    previousRole: 'Formerly AI research engineer at Meta',
    education: 'PhD in AI from Stanford'
  },
  {
    name: 'Morty Smith',
    role: 'Senior Software Engineer',
    image: '/assets/story/morty-smith.webp',
    previousRole: 'Formerly backend engineer at Google',
    education: 'BSc in Computer Science from UC Berkeley'
  }
];

export function StoryTeam(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container max-w-6xl py-20">
        <h2 className="mb-16 text-sm font-medium uppercase tracking-wider text-muted-foreground ">
          The visionaries
        </h2>
        <div className="flex flex-wrap gap-24">
          {DATA.map((person, index) => (
            <div
              key={index}
              className="space-y-8"
            >
              <Avatar className="size-24 border-4 border-neutral-200 dark:border-neutral-800">
                <AvatarImage
                  src={person.image}
                  alt={person.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-xl">
                  {person.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">{person.name}</h3>
                  <p className="text-primary">{person.role}</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{person.previousRole}</p>
                  <p>{person.education}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
