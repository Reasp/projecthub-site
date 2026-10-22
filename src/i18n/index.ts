import { en, type Dictionary } from './en';
import { ru } from './ru';

export type Locale = 'en' | 'ru';
export const LOCALES: Locale[] = ['en', 'ru'];
export const DEFAULT_LOCALE: Locale = 'en';

const dictionaries: Record<Locale, Dictionary> = { en, ru };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

/** Путь страницы в локали: английский без префикса, русский под /ru/. */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? clean : `/ru${clean === '/' ? '/' : clean}`;
}

/** Та же страница в другой локали — для переключателя языка. */
export function alternatePath(locale: Locale, pathname: string): string {
  const other: Locale = locale === 'en' ? 'ru' : 'en';
  const stripped = locale === 'ru' && pathname.startsWith('/ru') ? pathname.slice(3) || '/' : pathname;
  return localePath(other, stripped);
}

export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => vars[key] ?? match);
}
