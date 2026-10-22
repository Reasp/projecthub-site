---
id: doc-2
title: "Деплой на Cloudflare Pages: настройка хостинга владельцем, предпросмотр веток, локальная сборка"
type: guide
created_date: "2026-10-22 15:10"
section: "Сайт"
---
# Деплой на Cloudflare Pages

Хостинг выбран в [[decision-1]]: Cloudflare Pages собирает сайт сам при каждом пуше в репозиторий, без GitHub
Actions. Аккаунт, подключение репозитория и домен настраивает владелец; агент готовит конфиг и эту инструкцию.

## Что уже в репозитории

- `package.json`: `npm run build` → `astro build`, вывод в `dist/`; перед сборкой `scripts/sync-icons.mjs` копирует
  иконки из `content/product/assets/` в `public/icons/`.
- `.node-version` — `22`: Cloudflare берёт версию Node из этого файла.
- `public/_headers` — заголовки безопасности и Content-Security-Policy (только свой origin, без внешних скриптов).
- `public/releases/open/releases.json` — данные страницы Download; до задачи загрузок в источнике это заглушка.
- Локаль `ru` отдаётся по `/ru/…`, английская — без префикса; `sitemap-index.xml` строится автоматически.

## Настройка владельцем (один раз)

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → выбрать репозиторий `projecthub-site`.
2. Параметры сборки: Framework preset — Astro; Build command — `npm run build`; Build output directory — `dist`;
   Root directory — пусто (корень репозитория). Переменные окружения: `ASTRO_TELEMETRY_DISABLED=1`
   (сборочная телеметрия Astro — не сайта, но тоже ни к чему).
3. Production branch — `main`. Все остальные ветки получают предпросмотр по адресу
   `<ветка>.<проект>.pages.dev` и по адресу на каждый коммит — это и есть предпросмотр веток из критерия приёмки.
4. Custom domains → добавить домен сайта, когда он появится (ноябрь 2026). После этого обновить `links.site` в
   экспорте источника (`scripts/site/product-context-rules.mjs` → `PLACEHOLDER_LINKS`) и перезапустить
   `npm run site:export` в источнике: `astro.config.mjs` берёт `site` из `content/product/product.json`, от него
   зависят канонические ссылки и sitemap.
5. Web Analytics Cloudflare не включать: на сайте нет трекеров (правила сайта, decision-7 источника); статистика —
   только серверные логи хостинга.

## Запасной вариант — GitHub Pages

Без GitHub Actions GitHub Pages умеет отдавать только готовые файлы из ветки, поэтому `dist/` пришлось бы
коммитить, а предпросмотра веток нет. Вариант держится в запасе, если Cloudflare окажется недоступен.

## Локально

```bash
npm install
npm run dev        # http://localhost:4321, с hot reload
npm run build      # dist/
npm run preview    # отдать dist/ локально
```

Инфраструктура ProjectHub для агентов (`docs-rag`, `env-tools`, Backlog.md) живёт в `.projecthub/infra/` и в сборку
не входит: `npm run lint:docs` и `npm run index-docs` из корня проксируют туда.

## Канал обновлений (позже)

По decision-158 источника (п. 4) на этом же домене появятся `/releases/open/` и `/releases/team/`: первый —
статические файлы, второй — по токену заказчика через Cloudflare Access или Worker. Это задачи загрузок и
лицензирования в источнике, здесь пока только каталог `public/releases/open/`.
