
## Plan: Improve Desktop Layout for "Read More About the Multiverse" Button

### Current Issue
The "Read More About the Multiverse" collapsible button appears small and left-aligned on desktop, with a large empty space next to it when the dropdown is closed. While it looks good on mobile (where it fills the width), on desktop it leaves visual gaps.

### Solution
Make the button wider and centered on desktop while maintaining the mobile-friendly behavior:

1. **Center the button wrapper** - Add `flex justify-center` to center the trigger on desktop
2. **Set responsive width** - Use `w-full md:w-2/3 lg:w-1/2` to make the button take up more space proportionally on larger screens while staying centered
3. **Increase padding** - Add larger padding (`py-8`) to make the button more prominent

---

### Changes

**File: `src/pages/Multiverse.tsx`**

| Location | Change |
|----------|--------|
| Lines 64-69 | Update the `CollapsibleTrigger` wrapper and button styling |

**Before:**
```tsx
<CollapsibleTrigger asChild>
  <Button variant="outline" className="w-full py-6 text-lg rounded-xl mb-6">
    <span>Read More About the Multiverse</span>
    <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
  </Button>
</CollapsibleTrigger>
```

**After:**
```tsx
<div className="flex justify-center mb-6">
  <CollapsibleTrigger asChild>
    <Button variant="outline" className="w-full md:w-2/3 lg:max-w-xl py-8 text-lg md:text-xl rounded-xl border-2 hover:border-primary/50 transition-all">
      <span>Read More About the Multiverse</span>
      <ChevronDown className={`ml-3 h-6 w-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
    </Button>
  </CollapsibleTrigger>
</div>
```

---

### Key Improvements

| Aspect | Before | After |
|--------|--------|-------|
| Desktop Alignment | Left-aligned | Centered |
| Desktop Width | Full container width | 2/3 width with max-w-xl cap |
| Vertical Padding | py-6 | py-8 (taller, more prominent) |
| Text Size | text-lg | text-lg on mobile, text-xl on desktop |
| Border | Default | border-2 with hover glow effect |
| Icon | h-5 w-5 | h-6 w-6 (slightly larger) |

---

### Result
- Button will be centered and more prominent on desktop screens
- Proportionally sized to fill the visual space better
- Enhanced hover effect to make it more interactive
- Maintains full-width behavior on mobile for easy tapping
