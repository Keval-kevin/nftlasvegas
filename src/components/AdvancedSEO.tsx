import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  image?: string;
  url?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  robots?: string;
  structuredData?: object;
}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title = 'NFT Las Vegas™ Distribution Label',
  description = 'Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies.',
  keywords = ['NFT Las Vegas', 'distribution label', 'venture enablement', 'blockchain', 'AI automation', 'enterprise infrastructure', 'digital transformation'],
  author = 'NFT Las Vegas',
  type = 'website',
  image = '/og-image.png',
  url,
  publishedTime,
  modifiedTime,
  section,
  tags,
  locale = 'en_US',
  siteName = 'NFT Las Vegas',
  twitterSite = '@nftlasvegas',
  twitterCreator = '@nftlasvegas',
  canonicalUrl,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  structuredData
}) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://nftlasvegas.io');
  const canonical = canonicalUrl || currentUrl;
  const fullImageUrl = image.startsWith('http') ? image : `https://nftlasvegas.io${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={`${title} - Preview Image`} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0b1020" />
      <meta name="msapplication-TileColor" content="#0b1020" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Default Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NFT Las Vegas",
          "url": "https://nftlasvegas.io",
          "logo": "https://nftlasvegas.io/og-image.png",
          "description": "Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://nftlasvegas.io/contact"
          },
          "sameAs": [
            "https://linkedin.com/company/nftlasvegas",
            "https://twitter.com/nftlasvegas"
          ]
        })}
      </script>
    </Helmet>
  );
};
