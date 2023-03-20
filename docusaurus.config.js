// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '数商云团队知识库',
  tagline: '知识文档、工具、方法、实践指南',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://gitlab.shushangyun.com/design/ssy-wiki/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitlab.shushangyun.com/design/ssy-wiki/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  // 搜索组件仓库：https://github.com/easyops-cn/docusaurus-search-local
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    'docusaurus-plugin-sass',
    './plugins/less',
    ['mindmap', {}],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },
      navbar: {
        title: '团队知识库',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },

        items: [
          {
            type: 'doc',
            docId: 'guide/intro',
            position: 'left',
            label: '知识库指南',
          },
          {
            type: 'doc',
            docId: 'tools/intro',
            position: 'left',
            label: '工具方法',
          },
          // {
          //   type: 'doc',
          //   docId: 'software-tools/intro',
          //   position: 'left',
          //   label: '软件工具',
          // },
          {
            type: 'doc',
            docId: 'industry/intro',
            position: 'left',
            label: '行业竞品',
          },
          {
            type: 'doc',
            docId: 'business/intro',
            position: 'left',
            label: '商业研究',
          },
          {
            type: 'doc',
            docId: 'analysis/intro',
            position: 'left',
            label: '需求分析',
          },
          {
            type: 'doc',
            docId: 'design/intro',
            position: 'left',
            label: '需求设计',
          },
          {
            type: 'doc',
            docId: 'handoff/intro',
            position: 'left',
            label: '需求交付',
          },
          {
            type: 'doc',
            docId: 'develop/intro',
            position: 'left',
            label: '技术实现',
          },
          {
            type: 'doc',
            docId: 'testing/intro',
            position: 'left',
            label: '验收测试',
          },
          {
            type: 'doc',
            docId: 'improve/intro',
            position: 'left',
            label: '验证改良',
          },
          {
            type: 'doc',
            docId: 'linkseeks/intro',
            position: 'left',
            label: '瓴犀业务',
          },
          {
            type: 'doc',
            docId: 'pro-platform/intro',
            position: 'left',
            label: '能力中心',
          },

          {
            label: "👨🏻‍🎓 相关链接",
            position: "right",
            items: [
              {
                label: "数商云设计系统",
                href: 'https://design.shushangyun.com/docs/design/intro/',
              },
              {
                label: "前端技术部",
                href: 'https://web-doc.shushangyun.com/',
              },
              {
                label: "Kpay设计系统",
                href: 'https://design.kpay-group.com/docs/design/intro/',
              },
            ],
          },

          // {to: '/blog', label: '博客', position: 'right'},
          // {
          //   href: 'https://gitlab.shushangyun.com/design/ssy-wiki/tree/master',
          //   label: 'GitLab',
          //   position: 'right',
          // },
        ],
      },
  
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: '相关设计文档',
      //       items: [
      //         {
      //           label: '数商云设计系统',
      //           // to: '/docs/intro',
      //           href: 'http://design.shushangyun.com/design',
      //         },
      //       ],
      //     },
      //     {
      //       title: '品牌官网',
      //       items: [
      //         {
      //           label: '数商云官网',
      //           href: 'https://www.shushangyun.com',
      //         },
      //         {
      //           label: '瓴犀产品官网',
      //           href: 'https://www.linkseeks.com/',
      //         },
      //       ],
      //     },
      //     {
      //       title: '更多',
      //       items: [
      //         {
      //           label: '博客',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitLab',
      //           href: 'https://gitlab.shushangyun.com/design/ssy-wiki/tree/master',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} 数商云团队知识库`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }
    ),
};

module.exports = config;
