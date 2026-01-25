
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
  description = "Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies.",
  keywords = "NFT Las Vegas, distribution label, venture enablement, blockchain, AI automation, enterprise infrastructure, digital transformation",
  image = "/og-image.jpg",
  url = "https://nftlasvegas.io",
  type = "website",
  structuredData
}: SEOHeadProps) => {
  const fullTitle = title.includes("NFT Las Vegas") ? title : `${title} | NFT Las Vegas`;
  const fullImageUrl = image.startsWith("http") ? image : `https://nftlasvegas.io${image}`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NFT Las Vegas",
    "description": description,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": "https://nftlasvegas.io/og-image.jpg",
      "width": 1200,
      "height": 630
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business",
      "url": `${url}/contact`
    },
    "sameAs": [
      "https://www.linkedin.com/company/nftlasvegas/",
      "https://twitter.com/nftlasvegas"
    ],
    "services": [
      "Venture Enablement",
      "Blockchain Solutions",
      "AI Automation",
      "Enterprise Infrastructure",
      "Digital Transformation",
      "Product Manufacturing",
      "Platform Launch",
      "Distribution Services"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="NFT Las Vegas" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="NFT Las Vegas" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nftlasvegas" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0b1020" />
      <meta name="msapplication-TileColor" content="#0b1020" />
      <meta name="application-name" content="NFT Las Vegas" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};
