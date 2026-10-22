# projecthub-site

Публичный сайт [ProjectHub](https://github.com/Reasp/ProjectHub) — Agentic Development Environment, «control room for AI coding agents».

[English](README.md) · **Русский**

## Что где лежит

- `content/product/` — продуктовый контекст, экспортированный из репозитория-источника ProjectHub (README, редакции, решения, скриншоты, материалы питча, `product.json`). Создаётся скриптом `scripts/site/export-product-context.mjs` источника; руками не править.
- `backlog/` — задачи, документация и архитектурные решения самого сайта (Backlog.md, по-русски).
- `.projecthub/infra/` — инфраструктура ProjectHub для агентов (поиск по документации, инструменты процессов); в сборку сайта не входит.
- `CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.agents/rules/` — правила для ИИ-агентов, работающих над сайтом.

Сайт собран на Astro со Starlight (см. `backlog/decisions/decision-1`): маркетинговые страницы в `src/pages/` и `src/pages-shared/`, документация в `src/content/docs/`, строки интерфейса в `src/i18n/`.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # статический вывод в dist/
npm run preview   # отдать dist/ локально
```

Деплой: Cloudflare Pages собирает `main` при каждом пуше и даёт каждой другой ветке адрес предпросмотра; шаги настройки для владельца — в `backlog/docs/doc-2`.

## Работа с репозиторием-источником

Этот репозиторий подключён сабмодулем `site/` к источнику ProjectHub. Клонировать источник вместе с сайтом:

```bash
git clone --recurse-submodules git@github.com:Reasp/ProjectHub.git
```

Работа над сайтом ведётся в этом репозитории, а не в worktree источника. Продуктовый контекст обновляется из источника командой:

```bash
npm run site:export   # в репозитории ProjectHub
```

## Языки

Базовый язык сайта — английский; у каждой страницы есть русская версия в `/ru/`.
