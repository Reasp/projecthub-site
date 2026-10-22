// Копирует иконки продукта из экспорта источника (content/product/assets/icon-*.png) в public/icons/ перед сборкой:
// favicon Starlight и <link rel="icon"> принимают только путь внутри public/. Каталог public/icons/ не коммитится.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'content', 'product', 'assets');
const target = path.join(root, 'public', 'icons');

fs.mkdirSync(target, { recursive: true });
const icons = fs.readdirSync(source).filter((name) => /^icon-\d+\.png$/.test(name));
if (icons.length === 0) throw new Error(`No icon-*.png in ${source}: run the product context export in the ProjectHub source`);
for (const name of icons) fs.copyFileSync(path.join(source, name), path.join(target, name));
console.log(`icons: ${icons.length} files → public/icons/`);
