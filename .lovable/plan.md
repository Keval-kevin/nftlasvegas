

## Plan: Fix Scroll-to-Top Button and Update Bookstore Cover Path

### Overview
Two issues need to be addressed:
1. The scroll-to-top button is extending off the screen on mobile devices
2. The Bookstore listing page still shows the old book cover for "How To Quantum Leap Your Business"

---

### Changes

#### Issue 1: Fix Scroll-to-Top Button on Mobile

**File:** `src/components/ScrollToTop.tsx`

The button needs explicit width and positioning constraints to prevent it from stretching across the screen on mobile devices.

| Current | Problem |
|---------|---------|
| `fixed right-4` positioning | Missing explicit width control |
| Uses `size="icon"` | May not be constraining properly on all mobile browsers |

**Solution:** Add explicit width (`w-12 h-12`) and ensure proper fixed positioning with consistent sizing:

```tsx
<Button
  onClick={scrollToTop}
  size="icon"
  className={cn(
    "fixed right-4 z-40 rounded-full shadow-lg transition-all duration-300",
    "w-12 h-12 min-w-12 max-w-12",  // Explicit size constraints
    showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
  )}
  style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
  aria-label="Scroll to top"
>
```

---

#### Issue 2: Update Bookstore Cover Image Path

**File:** `src/pages/Bookstore.tsx`

The Bookstore listing page still references the old cover image path on line 16.

| Current | Updated |
|---------|---------|
| `coverImage: "/books/quantum-leap-cover.jpg"` | `coverImage: "/books/quantum-leap-cover-new.jpg"` |

---

### Files Modified

| File | Change |
|------|--------|
| `src/components/ScrollToTop.tsx` | Add explicit width constraints to prevent button stretching |
| `src/pages/Bookstore.tsx` | Update cover image path to use new file |

---

### Result
- Scroll-to-top button will display as a properly sized circular button on mobile
- Bookstore listing will show the new book cover matching the detail page

