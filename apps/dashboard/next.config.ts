import { type NextConfig } from 'next/types';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { createSecureHeaders } from 'next-secure-headers';

const INTERNAL_PACKAGES = [
  '@workspace/api-keys',
  '@workspace/auth',
  '@workspace/billing',
  '@workspace/common',
  '@workspace/database',
  '@workspace/email',
  '@workspace/email-templates',
  '@workspace/image-processing',
  '@workspace/markdown',
  '@workspace/rate-limit',
  '@workspace/routes',
  '@workspace/ui',
  '@workspace/webhooks'
];

const svgLoader = {
  loader: '@svgr/webpack',
  options: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false // Preserve the viewBox attribute
            }
          }
        }
      ]
    }
  }
};

const nextConfig: NextConfig = {
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: INTERNAL_PACKAGES,
  serverExternalPackages: [],
  experimental: {
    optimizePackageImports: [
      'recharts',
      'lucide-react',
      '@radix-ui/react-icons',
      '@radix-ui/react-avatar',
      '@radix-ui/react-select',
      'date-fns',
      ...INTERNAL_PACKAGES
    ],
    turbo: {
      rules: {
        '*.svg': {
          loaders: [svgLoader],
          as: '*.js'
        }
      }
    }
  },
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    appIsrStatus: false
  },
  async headers() {
    return [
      {
        locale: false,
        source: '/(.*)',
        headers: createSecureHeaders({
          frameGuard: 'deny',
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true }
          ],
          referrerPolicy: 'same-origin'
        })
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth',
        permanent: false
      },
      {
        source: '/auth',
        destination: '/auth/sign-in',
        permanent: false
      },
      {
        source: '/organizations/:slug/settings',
        destination: '/organizations/:slug/settings/account',
        permanent: false
      },
      {
        source: '/organizations/:slug/settings/account',
        destination: '/organizations/:slug/settings/account/profile',
        permanent: false
      },
      {
        source: '/organizations/:slug/settings/organization',
        destination: '/organizations/:slug/settings/organization/general',
        permanent: false
      }
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [svgLoader]
    });
    return config;
  }
};

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZER === 'true'
});

export default bundleAnalyzerConfig(nextConfig);
