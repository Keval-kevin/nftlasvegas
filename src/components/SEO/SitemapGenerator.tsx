
export const generateSitemap = () => {
  const baseUrl = "https://www.nftlasvegas.com";
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/about", priority: "0.9", changefreq: "monthly" },
    { url: "/solutions", priority: "0.9", changefreq: "weekly" },
    { url: "/business-process-solutions", priority: "0.8", changefreq: "monthly" },
    { url: "/healthcare-solutions", priority: "0.8", changefreq: "monthly" },
    { url: "/ai-automation-solutions", priority: "0.8", changefreq: "monthly" },
    { url: "/trending-technologies-solutions", priority: "0.8", changefreq: "monthly" },
    { url: "/healthcare-innovation", priority: "0.7", changefreq: "monthly" },
    { url: "/ai-automation", priority: "0.7", changefreq: "monthly" },
    { url: "/trending-technologies", priority: "0.7", changefreq: "monthly" },
    { url: "/product-development", priority: "0.8", changefreq: "monthly" },
    { url: "/hire-experts", priority: "0.8", changefreq: "monthly" },
    { url: "/case-studies", priority: "0.7", changefreq: "weekly" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/blog/ai-healthcare", priority: "0.6", changefreq: "monthly" },
    { url: "/blog/react-development", priority: "0.6", changefreq: "monthly" },
    { url: "/blog/design-systems", priority: "0.6", changefreq: "monthly" },
    { url: "/contact", priority: "0.9", changefreq: "monthly" },
    { url: "/careers", priority: "0.7", changefreq: "weekly" },
    { url: "/sitemap", priority: "0.5", changefreq: "monthly" }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};
