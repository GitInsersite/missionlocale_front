const fs = require('fs');

function generateSitemapXml(routes) {
  const xmlUrls = routes.map(route => {
    return `<url><loc>${baseUrl}${route}</loc></url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlUrls.join('')}
    </urlset>`;

  return xml;
}

const routes = [
  '/',
  '/nos-missions',
  '/nos-communes',
  '/gouvernance',
  '/equipe',
  '/se-former',
  '/sorienter',
  '/trouver-un-emploi',
  '/etre-accompagne',
  '/expertise',
  '/demarche-rse',
  '/taxe-apprentissage',
  '/actualites',
  '/ateliers',
  '/contact',
  '/connexion-jeune',
  '/mot-de-passe-oublie',
  '/connexion-entreprise',
  '/mot-de-passe-oublie-entreprise',
  '/pre-inscription',
  '/espace-personnel-jeune',
  '/espace-personnel-jeune2',
  '/formations',
  '/pre-inscription-entreprise',
  '/espace-entreprise',
  '/espace-personnel-entreprise',
  '/offre-emploi',
  '/info-legale',
  '/politique-confidentialite'
];

const sitemapXml = generateSitemapXml(routes);

fs.writeFileSync('sitemap.xml', sitemapXml);
