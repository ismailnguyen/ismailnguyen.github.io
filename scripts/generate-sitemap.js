#!/usr/bin/env node
// Generate sitemap.xml based on Works API pages
// Usage: VITE_WORKS_API_URL=https://api.example.com/ node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

async function main() {
  const baseUrl = process.env.SITE_BASE_URL || 'https://www.ismailnguyen.com';
  const apiBase = (process.env.VITE_WORKS_API_URL || '').trim();
  const outFile = path.join(process.cwd(), 'public', 'sitemap.xml');

  if (!apiBase) {
    console.warn('VITE_WORKS_API_URL not set. Leaving existing sitemap.xml unchanged.');
    process.exit(0);
  }

  const now = new Date().toISOString();
  let pages = [];
  try {
    const res = await fetch(new URL('pages/', apiBase));
    if (!res.ok) throw new Error(`Fetch failed ${res.status}`);
    pages = await res.json();
  } catch (e) {
    console.warn(`Failed to fetch pages from API: ${e.message}. Keeping existing sitemap.`);
    process.exit(0);
  }

  const urls = new Set();
  urls.add(`${baseUrl}/`);
  for (const p of pages) {
    if (!p || !p.id) continue;
    const id = encodeURIComponent(p.id);
    urls.add(`${baseUrl}/work/${id}`);
    urls.add(`${baseUrl}/work/${id}/privacy`);
    urls.add(`${baseUrl}/work/${id}/license`);
  }

  const xmlParts = [];
  xmlParts.push('<?xml version="1.0" encoding="UTF-8"?>');
  xmlParts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for (const url of urls) {
    xmlParts.push('  <url>');
    xmlParts.push(`    <loc>${url}</loc>`);
    xmlParts.push(`    <lastmod>${now}</lastmod>`);
    xmlParts.push('    <changefreq>weekly</changefreq>');
    xmlParts.push('    <priority>0.8</priority>');
    xmlParts.push('  </url>');
  }
  xmlParts.push('</urlset>');

  fs.writeFileSync(outFile, xmlParts.join('\n'));
  console.log(`Wrote sitemap with ${urls.size} URLs to ${outFile}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

