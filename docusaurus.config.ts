import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Wardley Leadership Strategies',
  tagline: 'Wardley Mapping の戦略ゲームプレイとリーダーシップ戦略をまとめた日本語ガイド',
  favicon: 'img/knight-cropped.jpg',

  future: {
    experimental_faster: {
      rspackBundler: process.env.DISABLE_FASTER_BUILD !== 'true',
      rspackPersistentCache: process.env.DISABLE_FASTER_BUILD !== 'true',
      ssgWorkerThreads: process.env.DISABLE_FASTER_BUILD !== 'true',
    },
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
  },

  // Set the production url of your site here
  url: process.env.SITE_URL || 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dave1010', // Usually your GitHub org/user name.
  projectName: 'wardley-leadership-strategies', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true',
      },
    },
    {
      tagName: 'link',
      attributes: {
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=EB+Garamond:wght@400;700&display=swap',
        rel: 'stylesheet',
      },
    },
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],


  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      title: 'Wardley Leadership Strategies',
      logo: {
        alt: 'Wardley Leadership Strategies',
        src: 'img/knight-cropped.jpg',
      },
      items: [
        {
          label: '戦略一覧',
          to: '/strategies',
        },
        {
          type: 'dropdown',
          label: 'ナレッジベース',
          items: [
            {
              label: '指針',
              to: '/doctrines',
            },
            {
              label: '戦略ガイド',
              to: '/strategy-guides',
            },
            {
              label: 'リーダーシップスキル',
              to: '/leadership-skills',
            },
            {
              label: '気候パターン',
              to: '/climatic-patterns',
            },
            {
              label: '用語集',
              to: '/terms',
            },
            {
              label: '参考書籍',
              to: '/books',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'ツール',
          items: [
            {
              label: '戦略ナビゲーター',
              to: '/strategy-navigator',
            },
            {
              label: '戦略パルスチェック',
              to: '/tools/strategy-pulse-check',
            },
            {
              label: '評価ツール',
              to: '/about/assessment-tool',
            },
            {
              label: '保存した評価',
              to: '/my-progress',
            },
            {
              label: '戦略成熟度モデル',
              to: '/tools/strategy-maturity-model',
            },
          ],
        },
        {
          label: 'このサイトについて',
          to: '/about',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wardley Leadership Strategies',
          items: [
            {
              label: 'このサイトについて',
              to: '/about',
            },
            {
              label: '戦略一覧',
              to: '/strategies',
            },
            {
              label: '指針',
              to: '/doctrines',
            },
            {
              label: '気候パターン',
              to: '/climatic-patterns',
            },
          ],
        },
        {
          title: 'ナレッジベース',
          items: [
            {
              label: '戦略ガイド',
              to: '/strategy-guides',
            },
            {
              label: 'リーダーシップスキル',
              to: '/leadership-skills',
            },
            {
              label: '用語集',
              to: '/terms',
            },
            {
              label: '参考書籍',
              to: '/books',
            },
            {
              label: 'タグ',
              to: '/tags',
            },
          ],
        },
        {
          title: 'ツールとコミュニティ',
          items: [
            {
              label: '戦略ナビゲーター',
              to: '/strategy-navigator',
            },
            {
              label: '戦略パルスチェック',
              to: '/tools/strategy-pulse-check',
            },
            {
              label: '保存した評価',
              to: '/my-progress',
            },
            {
              label: 'GitHub（原典ソース）',
              href: 'https://github.com/dave1010/wardley-leadership-strategies',
            },
          ],
        },
        {
          title: 'Wardley Mapping 参考リンク',
          items: [
            {
              label: 'Simon Wardley のブログ',
              href: 'https://blog.gardeviance.org/',
            },
            {
              label: 'Learn Wardley Mapping',
              href: 'https://learnwardleymapping.com/',
            },
            {
              label: 'Wardley Maps Book',
              href: 'https://medium.com/wardleymaps',
            },
          ],
        },
        {
          title: 'その他',
          items: [
            {
              label: 'プライバシーポリシー',
              to: '/privacy-policy',
            },
            {
              label: 'ホーム',
              to: '/',
            },
          ],
        },
      ],
      copyright: `
        <p>
          このサイトは <a href="https://www.wardleyleadershipstrategies.com">Wardley Leadership Strategies</a> をもとにした日本語翻訳・改変版です。
          原作の著作権は © ${new Date().getFullYear()} <a href="https://dave.engineer">Dave Hulbert</a> に帰属し、
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> で公開されています。
          <br />
          この日本語版も <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> で提供します。
          Wardley Mapping は Simon Wardley によるものであり、Simon Wardley はこの日本語版サイトに関与していません。
        </p>
        `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    '@docusaurus/plugin-vercel-analytics',
    [require.resolve('./src/books-index'), {dir: 'docs/books'}],
    [require.resolve('./src/doctrines-index'), {dir: 'docs/doctrines'}],
  ],
};

export default config;
