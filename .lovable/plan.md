

## Plan: Enhance Ecosystem Chart Area Fill

### Problem
The area fill under the growth curve fades to transparent at the bottom, leaving visual empty space beneath the chart. This creates a less polished look, especially noticeable on mobile.

---

### Solution
Modify the area gradient to maintain a visible fill all the way to the bottom of the chart, creating a more complete and visually appealing design.

---

### Changes

**File:** `src/components/Flywheel/EcosystemChart.tsx`

**Lines 144-147** - Update the area gradient definition:

| Current | Updated |
|---------|---------|
| Fades from 30% to 0% opacity | Fades from 40% to 15% opacity (keeps visible fill at bottom) |
| Stops at 95% | Extends to 100% |

```tsx
// Before
<linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
</linearGradient>

// After
<linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
  <stop offset="50%" stopColor="#6366f1" stopOpacity={0.25} />
  <stop offset="100%" stopColor="#0f172a" stopOpacity={0.2} />
</linearGradient>
```

This creates:
- Stronger purple fill at the top (40% opacity)
- Smooth transition through indigo in the middle (25% opacity)
- Subtle dark base that blends with the chart background (20% opacity)

---

### Visual Result

| Aspect | Before | After |
|--------|--------|-------|
| Top of curve | Light purple (30%) | Rich purple (40%) |
| Middle | Fading | Smooth indigo transition |
| Bottom | Transparent/empty | Subtle dark fill (20%) |
| Overall effect | Floating curve | Grounded, complete area |

---

### Technical Summary

| File | Change |
|------|--------|
| `src/components/Flywheel/EcosystemChart.tsx` | Update `areaGradient` linearGradient to maintain visibility to bottom with 3-stop gradient |

---

### Result
- Area fill extends fully to the bottom on both mobile and desktop
- Creates a more polished, complete visual appearance
- The gradient smoothly transitions from purple to dark, blending with the chart card background
- No more "floating" empty space under the curve

