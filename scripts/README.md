# Sitemap Generator

This script automatically generates the sitemap.xml file based on routes defined in `src/App.tsx`.

## Usage

Run the script manually:

```bash
node scripts/generate-sitemap.js
```

Or add to your build process in package.json:

```json
{
  "scripts": {
    "generate-sitemap": "node scripts/generate-sitemap.js",
    "prebuild": "npm run generate-sitemap"
  }
}
```

## Configuration

Edit `scripts/generate-sitemap.js` to customize:

- **baseUrl**: The production URL (currently `https://nftlasvegas.io`)
- **routeConfig**: Priority and change frequency for specific routes
- **defaultConfig**: Default values for unconfigured routes

## Route Configuration

Each route can specify:
- `priority`: 0.0 to 1.0 (importance relative to other pages)
- `changefreq`: How often the page changes (always, hourly, daily, weekly, monthly, yearly, never)

Example:
```javascript
'/about': { priority: '0.9', changefreq: 'monthly' }
```

## Automatic Updates

The script will:
1. Read all routes from `src/App.tsx`
2. Apply configured priorities and change frequencies
3. Use current date for `lastmod`
4. Generate `public/sitemap.xml`
5. Report any routes using default configuration

## SEO Best Practices

- Home page: priority 1.0, weekly updates
- Main pages: priority 0.9, weekly/monthly updates
- Content pages: priority 0.7-0.8, monthly updates
- Legal pages: priority 0.5, yearly updates
