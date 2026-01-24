

## Plan: Remove White Space and Display Full Size Logo

### Overview
Remove the white background container around the case study logo and display it at full size without any constraining wrapper.

---

### Current State
The logo is wrapped in a white container with:
- `bg-white` background
- `p-3` padding
- Fixed `h-[100px]` height
- This creates the white space you see around the logo

---

### Changes

**File: `src/pages/CaseStudiesNFT.tsx`**

**Lines 86-95** - Replace the white container with a simple centered logo display:

| Before | After |
|--------|-------|
| White box with `bg-white rounded-lg p-3 h-[100px]` | No wrapper, just logo with `mb-4` spacing |
| Logo constrained to `h-16 sm:h-20 max-w-[85%]` | Full size logo with only `max-h-32 w-auto` for reasonable bounds |

**New markup:**
```tsx
<img 
  src={caseStudy.logo} 
  alt={`${caseStudy.title} logo`}
  className="mb-4 w-auto max-h-32 object-contain"
  loading="lazy"
  decoding="async"
  onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
/>
```

---

### Result
- No white background around the logo
- Logo displays at its natural size (up to a max height of 128px for reasonable scaling)
- Clean look that fits with the dark card background

