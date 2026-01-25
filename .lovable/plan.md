
## Plan: Comprehensive SEO Update for NFT Las Vegas

### Overview
Update all SEO-related configurations including meta tags, favicon, robots.txt, sitemap, Open Graph images, Twitter cards, and structured data with the new branding information and uploaded logo images.

---

### New Branding Details

| Field | Value |
|-------|-------|
| Title | NFT Las Vegas™ Distribution Label |
| Description | Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies. |
| Primary Domain | https://nftlasvegas.io |
| Favicon | New pink geometric cube logo (uploaded image) |

---

### Files to Modify

#### 1. Copy Favicon Images to Public Directory

Copy the uploaded logo images to the public directory for use as favicon and OG image:

| Source | Destination | Purpose |
|--------|-------------|---------|
| `user-uploads://WhatsApp_Image_2026-01-25_at_3.23.28_PM.jpeg` | `public/favicon-dark.jpg` | Dark background favicon |
| `user-uploads://WhatsApp_Image_2026-01-25_at_3.23.29_PM.jpeg` | `public/og-image.jpg` | Light background OG/Twitter image |

---

#### 2. Update index.html (Lines 18, 30-31, 36-51)

Update the following:
- Favicon reference to new logo
- Default title and description
- Open Graph meta tags
- Twitter card meta tags

```html
<!-- New favicon -->
<link rel="icon" type="image/jpeg" href="/favicon-dark.jpg">

<!-- Updated title and description -->
<title>NFT Las Vegas™ Distribution Label</title>
<meta name="description" content="Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies.">

<!-- Updated Open Graph -->
<meta property="og:title" content="NFT Las Vegas™ Distribution Label">
<meta property="og:description" content="Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies.">
<meta property="og:image" content="https://nftlasvegas.io/og-image.jpg" />
<meta property="og:url" content="https://nftlasvegas.io" />

<!-- Updated Twitter Card -->
<meta name="twitter:title" content="NFT Las Vegas™ Distribution Label">
<meta name="twitter:description" content="Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies.">
<meta name="twitter:image" content="https://nftlasvegas.io/og-image.jpg" />
```

---

#### 3. Update SEOHead.tsx (Lines 14-52)

Update default values and structured data:

| Current | Updated |
|---------|---------|
| Default description | New venture enablement description |
| Default image | `/og-image.jpg` |
| Default URL | `https://nftlasvegas.io` |
| Author | "NFT Las Vegas" (was "Easenext") |
| og:site_name | "NFT Las Vegas" (was "Easenext") |
| application-name | "NFT Las Vegas" (was "Easenext") |
| Twitter handle | `@nftlasvegas` (was "@easenext") |
| Structured data services | Updated to match NFT Las Vegas offerings |

---

#### 4. Update AdvancedSEO.tsx (Lines 25-42, 103-121)

Update default values to match NFT Las Vegas branding:

| Field | Updated Value |
|-------|---------------|
| title | "NFT Las Vegas™ Distribution Label" |
| description | New venture enablement description |
| keywords | NFT, blockchain, AI, venture enablement, distribution |
| author | "NFT Las Vegas" |
| image | "/og-image.jpg" |
| siteName | "NFT Las Vegas" |
| twitterSite | "@nftlasvegas" |
| twitterCreator | "@nftlasvegas" |
| Organization schema logo | New logo URL |

---

#### 5. Update robots.txt (Line 6)

Update sitemap URL to use correct domain:

```text
Sitemap: https://nftlasvegas.io/sitemap.xml
```

(Already correct - no change needed)

---

#### 6. Update sitemap.xml (All URLs)

Update lastmod dates to current date (2025-01-25) and add missing routes:

**Add missing routes:**
- `/partnerships` - priority 0.8
- `/cookie-policy` - priority 0.5
- `/bookstore/quantum-leap` - priority 0.7
- `/bookstore/quantum-love` - priority 0.7
- `/bookstore/nobel-peace` - priority 0.7
- `/bookstore/starseed-queens` - priority 0.7
- `/bookstore/quincey-obsession` - priority 0.7

**Remove stale routes:**
- `/about` (redirects to /multiverse)
- `/solutions` (redirects to /services)

---

#### 7. Update IndexNFT.tsx SEOHead Props (Lines 14-18)

Update the homepage SEO with new description:

```tsx
<SEOHead
  title="NFT Las Vegas™ Distribution Label"
  description="Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies."
  keywords="NFT Las Vegas, distribution label, venture enablement, blockchain, AI automation, enterprise infrastructure, digital transformation"
  image="/og-image.jpg"
/>
```

---

### Technical Summary

| File | Changes |
|------|---------|
| `public/favicon-dark.jpg` | New - copy from user upload (dark bg) |
| `public/og-image.jpg` | New - copy from user upload (light bg) |
| `index.html` | Update favicon, title, description, OG/Twitter meta tags |
| `src/components/SEO/SEOHead.tsx` | Update all default values and structured data |
| `src/components/AdvancedSEO.tsx` | Update all default values and organization schema |
| `public/sitemap.xml` | Add missing routes, remove redirected routes, update lastmod |
| `src/pages/IndexNFT.tsx` | Update SEOHead props with new description |

---

### SEO Improvements Included

1. **Consistent Branding** - All meta tags use "NFT Las Vegas" instead of mixed "Easenext" references
2. **Updated Favicon** - New pink geometric cube logo visible in browser tabs and Google search
3. **Open Graph Image** - High-quality image for social media sharing (1200x630 recommended)
4. **Twitter Cards** - Proper large image cards for X/Twitter sharing
5. **Structured Data** - Updated Organization schema with correct name, logo, and services
6. **Sitemap Accuracy** - All current routes included, redirected routes removed
7. **Canonical URLs** - All using consistent https://nftlasvegas.io domain

---

### Result
- Google search results will display the new favicon (pink cube logo)
- Social media shares will show the branded OG image
- All meta descriptions match the new venture enablement messaging
- Sitemap is accurate for search engine crawling
- Structured data helps Google understand the business
