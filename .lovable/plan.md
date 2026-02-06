

## Plan: Update Favicon, Meta Tags, and Search Indexing

### Overview

Update the site's branding assets with the new red geometric cube logo across all touchpoints - favicon, Open Graph images, meta tags, and ensure proper search engine indexing.

---

### Files to Update

| File | Purpose |
|------|---------|
| `public/favicon.png` | Browser tab favicon |
| `public/og-image.png` | Social media preview image |
| `index.html` | Main HTML meta tags and favicon links |
| `src/components/SEO/SEOHead.tsx` | Dynamic SEO component for all pages |
| `src/components/AdvancedSEO.tsx` | Advanced SEO component with structured data |
| `public/sitemap.xml` | Update lastmod dates for fresh crawling |
| `public/robots.txt` | Ensure proper indexing directives |

---

### Changes Summary

#### 1. Copy New Favicon Image

Copy the uploaded image to both favicon and OG image locations:
- `public/favicon.png` - For browser tabs
- `public/og-image.png` - For social media previews

#### 2. Update index.html (Lines 15-17, 41-43, 52)

Add comprehensive favicon support and update meta:

```html
<!-- Favicon - Multiple formats for cross-browser support -->
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png">
<link rel="mask-icon" href="/favicon.png" color="#E85A5A">
<meta name="msapplication-TileImage" content="/favicon.png">
```

Update Open Graph image dimensions to standard 1200x1200 (square for logo):
```html
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="1200" />
```

#### 3. Update SEOHead.tsx (Lines 32-37)

Update the structured data logo reference:
```tsx
"logo": {
  "@type": "ImageObject",
  "url": "https://nftlasvegas.io/favicon.png",
  "width": 512,
  "height": 512
},
```

#### 4. Update AdvancedSEO.tsx (Line 111)

Update the organization schema logo:
```tsx
"logo": "https://nftlasvegas.io/favicon.png",
```

#### 5. Update Sitemap (public/sitemap.xml)

Refresh all lastmod dates to today (2026-02-06) to signal search engines that content is fresh and should be recrawled.

#### 6. Update Robots.txt (public/robots.txt)

Ensure proper Googlebot indexing with explicit image path allowances:
```text
# Allow favicon and branding assets
Allow: /favicon.png
Allow: /og-image.png
```

---

### Technical Details

#### Favicon Implementation

| Size | Purpose |
|------|---------|
| Default | General browser tabs |
| 180x180 | Apple Touch Icon (iOS home screen) |
| 32x32 | Standard favicon size |
| 16x16 | Small favicon size |

#### Search Indexing Improvements

| Directive | Purpose |
|-----------|---------|
| `max-image-preview:large` | Allow large image previews in search results |
| `max-snippet:-1` | No limit on text snippet length |
| `max-video-preview:-1` | No limit on video preview length |
| `googlebot: index, follow` | Explicitly allow Google indexing |

#### Structured Data (JSON-LD)

Update Organization schema with new logo reference for rich search results:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NFT Las Vegas",
  "logo": "https://nftlasvegas.io/favicon.png"
}
```

---

### Files Modified

| File | Lines Changed | Change Description |
|------|---------------|-------------------|
| `public/favicon.png` | - | Replace with new red cube image |
| `public/og-image.png` | - | Replace with new red cube image |
| `index.html` | 15-17 | Add comprehensive favicon meta tags |
| `src/components/SEO/SEOHead.tsx` | 32-37 | Update logo in structured data |
| `src/components/AdvancedSEO.tsx` | 111 | Update logo in organization schema |
| `public/sitemap.xml` | Multiple | Update all lastmod to 2026-02-06 |
| `public/robots.txt` | 46-47 | Add explicit favicon allowances |

---

### Result

- New red geometric cube appears in browser tabs across all devices
- Social media previews (Facebook, Twitter, LinkedIn) show the new logo
- Google Search Console and other crawlers can index the new images
- Updated sitemap signals freshness to search engines
- Structured data provides the correct logo for Google Knowledge Panel

