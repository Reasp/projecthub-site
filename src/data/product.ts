// Продуктовый контекст — только из content/product/ (правила сайта, decision-1 п. 3).
import product from '../../content/product/product.json';
import releases from '../../public/releases/open/releases.json';

export interface Edition {
  id: 'personal' | 'team' | 'enterprise';
  name: string;
  price: { model: string; license?: string; currency?: string; min?: number; max?: number; hypothesis?: boolean };
  status: string;
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

export const PRODUCT = product as typeof product & { editions: Edition[] };
export const RELEASES = releases as Releases;
export const VERSION: string = PRODUCT.version;
export const LINKS = PRODUCT.links;

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

export const SOURCE_CLONE = [
  `git clone --recurse-submodules ${LINKS.sourceRepository}.git`,
  'cd ProjectHub',
  'npm install',
  'npm run pack:win   # Windows: release/win-unpacked/ProjectHub.exe',
  'npm run pack:mac   # macOS'
].join('\n');
