import * as React from 'react';
import {
  BookIcon,
  BookOpenIcon,
  BoxIcon,
  CircuitBoardIcon,
  CuboidIcon,
  FileBarChartIcon,
  LayoutIcon,
  PlayIcon,
  SendHorizonalIcon
} from 'lucide-react';

import { routes } from '@workspace/routes';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon
} from '@workspace/ui/components/brand-icons';

export const MENU_LINKS = [
  {
    title: 'Product',
    items: [
      {
        title: 'Feature 1',
        description: 'Short description here',
        icon: <BoxIcon className="size-5 shrink-0" />,
        href: '#',
        external: false
      },
      {
        title: 'Feature 2',
        description: 'Short description here',
        icon: <PlayIcon className="size-5 shrink-0" />,
        href: '#',
        external: false
      },
      {
        title: 'Feature 3',
        description: 'Short description here',
        icon: <CircuitBoardIcon className="size-5 shrink-0" />,
        href: '#',
        external: false
      },
      {
        title: 'Feature 4',
        description: 'Short description here',
        icon: <LayoutIcon className="size-5 shrink-0" />,
        href: '#',
        external: false
      },
      {
        title: 'Feature 5',
        description: 'Short description here',
        icon: <FileBarChartIcon className="size-5 shrink-0" />,
        href: '#',
        external: false
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Contact',
        description: 'Reach out for assistance',
        icon: <SendHorizonalIcon className="size-5 shrink-0" />,
        href: routes.marketing.Contact,
        external: false
      },
      {
        title: 'Roadmap',
        description: 'See what is coming next',
        icon: <LayoutIcon className="size-5 shrink-0" />,
        href: routes.marketing.Roadmap,
        external: true
      },
      {
        title: 'Docs',
        description: 'Learn how to use our platform',
        icon: <BookOpenIcon className="size-5 shrink-0" />,
        href: routes.marketing.Docs,
        external: false
      }
    ]
  },
  {
    title: 'Pricing',
    href: routes.marketing.Pricing,
    external: false
  },
  {
    title: 'Blog',
    href: routes.marketing.Blog,
    external: false
  },
  {
    title: 'Story',
    href: routes.marketing.Story,
    external: false
  }
];

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { name: 'Feature 1', href: '#', external: false },
      { name: 'Feature 2', href: '#', external: false },
      { name: 'Feature 3', href: '#', external: false },
      { name: 'Feature 4', href: '#', external: false },
      { name: 'Feature 5', href: '#', external: false }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Contact', href: routes.marketing.Contact, external: false },
      { name: 'Roadmap', href: routes.marketing.Roadmap, external: true },
      { name: 'Docs', href: routes.marketing.Docs, external: false }
    ]
  },
  {
    title: 'About',
    links: [
      { name: 'Story', href: routes.marketing.Story, external: false },
      { name: 'Blog', href: routes.marketing.Blog, external: false },
      { name: 'Careers', href: routes.marketing.Careers, external: false }
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        name: 'Terms of Use',
        href: routes.marketing.TermsOfUse,
        external: false
      },
      {
        name: 'Privacy Policy',
        href: routes.marketing.PrivacyPolicy,
        external: false
      },
      {
        name: 'Cookie Policy',
        href: routes.marketing.CookiePolicy,
        external: false
      }
    ]
  }
];

export const SOCIAL_LINKS = [
  {
    name: 'X (formerly Twitter)',
    href: '~/',
    icon: <XIcon className="size-4 shrink-0" />
  },
  {
    name: 'LinkedIn',
    href: '~/',
    icon: <LinkedInIcon className="size-4 shrink-0" />
  },
  {
    name: 'Facebook',
    href: '~/',
    icon: <FacebookIcon className="size-4 shrink-0" />
  },
  {
    name: 'Instagram',
    href: '~/',
    icon: <InstagramIcon className="size-4 shrink-0" />
  },
  {
    name: 'TikTok',
    href: '~/',
    icon: <TikTokIcon className="size-4 shrink-0" />
  }
];

export const DOCS_LINKS = [
  {
    title: 'Getting Started',
    icon: <CuboidIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        items: []
      },
      {
        title: 'Dependencies',
        href: '/docs/dependencies',
        items: []
      }
    ]
  },
  {
    title: 'Guides',
    icon: <BookIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Using MDX',
        href: '/docs/using-mdx',
        items: []
      }
    ]
  }
];
