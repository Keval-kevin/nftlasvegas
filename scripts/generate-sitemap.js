import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://nftlasvegas.io';
const currentDate = new Date().toISOString().split('T')[0];

// Route configuration with priorities and change frequencies
const routeConfig = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/onboarding': { priority: '0.9', changefreq: 'monthly' },
  '/about': { priority: '0.9', changefreq: 'monthly' },
  '/multiverse': { priority: '0.8', changefreq: 'monthly' },
  '/nonprofit': { priority: '0.8', changefreq: 'monthly' },
  '/takeover': { priority: '0.8', changefreq: 'monthly' },
  '/bookstore': { priority: '0.8', changefreq: 'monthly' },
  '/solutions': { priority: '0.9', changefreq: 'weekly' },
  '/services': { priority: '0.9', changefreq: 'weekly' },
  '/funding-enablement': { priority: '0.8', changefreq: 'monthly' },
  '/tech-development': { priority: '0.8', changefreq: 'monthly' },
  '/product-manufacturing': { priority: '0.8', changefreq: 'monthly' },
  '/platform-launch': { priority: '0.8', changefreq: 'monthly' },
  '/distribution': { priority: '0.8', changefreq: 'monthly' },
  '/case-studies': { priority: '0.8', changefreq: 'weekly' },
  '/ai-voice': { priority: '0.9', changefreq: 'weekly' },
  '/ai-voice/starter': { priority: '0.7', changefreq: 'monthly' },
  '/ai-voice/professional': { priority: '0.7', changefreq: 'monthly' },
  '/ai-voice/advanced': { priority: '0.7', changefreq: 'monthly' },
  '/ai-voice/enterprise': { priority: '0.7', changefreq: 'monthly' },
  '/contact': { priority: '0.9', changefreq: 'monthly' },
  '/book-a-call': { priority: '0.9', changefreq: 'monthly' },
  '/terms-and-conditions': { priority: '0.5', changefreq: 'yearly' },
  '/privacy-policy': { priority: '0.5', changefreq: 'yearly' },
  '/accessibility-statement': { priority: '0.5', changefreq: 'yearly' },
};

// Default configuration for routes not explicitly configured
const defaultConfig = { priority: '0.7', changefreq: 'monthly' };

function extractRoutesFromAppFile() {
  const appPath = path.join(__dirname, '../src/App.tsx');
  const appContent = fs.readFileSync(appPath, 'utf-8');
  
  // Extract all Route path attributes
  const routeRegex = /<Route\s+path="([^"]+)"/g;
  const routes = [];
  let match;
  
  while ((match = routeRegex.exec(appContent)) !== null) {
    const route = match[1];
    // Skip wildcard routes
    if (route !== '*') {
      routes.push(route);
    }
  }
  
  return routes;
}

function generateSitemap(routes) {
  const urlEntries = routes
    .map(route => {
      const config = routeConfig[route] || defaultConfig;
      return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function writeSitemap(content) {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, content, 'utf-8');
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  console.log(`📊 Total routes: ${content.split('<url>').length - 1}`);
}

// Main execution
try {
  console.log('🔍 Extracting routes from App.tsx...');
  const routes = extractRoutesFromAppFile();
  
  console.log(`📝 Found ${routes.length} routes`);
  
  console.log('🔨 Generating sitemap...');
  const sitemap = generateSitemap(routes);
  
  writeSitemap(sitemap);
  
  // Check for routes not in config
  const unconfiguredRoutes = routes.filter(route => !routeConfig[route]);
  if (unconfiguredRoutes.length > 0) {
    console.log('\n⚠️  Routes using default configuration:');
    unconfiguredRoutes.forEach(route => console.log(`   - ${route}`));
    console.log('   Consider adding these to routeConfig in generate-sitemap.js');
  }
} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
  process.exit(1);
}
