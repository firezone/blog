// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Firezone Blog',
  tagline: 'Updates, How-tos, and more content from the Firezone team',
  url: 'https://blog.firezone.dev',
  // XXX: Change this to '/' when deploying to a blog.firezone.dev
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'firezone', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // An array of scripts to load. The values can be either strings or plain
  // objects of attribute-value maps. The <script> tags will be inserted in the
  // HTML <head>. If you use a plain object, the only required attribute is src,
  // and any other attributes are permitted (each one should have boolean/string
  // values).
  //
  // Note that <script> added here are render-blocking, so you might want to
  // add async: true/defer: true to the objects.
  scripts: [
    {
      src: '/js/posthog.js',
      async: true
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Blog',
        logo: {
          alt: 'Firezone Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/firezone/firezone',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Homepage',
                href: 'https://firezone.dev',
              },
              {
                label: 'Pricing',
                href: 'https://firezone.dev/pricing',
              },
              {
                label: 'About',
                href: 'https://firezone.dev/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support Forums',
                href: 'https://discourse.firez.one',
              },
              {
                label: 'Slack',
                href: 'https://firezone.dev/slack',
              },
              {
                label: 'Github',
                href: 'https://github.com/firezone/firezone',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/firezonehq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Firezone, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby', 'elixir']
      },
    }),
};

module.exports = config;
