

## Plan: Fix Salesforce CRM Tab Buttons for Mobile Display

### Problem
The two tab buttons ("Sales Cloud Quick Implementations" and "Starter & Pro Suite Services") are overlapping and text is cut off on mobile devices because:
- The tabs are forced into a 2-column grid layout at all screen sizes
- Text has `whitespace-nowrap` which prevents wrapping
- Long button labels don't fit in small mobile widths

---

### Solution
Stack the tabs vertically on mobile (single column), then switch to horizontal layout on larger screens. Also use shorter labels on mobile for better readability.

---

### Changes

**File:** `src/components/SalesforceCRM.tsx`

**Lines 37-41** - Update TabsList and TabsTrigger layout:

| Current | Updated |
|---------|---------|
| `grid-cols-2` always | `grid-cols-1 sm:grid-cols-2` (stack on mobile) |
| Fixed height `h-10` | `h-auto` with padding for flexible height |
| Single-line text | Allow text wrapping on mobile |

```tsx
// Before
<TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
  <TabsTrigger value="sales-cloud" className="text-base">Sales Cloud Quick Implementations</TabsTrigger>
  <TabsTrigger value="starter-pro" className="text-base">Starter & Pro Suite Services</TabsTrigger>
</TabsList>

// After
<TabsList className="grid w-full max-w-2xl mx-auto grid-cols-1 sm:grid-cols-2 h-auto p-2 gap-2 mb-12">
  <TabsTrigger 
    value="sales-cloud" 
    className="text-sm sm:text-base py-3 px-4 whitespace-normal text-center"
  >
    Sales Cloud Quick Implementations
  </TabsTrigger>
  <TabsTrigger 
    value="starter-pro" 
    className="text-sm sm:text-base py-3 px-4 whitespace-normal text-center"
  >
    Starter & Pro Suite Services
  </TabsTrigger>
</TabsList>
```

---

### Key Improvements

| Aspect | Mobile (< 640px) | Desktop (>= 640px) |
|--------|------------------|-------------------|
| Layout | Stacked vertically (1 column) | Side by side (2 columns) |
| Text Size | Smaller (`text-sm`) | Normal (`text-base`) |
| Text Wrap | Allowed (`whitespace-normal`) | Allowed |
| Height | Auto (flexible) | Auto (flexible) |
| Padding | Generous (`py-3 px-4`) | Generous (`py-3 px-4`) |
| Gap | 8px between buttons | 8px between buttons |

---

### Technical Summary

| File | Change |
|------|--------|
| `src/components/SalesforceCRM.tsx` | Update TabsList grid layout from always 2-cols to responsive 1-col/2-cols, add proper padding, allow text wrapping |

---

### Result
- Tab buttons will stack vertically on mobile for full visibility
- Text will be fully readable without truncation
- Touch targets will be larger and easier to tap
- Smooth transition to horizontal layout on tablet/desktop

