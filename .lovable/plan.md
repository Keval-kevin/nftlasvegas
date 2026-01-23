
# NFT Las Vegas™ Website Revision - Updated Implementation Plan

## Overview

This updated plan covers **68 revision requests** across 12 pages/sections, incorporating the new bookstore content with HubSpot checkout integration and individual book detail pages.

---

## New Assets Required

### Book Cover Images
The zip file with book images needs to be extracted and copied to the project. Based on the document, we have 5 books that need cover images.

### HubSpot Checkout Links (Provided)
| Book | Checkout URL |
|------|-------------|
| How To Quantum Leap Your Business | `https://portal.nftlasvegas.io/hs/payments/CwKWqkq7yX?referrer=PAYMENT_LINK` |
| Quantum Love in the Metaverse | `https://portal.nftlasvegas.io/hs/payments/hJJR2gDrTNRJhf?referrer=PAYMENT_LINK` |
| A Nobel Peace Prize for Dummies | `https://portal.nftlasvegas.io/hs/payments/HY7WrGZHzR?referrer=PAYMENT_LINK` |
| Quantum Dating for Starseed Queens | `https://portal.nftlasvegas.io/hs/payments/9nZhfpXf?referrer=PAYMENT_LINK` |
| The Quincey Lee Obsession | `https://portal.nftlasvegas.io/hs/payments/2HF7TFv9DDNdCk?referrer=PAYMENT_LINK` |

### HubSpot Meetings Scheduler (Replacing Calendly)
```html
<div class="meetings-iframe-container" data-src="http://portal.nftlasvegas.io/meetings/quincey-lee?embed=true"></div>
<script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
```

---

## Phase 1: Footer Overhaul

**File:** `src/components/Footer.tsx`

### 1.1 Remove "Solutions" Section
- Merge all Solutions links into Services section

### 1.2 Updated Services Section (In Order)
1. Onboarding → `/onboarding`
2. Funding Enablement → `/funding-enablement`
3. Tech Development → `/tech-development`
4. Product Manufacturing → `/product-manufacturing`
5. Platform Launch → `/platform-launch`
6. Distribution → `/distribution`

### 1.3 Updated Company Section (In Order)
1. About → `/about`
2. Multiverse → `/multiverse`
3. Non Profit → `/nonprofit`
4. Takeover → `/takeover`
5. Bookstore → `/bookstore`
6. Case Studies → `/case-studies`
7. AI Voice System → `/ai-voice`
8. Contact Us → `/contact`
9. FAQ → `/contact#faq`

### 1.4 Contact Info Updates
| Field | Current | Revised |
|-------|---------|---------|
| Email | contact@nftlasvegas.com | QuinceyLee@NFTLasVegas.io |
| Phone | +1 (702) 555-0100 | +1(725)240-6130 |

### 1.5 Text Updates
| Element | Current | Revised |
|---------|---------|---------|
| Description | "Your all-in-one partner for marketing, branding & enterprise-level tech development. From funding to launch, powered by AI, Blockchain & Human Creativity." | "Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies." |
| Newsletter Title | "Stay Updated" | "Stay Updated ♥️" |
| Copyright | © 2025 | © 2026 |

### 1.6 Social Links Update
- LinkedIn: Keep as-is
- Twitter/X: Keep as-is  
- Replace GitHub icon with Facebook icon (link already correct)
- Replace Mail icon with Instagram icon (link already correct)

---

## Phase 2: Homepage Revisions

### 2.1 Hero Section Updates
**File:** `src/components/Hero/HeroNFT.tsx`

| Element | Current | Revised |
|---------|---------|---------|
| Tagline | "From startups to global brands, we engineer scalable ecosystems of innovation." | "We build scalable, self-sustaining digital ecosystems designed around intelligent automation—powering products, operations, and continuous growth cycles through AI, blockchain, and enterprise infrastructure." |
| Subtext | "Full-stack venture enablement combining blockchain, AI, and enterprise infrastructure to create self-sustainable economies." | **REMOVE entirely** |

### 2.2 Ecosystem Chart Updates
**File:** `src/components/Flywheel/EcosystemChart.tsx`

| Change | Action |
|--------|--------|
| "Channel Live" milestone | Change to "Scale" |
| Journey labels (Start, Validate, Build, Make, Announce, Scale) | Remove the journey labels section at bottom of chart |
| Y-axis spacing (0, 25, 50, 75, 100) | Increase spacing to make graph appear steeper |
| "Learn More" hover links | Already working - verify navigation is functioning |
| Show "Scale" on mobile | Ensure mobile displays the milestone text |

### 2.3 Stats Section
**File:** `src/pages/IndexNFT.tsx` or related component
- Remove "100 Projects Launched, $50M+ Secured, 25+ Countries, 98% Success Rate" section

### 2.4 CTA Button Fixes
- "Request Proposal" button → Link to `/contact`
- "Download Onboarding Package" → Rename file to "NFT Las Vegas™ Onboarding Package"

---

## Phase 3: Contact Page Updates

**File:** `src/pages/Contact.tsx`

### 3.1 Hero Section
- Remove: "Las Vegas, NV • Global delivery • Equity-based partnerships available"
- Add phone: +1(725)240-6130 in visible area

### 3.2 Quick Contact Cards
- **REMOVE** entire section (Sales, Partnerships, Media/Press, Support cards)

### 3.3 Replace Calendly with HubSpot
**Current (line 224):**
```jsx
<iframe src="https://calendly.com/nftlasvegas" width="100%" height="700" frameBorder="0" />
```

**Replace with:**
```jsx
<div 
  className="meetings-iframe-container min-h-[700px]" 
  data-src="http://portal.nftlasvegas.io/meetings/quincey-lee?embed=true"
/>
```
Plus add HubSpot embed script to the page.

### 3.4 Ensure FAQ Anchor Works
- Verify `id="faq"` exists on FAQ section
- Footer FAQ link should scroll to `/contact#faq`

---

## Phase 4: Bookstore Major Overhaul

### 4.1 Main Bookstore Page Updates
**File:** `src/pages/Bookstore.tsx`

| Element | Current | Revised |
|---------|---------|---------|
| Subtitle | "Digital chapbooks and creative works from the NFT Las Vegas™ Multiverse" | "Original digital publications and collectibles from the NFT Las Vegas™ Multiverse." |
| Info section text | "Our digital chapbooks blend quantum thinking, Web3 innovation, and cosmic consciousness into practical guides and imaginative narratives." | "Our collectibles blend quantum thinking, futuristic innovation, and cosmic consciousness into practical guidebooks built to support metaphysical narratives." |

### 4.2 Book Data Updates

**Book 1: How To Quantum Leap Your Business**
| Field | Current | Revised |
|-------|---------|---------|
| Description | "A practical guide to transforming your business using Web3 technologies and quantum thinking" | "A practical guide to transforming your business using quantum thinking" |
| Status | "Available" | "Available" |

**Book 2: Quantum Love in the Metaverse** - Keep current description

**Book 3: A Nobel Peace Prize for Dummies**
| Field | Current | Revised |
|-------|---------|---------|
| Description | "Reimagining global impact and recognition in the decentralized age" | "Rearchitecting global impact and recognition in the decentralized age of acceleration." |

**Book 4: Quantum Dating for Starseed Queens** - Keep current description

**Book 5: The Quincey Lee Obsession**
| Field | Current | Revised |
|-------|---------|---------|
| Description | "Stories from the NFT Las Vegas™ Multiverse and the journey of its creator" | "A story of love, entanglement and billionaire affairs." |

### 4.3 Create Individual Book Detail Pages
**New Files to Create:**

1. `src/pages/BookQuantumLeap.tsx`
2. `src/pages/BookQuantumLove.tsx`
3. `src/pages/BookNobelPeace.tsx`
4. `src/pages/BookStarseedQueens.tsx`
5. `src/pages/BookQuinceyObsession.tsx`

**Each book page will include:**
- Book cover image (full display)
- Book title
- "Quantum Certified Technology" badge
- Full book description (from docx)
- "What You'll Unlock" section (bullet points)
- "Who This Book Is For" section
- HubSpot checkout button linking to respective payment URL
- Back to bookstore link

### 4.4 Book Page Content (From Document)

**How To Quantum Leap Your Business:**
- Description: "How To Quantum Leap Your Business is not a traditional business book—it is a strategic initiation into the next era of digital infrastructure. Blending advanced technology, decentralized systems, and quantum-inspired thinking, this book introduces a new operating model for building businesses that don't just grow, but self-sustain..."
- What You'll Unlock: Scalable frameworks, AI/blockchain automation, community-first strategies, data-driven decision-making, tools for technological resilience
- Who It's For: Founders, creators building digital brands, Web3/AI innovators, visionaries designing ecosystems
- Checkout: `https://portal.nftlasvegas.io/hs/payments/CwKWqkq7yX?referrer=PAYMENT_LINK`

**Quantum Love in the Metaverse:**
- Description: "Explores love, identity, and desire through digital worlds, overlapping timelines, and infinite realities..."
- What You'll Unlock: New lens on love, exploration of avatars/identity, romantic world-building, creative inspiration
- Who It's For: Dreamers, creators, metaverse enthusiasts, readers curious about love beyond physical boundaries
- Checkout: `https://portal.nftlasvegas.io/hs/payments/hJJR2gDrTNRJhf?referrer=PAYMENT_LINK`

**A Nobel Peace Prize for Dummies:**
- Description: "Reframes peace, technology, and collective intelligence for a rapidly evolving world..."
- What You'll Unlock: Accessible quantum/AI explanations, peace/community frameworks, decentralized collaboration insight
- Who It's For: Changemakers, technologists with humanitarian lens, educators, futurists
- Checkout: `https://portal.nftlasvegas.io/hs/payments/HY7WrGZHzR?referrer=PAYMENT_LINK`

**Quantum Dating for Starseed Queens:**
- Description: "A bold, playful guide to love as alignment, empowerment, and creative self-expression..."
- What You'll Unlock: Energetic frameworks for attraction, identity fluidity, manifestation techniques
- Who It's For: Women exploring self-growth, spiritual technologists, metaphysical romance readers, starseeds
- Checkout: `https://portal.nftlasvegas.io/hs/payments/9nZhfpXf?referrer=PAYMENT_LINK`

**The Quincey Lee Obsession:**
- Description: "A provocative fictional romance where ambition, desire, power, and technology collide..."
- What You'll Unlock: High-energy romantic fiction, power/creativity exploration, tech-inspired storytelling
- Who It's For: Fans of provocative romantic fiction, modern tech narrative readers, dramatic storytelling lovers
- Checkout: `https://portal.nftlasvegas.io/hs/payments/2HF7TFv9DDNdCk?referrer=PAYMENT_LINK`

### 4.5 New Routes for Books
**File:** `src/App.tsx`
```tsx
<Route path="/bookstore/quantum-leap" element={<BookQuantumLeap />} />
<Route path="/bookstore/quantum-love" element={<BookQuantumLove />} />
<Route path="/bookstore/nobel-peace" element={<BookNobelPeace />} />
<Route path="/bookstore/starseed-queens" element={<BookStarseedQueens />} />
<Route path="/bookstore/quincey-obsession" element={<BookQuinceyObsession />} />
```

### 4.6 Fix Newsletter Button
- "Subscribe for Updates" currently links to `#newsletter` which doesn't exist
- Change to scroll to footer newsletter section OR create modal signup

---

## Phase 5: Case Studies Page Updates

**File:** `src/pages/CaseStudiesNFT.tsx`

### 5.1 Remove Amilo Halos Case Study
- Delete entire case study from `caseStudies` array

### 5.2 Update Enthralla Case Study
All content updates as specified in CSV including:
- New blurb, tags, challenge text, approach, results, testimonial, and services

### 5.3 Strategic Partnerships Section
- Rename to "Our Top-of-the-Line Partnerships"
- Keep only: X Ads, HubSpot, Salesforce (remove EaseNext)
- Move entire section to new `/partnerships` page

---

## Phase 6: Create Partnerships Page

**New File:** `src/pages/Partnerships.tsx`

- New route: `/partnerships`
- Content: "Our Top-of-the-Line Partnerships" section from Case Studies
- Partners: X Ads, HubSpot, Salesforce
- Partner images should fill entire box

**File:** `src/App.tsx`
```tsx
<Route path="/partnerships" element={<Partnerships />} />
```

---

## Phase 7: About Page → Multiverse Migration

### 7.1 Move Content from About to Multiverse
**Files:** `src/pages/AboutNFT.tsx` → `src/pages/Multiverse.tsx`

Move these sections to Multiverse:
- "Based on a True Story" section
- Mini-Profiles (NFT Las Vegas™ and Ares The AI)
- "The Living Metaverse" section
- "The 6-Phase Journey" section
- "Founder & Author" section (renamed from "Founders & Leadership")

### 7.2 Content Updates During Move
| Element | Revised |
|---------|---------|
| "The Pseudo Testament" button | Change to "Read 'How To Quantum Leap Your Business'" → link to `/bookstore/quantum-leap` |
| NFT Las Vegas™ mini-profile | Updated infrastructure description |
| Ares The AI mini-profile | Updated intelligence description |
| Quincey quote | Updated with quantum-informed analytics |
| Founders section | Remove Ares, show only Quincey |

### 7.3 Multiverse Page Updates
**File:** `src/pages/Multiverse.tsx`

| Element | Revised |
|---------|---------|
| Title subtitle | "The living story and brand mythology of NFT Las Vegas - where venture building, technology, and intelligent automation converge into one operating system for growth." |
| Meet NFT Las Vegas™ section | Place within "Read More About the Multiverse" dropdown |
| Remove paragraph | "With every leap across these layers..." |
| Remove images | All animated NFT Las Vegas images |

### 7.4 Delete About Page
After migration complete:
- Delete or redirect `/about` → `/multiverse`
- Remove from navigation

---

## Phase 8: AI Voice System Updates

**File:** `src/pages/AIVoice.tsx`

### 8.1 Add to Main Navigation
**File:** `src/components/Header.tsx`
Add AI Voice System to navItems array

### 8.2 Create AI Voice Request Form
Add new form section with:
- Title: "Request a Call from Our AI Voice Assistant"
- Connect form submission to CRM (HubSpot)

---

## Phase 9: Distribution Page Updates

**File:** `src/pages/DistributionNFT.tsx`

| Change | Action |
|--------|--------|
| Hero badge | "Distribution & Partnerships" → "Market Distribution" |
| Stats section | **REMOVE** entire "50M+ Distribution Partners..." section |
| "Explore Distribution Partnerships" button | Link to `/partnerships` |
| "Featured Media Partners" heading | Remove text only, keep partner images |
| "Additional Partners" section | **REMOVE** entirely |

---

## Phase 10: Other Page Updates

### 10.1 Funding Enablement
**File:** `src/pages/FundingEnablement.tsx`
- Remove all stats ($50M+, 150+ ventures, etc.)
- Change "Angel Funding" to "Business Loans" with updated descriptions

### 10.2 Tech Development
**File:** `src/pages/TechDevelopmentNFT.tsx`
- Update AI/ML Layer → Data Layer → Blockchain Layer diagram
- Remove "Processing & Analysis" text

### 10.3 Platform Launch
**File:** `src/pages/PlatformLaunch.tsx`
- Complete the "Launch Strategy Overview" section

### 10.4 Takeover
**File:** `src/pages/Takeover.tsx`
- Remove hero background image
- Even out "Why Sponsor?" boxes (add 6th or center 5th)

### 10.5 Services Page
**File:** `src/pages/ServicesNFT.tsx`
- Move "Outcome Driven Solutions" from Solutions page
- Add "AI Voice Systems" service card
- Add "AI & Blockchain Integration" to outcome solutions
- Fix all "Explore Service" links to correct pages

### 10.6 Solutions Page
- Delete after content moved to Services OR redirect `/solutions` → `/services`

---

## Phase 11: Mobile Layout Fixes

### 11.1 Header Mobile Menu Gradient
**File:** `src/components/Header.tsx`
- Fix gradient behind "NFT Las Vegas™ Distribution" text
- Make background solid color matching menu

### 11.2 Scroll-to-Top Button
**File:** `src/components/ScrollToTop.tsx`
- Fix button positioning (currently extends off screen)
- Adjust `right` and `bottom` values
- Add safe-area-inset support for mobile devices

---

## Phase 12: Routing & Sitemap Updates

### 12.1 New Routes
**File:** `src/App.tsx`
```tsx
// New pages
<Route path="/partnerships" element={<Partnerships />} />
<Route path="/bookstore/quantum-leap" element={<BookQuantumLeap />} />
<Route path="/bookstore/quantum-love" element={<BookQuantumLove />} />
<Route path="/bookstore/nobel-peace" element={<BookNobelPeace />} />
<Route path="/bookstore/starseed-queens" element={<BookStarseedQueens />} />
<Route path="/bookstore/quincey-obsession" element={<BookQuinceyObsession />} />
```

### 12.2 Update Navigation
**File:** `src/components/Header.tsx`
- Remove "About" and "Solutions" from navItems
- Ensure "AI Voice System" is accessible

### 12.3 Update Sitemap
**File:** `scripts/generate-sitemap.js`
Add routes:
- `/partnerships`
- `/bookstore/quantum-leap`
- `/bookstore/quantum-love`
- `/bookstore/nobel-peace`
- `/bookstore/starseed-queens`
- `/bookstore/quincey-obsession`

Remove routes:
- `/about`
- `/solutions`

---

## Implementation Order

1. **Footer updates** - Foundation for all pages
2. **Mobile fixes** - Critical UX issues
3. **Contact page** - Replace Calendly with HubSpot, remove sections
4. **Homepage** - Hero text + graph updates
5. **Bookstore pages** - Create 5 book detail pages with HubSpot checkout
6. **Case Studies** - Remove Amilo, update Enthralla, extract partnerships
7. **Create Partnerships page**
8. **Multiverse page** - Receive content from About
9. **Delete/redirect About page**
10. **Services/Solutions merge**
11. **Distribution page updates**
12. **AI Voice page updates**
13. **Remaining page updates** (Funding, Tech, Platform, Takeover)
14. **Navigation and routing updates**
15. **Sitemap regeneration**

---

## Technical Requirements

### Dependencies
- No new npm packages required
- HubSpot embed uses external script

### Assets to Copy
- Book cover images from zip file → `public/books/` or `src/assets/books/`

### Testing Checklist
- [ ] All footer links functional
- [ ] HubSpot scheduler loads correctly
- [ ] Mobile menu gradient fixed
- [ ] Scroll-to-top button visible on all devices
- [ ] All 5 book pages render with correct content
- [ ] HubSpot checkout links work
- [ ] FAQ anchor scroll works
- [ ] Partnerships page accessible
- [ ] About redirects to Multiverse
- [ ] Solutions redirects to Services
