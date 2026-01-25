

## Plan: Fix Salesforce CRM Download PDF Buttons

### Overview
Make the "Download PDF" buttons functional by creating dedicated PDF files for each Salesforce service tier and linking them properly.

---

### Current State
- 4 "Download PDF" buttons exist but have no functionality
- The buttons are plain `<Button>` elements without `onClick` or href
- The existing Tech Development PDF contains generic project intake forms, not Salesforce-specific pricing

---

### Changes Required

#### 1. Create 4 New Salesforce PDF Files

Create detailed PDF documents for each service tier in `public/downloads/`:

| PDF File Name | Content |
|--------------|---------|
| `Salesforce-Quick-Start-Plan.pdf` | Sales Cloud Quick Start - $12,500, 40 hours, 2-4 weeks, full feature list |
| `Salesforce-Growth-Plan.pdf` | Sales Cloud Growth Plan - $30,000, 100 hours, 4-6 weeks, full feature list |
| `Salesforce-Starter-Suite.pdf` | Starter Suite Onboarding - $7,500, 15 hours, 2-4 weeks, full feature list |
| `Salesforce-Pro-Suite.pdf` | Pro Suite Implementation - $12,500, 40 hours, 3-6 weeks, full feature list |

**Note**: PDF creation requires external tools. The implementation will use `<a>` links pointing to these PDF paths. You will need to create the actual PDF files and upload them to `public/downloads/`.

---

#### 2. Update SalesforceCRM.tsx - Convert Buttons to Download Links

**File:** `src/components/SalesforceCRM.tsx`

**Changes at 4 locations:**

**Line 96-99** (Quick Start card):
```tsx
// Before
<Button variant="outline" className="flex-1">
  <Download className="w-4 h-4 mr-2" />
  Download PDF
</Button>

// After
<a 
  href="/downloads/Salesforce-Quick-Start-Plan.pdf" 
  download="NFT-Las-Vegas-Salesforce-Quick-Start.pdf"
  className="flex-1"
>
  <Button variant="outline" className="w-full">
    <Download className="w-4 h-4 mr-2" />
    Download PDF
  </Button>
</a>
```

**Line 155-158** (Growth Plan card):
```tsx
<a 
  href="/downloads/Salesforce-Growth-Plan.pdf" 
  download="NFT-Las-Vegas-Salesforce-Growth-Plan.pdf"
  className="flex-1"
>
  <Button variant="outline" className="w-full">
    <Download className="w-4 h-4 mr-2" />
    Download PDF
  </Button>
</a>
```

**Line 271-274** (Starter Suite card):
```tsx
<a 
  href="/downloads/Salesforce-Starter-Suite.pdf" 
  download="NFT-Las-Vegas-Salesforce-Starter-Suite.pdf"
  className="flex-1"
>
  <Button variant="outline" className="w-full">
    <Download className="w-4 h-4 mr-2" />
    Download PDF
  </Button>
</a>
```

**Line 359-362** (Pro Suite card):
```tsx
<a 
  href="/downloads/Salesforce-Pro-Suite.pdf" 
  download="NFT-Las-Vegas-Salesforce-Pro-Suite.pdf"
  className="flex-1"
>
  <Button variant="outline" className="w-full">
    <Download className="w-4 h-4 mr-2" />
    Download PDF
  </Button>
</a>
```

---

### PDF Content Structure (for each file)

Each PDF should include:
1. NFT Las Vegas branding/header
2. Service tier name and badge (e.g., "POPULAR", "BEST VALUE")
3. Pricing, hours, and timeline
4. Complete "What's included" feature list
5. Optional add-ons section (for Sales Cloud plans)
6. Contact information and next steps
7. "Book Discovery Call" CTA with contact URL

---

### Technical Summary

| File | Changes |
|------|---------|
| `src/components/SalesforceCRM.tsx` | Wrap 4 Download PDF buttons with `<a>` download links |
| `public/downloads/` | Add 4 new Salesforce PDF files (requires manual PDF creation) |

---

### Mobile Tab Buttons Status

The tab buttons ("Sales Cloud Quick Implementations" and "Starter & Pro Suite Services") are working correctly - they use Radix UI Tabs which handles touch events properly. The circled area in your screenshot shows these tabs which should toggle content on tap.

---

### Result
- All 4 "Download PDF" buttons will trigger file downloads
- Each PDF contains the specific service tier details from the page
- Mobile touch interactions fully supported

