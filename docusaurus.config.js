// See: https://docusaurus.io/docs/api/docusaurus-config
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '观澜无言',
  tagline: 'notes, wikis, posts',
  favicon: 'img/favicon.ico',
  url: "https://haijiaolu.github.io/",
  baseUrl: '/vol/',

  organizationName: 'haijiaolu',
  projectName: 'vol',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './src/sidebars.js',
          // editUrl:,
        },
        blog: false, // { showReadingTime: true, editUrl: 'https://github.com/', }
        theme: {
          customCss: './src/css/iota/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/hannah.jpg',
      navbar: {
        title: '观澜无言',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: "docs/item",
            type: 'docSidebar',
            sidebarId: 'itemSidebar',
            position: 'left',
            label: '🔖温故知新',
          },
          {
            to: "docs/wiki",
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: '📝札记-作者',
          },
          {
            to: "docs/book",
            type: 'docSidebar',
            sidebarId: 'bookSidebar',
            position: 'left',
            label: '📝札记-书籍',
          },
          {
            to: "docs/post",
            type: 'docSidebar',
            sidebarId: 'postSidebar',
            position: 'left',
            label: '📝札记-文章',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/haijiaolu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/',
              // }
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HAIJIAOLU. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      algolia: {
        appId: 'ZQ4IG0IHRI',
        apiKey: '846799ba63be4636255565cb7dfe34d3',
        indexName: 'vol'
      },
    }),
    markdown: {
      format: 'detect',
      mermaid: true,
    }
};

export default config;
