

## Plan: Reduce Spacing Between Back Link and Book Cover on Mobile

### Problem
On the book detail pages (e.g., `/bookstore/quantum-leap`), there's excessive vertical space between the "Back to Bookstore" navigation link and the book cover image on mobile devices.

---

### Current Spacing Structure

| Element | Current Class | Pixels |
|---------|---------------|--------|
| Back to Bookstore container | `py-6` | 24px top + 24px bottom = 48px total |
| Hero section | `py-12` | 48px top + 48px bottom |
| **Combined gap** | - | ~72px between link and book |

---

### Solution

Adjust spacing to be tighter on mobile while preserving desktop layout:

| Element | Current | Updated |
|---------|---------|---------|
| Back to Bookstore container | `py-6` | `py-3 sm:py-6` (12px on mobile, 24px on larger) |
| Hero section | `py-12` | `py-6 sm:py-12` (24px on mobile, 48px on larger) |

This reduces the mobile gap from ~72px to ~36px - cutting it in half for a much tighter, cleaner look.

---

### File to Modify

**`src/components/BookDetailPage.tsx`**

#### Change 1: Line 38
```tsx
// Before
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

// After
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
```

#### Change 2: Line 49
```tsx
// Before
<section className="py-12 px-4 sm:px-6 lg:px-8">

// After
<section className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
```

---

### Visual Result

| Screen Size | Before | After |
|-------------|--------|-------|
| Mobile (<640px) | ~72px gap | ~36px gap |
| Tablet/Desktop (>=640px) | ~96px gap | ~96px gap (unchanged) |

---

### Technical Summary

| File | Lines | Change |
|------|-------|--------|
| `src/components/BookDetailPage.tsx` | 38 | Add responsive padding `py-3 sm:py-6` |
| `src/components/BookDetailPage.tsx` | 49 | Add responsive padding `py-6 sm:py-12` |

---

### Result
- Tighter, more polished mobile layout
- Book cover appears closer to the navigation without feeling cramped
- Desktop spacing remains unchanged for proper visual hierarchy
- Consistent with responsive design strategy across the site

