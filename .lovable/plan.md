

## Plan: Install Two Meta (Facebook) Pixels

### What's Changing

The current analytics component has a placeholder Facebook Pixel ID (`XXXXXXXXXX`). We'll update it to support **two real Meta Pixels** simultaneously:

- **Pixel 1**: `896780503164243`
- **Pixel 2**: `25818556454432701`

Both pixels will fire on every page across the entire site automatically (the component is already mounted globally in `App.tsx`).

---

### Files to Modify

#### 1. `src/components/Analytics/GoogleAnalytics.tsx`

**Update the interface** to accept an array of pixel IDs instead of a single one:

```tsx
interface GoogleAnalyticsProps {
  measurementId?: string;
  facebookPixelIds?: string[];  // Changed from single string
  linkedInPartnerId?: string;
}
```

**Update initialization** to init both pixels with a single `fbevents.js` load:

```tsx
fbq('init', '896780503164243');
fbq('init', '25818556454432701');
fbq('track', 'PageView');
```

**Update noscript fallbacks** to include both pixel IDs for non-JavaScript browsers.

**Update route-change tracking** to fire `PageView` for both pixels on every navigation.

#### 2. `src/App.tsx` (Line 56)

Update the prop from placeholder to real IDs:

```tsx
<GoogleAnalytics 
  measurementId="G-7NVLMVTXGD" 
  facebookPixelIds={["896780503164243", "25818556454432701"]}
  linkedInPartnerId="XXXXXXX"
/>
```

---

### How It Works

- The component is already rendered at the app root level, so it tracks **all pages** automatically
- On initial load: both pixels initialize and fire `PageView`
- On every route change: `fbq('track', 'PageView')` fires for both pixels
- Cookie consent is respected -- pixels only load after user accepts cookies
- The `trackEvent` and `trackConversion` utility functions will also send events to both pixels automatically

### Technical Details

| Item | Detail |
|------|--------|
| Files changed | 2 (`GoogleAnalytics.tsx`, `App.tsx`) |
| Pixel 1 ID | `896780503164243` |
| Pixel 2 ID | `25818556454432701` |
| Coverage | All pages site-wide |
| Consent | Only fires after cookie consent accepted |

