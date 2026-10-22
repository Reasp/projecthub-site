// Конфигурация сайта (decision-1): Astro со Starlight, локали через i18n Astro (Starlight берёт их оттуда).
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import product from './content/product/product.json' with { type: 'json' };

// Разделы документации — каркас по задаче документации источника (TASK-144.3); подписи на двух языках.
const DOCS_SECTIONS = [
  { slug: 'docs', label: 'Overview', ru: 'Обзор' },
  { slug: 'docs/install', label: 'Install', ru: 'Установка' },
  { slug: 'docs/quick-start', label: 'Quick start', ru: 'Первые шаги' },
  { slug: 'docs/concepts', label: 'Concepts', ru: 'Понятия' },
  { slug: 'docs/remote-control', label: 'Remote Control', ru: 'Remote Control' },
  { slug: 'docs/mcp', label: 'MCP server', ru: 'MCP-сервер' },
  { slug: 'docs/editions', label: 'Editions and licenses', ru: 'Редакции и лицензии' },
  { slug: 'docs/faq', label: 'FAQ and troubleshooting', ru: 'FAQ и диагностика' }
];

export default defineConfig({
  site: product.links.site,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    starlight({
      title: { en: 'ProjectHub Docs', ru: 'Документация ProjectHub' },
      description: 'User documentation of ProjectHub, the Agentic Development Environment.',
      favicon: '/icons/icon-32.png',
      customCss: ['./src/styles/starlight.css'],
      disable404Route: false,
      // Логотип и ссылка «домой» ведут на сайт, а не на корень документации.
      logo: { src: './content/product/assets/icon-64.png', alt: 'ProjectHub' },
      // Ссылка на исходники появится вместе с публичным зеркалом (links.sourceRepository в product.json).
      social: product.links.sourceRepository ? [{ icon: 'github', label: 'GitHub', href: product.links.sourceRepository }] : [],
      sidebar: DOCS_SECTIONS.map((section) => ({ label: section.label, slug: section.slug, translations: { ru: section.ru } })),
      // Поиск Pagefind работает только с JavaScript; без него страницы читаются как есть.
      pagefind: true
    })
  ]
});
