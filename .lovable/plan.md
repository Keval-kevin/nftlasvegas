

## Plan: Make Ecosystem Chart Graph Taller

### Overview
Increase the height of the Ecosystem Chart to provide more visual impact and better spacing for the data points.

---

### Changes

**File:** `src/components/Flywheel/EcosystemChart.tsx`

**Line 128:** Update the ResponsiveContainer height values

| Current | Updated |
|---------|---------|
| `height={isMobile ? 220 : 320}` | `height={isMobile ? 300 : 400}` |

This increases:
- **Mobile:** 220px → 300px (+80px, ~36% taller)
- **Desktop:** 320px → 400px (+80px, ~25% taller)

---

### Technical Details

The change is on a single line:

```tsx
// Line 128 - Before
<ResponsiveContainer width="100%" height={isMobile ? 220 : 320}>

// Line 128 - After
<ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
```

---

### Result
- The chart will have more vertical breathing room
- Data points will be more spread out vertically
- The growth curve will appear more prominent and visually impactful
- Labels and axes will have more space

