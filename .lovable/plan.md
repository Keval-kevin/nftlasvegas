

## Plan: Fix Scroll-to-Top Button Cut-off on Mobile

### Current Issue
The "Scroll to Top" button is being cut off on mobile devices. The problem is twofold:

1. **Incorrect Tailwind class**: The component uses `pb-safe-area-inset-bottom` but the Tailwind config defines the spacing as `safe-bottom` (so the correct class would be `pb-safe-bottom`)
2. **Wrong approach**: Using `pb-` (padding-bottom) on a fixed-position button doesn't push the button up - it just adds internal padding. We need to adjust the **positioning** itself, not the padding.

### Solution
Change the button's `bottom` positioning to use CSS `calc()` to add the safe area inset on top of the base 24px (bottom-6) offset. This ensures the button is always visible above the home indicator on iPhones and other devices with bottom safe areas.

---

### Changes

**File: `src/components/ScrollToTop.tsx`**

| Location | Change |
|----------|--------|
| Lines 61-72 | Update button positioning to use inline style with safe area calculation |

**Before:**
```tsx
<Button
  onClick={scrollToTop}
  size="icon"
  className={cn(
    "fixed bottom-6 right-4 z-40 rounded-full shadow-lg transition-all duration-300",
    "pb-safe-area-inset-bottom",
    showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
  )}
  aria-label="Scroll to top"
>
  <ArrowUp className="h-5 w-5" />
</Button>
```

**After:**
```tsx
<Button
  onClick={scrollToTop}
  size="icon"
  className={cn(
    "fixed right-4 z-40 rounded-full shadow-lg transition-all duration-300",
    showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
  )}
  style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
  aria-label="Scroll to top"
>
  <ArrowUp className="h-5 w-5" />
</Button>
```

---

### Technical Details

| Aspect | Before | After |
|--------|--------|-------|
| Bottom position | Fixed `bottom-6` (24px) | Dynamic: `calc(1.5rem + safe-area)` |
| Safe area handling | Broken `pb-safe-area-inset-bottom` class | Proper CSS `env()` function with fallback |
| Device support | Cut off on notched devices | Respects all device safe areas |

---

### How It Works

- `env(safe-area-inset-bottom, 0px)` returns the device's bottom safe area (e.g., ~34px on iPhone X+) or 0px if not supported
- `calc(1.5rem + ...)` adds the base 24px offset plus the safe area
- This pushes the button up above the home indicator bar on modern phones

---

### Result
- Button will be fully visible on all mobile devices
- Properly accounts for iPhone notch/home indicator area
- Falls back gracefully on devices without safe areas
- No visual change on desktop

