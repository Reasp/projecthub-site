// Продуктовый контекст — только из content/product/ (правила сайта, decision-1 п. 3).
import product from '../../content/product/product.json';
import releases from '../../public/releases/open/releases.json';

export interface Edition {
  id: 'personal' | 'team' | 'enterprise';
  name: string;
  price: { model: string; license?: string; currency?: string; min?: number; max?: number; hypothesis?: boolean };
  status: string;
}

export interface Links {
  /** Публичный репозиторий сайта; null — пока нет. */
  repository: string | null;
  /** Публичное зеркало открытой редакции; null — источник приватный, зеркала ещё нет. */
  sourceRepository: string | null;
  /** Ссылка для пожертвований; null — владелец ещё не задал. */
  donate: string | null;
  site: string;
}

export interface ReleaseBuild {
  platform: string;
  format: string;
  file: string;
  url: string;
  sha256: string;
}

export interface Releases {
  schema: number;
  edition: string;
  version: string;
  published: string | null;
  builds: ReleaseBuild[];
}

export const PRODUCT = product as typeof product & { editions: Edition[]; links: Links };
export const RELEASES = releases as Releases;
export const VERSION: string = PRODUCT.version;
export const LINKS: Links = PRODUCT.links;
/** Страница релизов публичного зеркала: установщики открытой редакции (GitHub Releases). */
export const RELEASES_URL: string | null = LINKS.sourceRepository ? `${LINKS.sourceRepository}/releases` : null;

export function edition(id: Edition['id']): Edition {
  const found = PRODUCT.editions.find((item) => item.id === id);
  if (!found) throw new Error(`product.json: no edition ${id}`);
  return found;
}

/** Цена Team как в doc-12: «$25–40», без округления. */
export function teamPriceRange(): string {
  const { price } = edition('team');
  return `$${price.min}–${price.max}`;
}
