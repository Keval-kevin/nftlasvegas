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
  title = 'Easenext - Empowering Businesses with Smart Tech Solutions',
  description = 'From AI-driven automation to healthcare innovation, Easenext is your partner in building the future. Custom solutions, expert talent, and smart technology.',
  keywords = ['AI automation', 'healthcare innovation', 'custom software', 'tech solutions', 'digital transformation'],
  author = 'Easenext',
  type = 'website',
  image = '/lovable-uploads/45d400ac-8bf5-41af-8aaf-1c03b17e2b04.png',
  url,
  publishedTime,
  modifiedTime,
  section,
  tags,
  locale = 'en_US',
  siteName = 'Easenext',
  twitterSite = '@easenext',
  twitterCreator = '@easenext',
  canonicalUrl,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  structuredData
}) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const canonical = canonicalUrl || currentUrl;

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
      <meta property="og:image" content={image} />
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
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
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
          "name": "Easenext",
          "url": "https://easenext.com",
          "logo": "https://easenext.com/lovable-uploads/1c9723c9-35fd-49bd-878c-7cea1e3e924f.png",
          "description": "Empowering businesses with smart tech solutions including AI automation, healthcare innovation, and custom software development.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://easenext.com/contact"
          },
          "sameAs": [
            "https://linkedin.com/company/easenext",
            "https://twitter.com/easenext"
          ]
        })}
      </script>
    </Helmet>
  );
};