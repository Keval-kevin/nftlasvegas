
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "service";
  structuredData?: object;
}

export const SEOHead = ({
  title = "NFT Las Vegas™ Distribution Label",
  description = "Your all-in-one partner for marketing, branding, and enterprise-level tech development. We turn ambitious ideas into reality, propelling your business to new heights.",
  keywords = "NFT Las Vegas, distribution label, marketing, branding, tech development, music distribution, product manufacturing, platform launch",
  image = "/lovable-uploads/45d400ac-8bf5-41af-8aaf-1c03b17e2b04.png",
  url = "https://www.nftlasvegas.com",
  type = "website",
  structuredData
}: SEOHeadProps) => {
  const fullTitle = title.includes("NFT Las Vegas") ? title : `${title} | NFT Las Vegas`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NFT Las Vegas",
    "description": description,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": `${url}${image}`,
      "width": 1200,
      "height": 630
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business",
      "url": `${url}/contact`
    },
    "sameAs": [
      "https://www.linkedin.com/company/ease-next/"
    ],
    "services": [
      "AI Automation Solutions",
      "Healthcare Technology Solutions",
      "Business Process Automation",
      "Custom Software Development",
      "Trending Technologies Implementation"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Easenext" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Easenext" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@easenext" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="application-name" content="Easenext" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};
