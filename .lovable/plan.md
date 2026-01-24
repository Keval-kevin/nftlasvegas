
# Fix Ecosystem Chart Issues

## Issues to Fix

### 1. Remove Milestone Labels Above Graph Points
**Location:** Lines 240-261
**Issue:** The labels "Journey Starts", "Funding Ready", "MVP Assembled", "Production Ready", "Public Launch", "Scale" appear above each data point
**Fix:** Remove the entire `ReferenceDot` mapping that renders milestone labels, or always set `showMilestones` to false and hide the toggle button

### 2. Fix "Scale" Label Visibility (If Keeping Milestones)
Since we're removing milestones, this becomes irrelevant. But if the toggle remains:
- Change `overflow-hidden` to `overflow-visible` on line 118
- Increase top margin from 10/20 to 45/55 on line 148
- Increase right margin from 10/30 to 35/50 on line 149

### 3. Make Graph Look Steeper
**Location:** Lines 144, 180-181
**Fix:** 
- Reduce chart height from 280/400 to 220/320 (compresses vertical space)
- Keep Y-axis domain [0, 100] with same ticks
- This makes the visual slope appear steeper

### 4. Fix "Learn More" Link in Tooltip
**Location:** Lines 68-92 (CustomTooltip component)
**Issue:** The tooltip disappears when user moves mouse to click the link
**Fix:** Convert the "Learn more →" text into a proper clickable button that triggers navigation before the tooltip disappears, OR make the entire dot clickable (which already works) and change tooltip text to say "Click to learn more"

---

## Technical Changes

### File: `src/components/Flywheel/EcosystemChart.tsx`

**Change 1: Remove Milestones Toggle and Labels**
- Remove the "Milestones" toggle button (lines 131-140)
- Remove the `showMilestones` state variable (line 63)
- Remove the entire `ReferenceDot` mapping block (lines 240-261)
- Update tooltip to remove milestone display (lines 82-86)

**Change 2: Reduce Chart Height for Steeper Appearance**
```tsx
// Line 144 - Change heights
<ResponsiveContainer width="100%" height={isMobile ? 220 : 320}>
```

**Change 3: Fix Tooltip Link Issue**
Replace the Link component in tooltip with instructional text since dots are already clickable:
```tsx
// Lines 87-89 in CustomTooltip
<p className="text-xs text-secondary mt-2">
  Click dot to learn more →
</p>
```

**Change 4: Allow Overflow for Edge Cases**
```tsx
// Line 118 - Change overflow-hidden to overflow-visible
<div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl overflow-visible">
```

**Change 5: Adjust Margins for Better Spacing**
```tsx
// Lines 147-152
margin={{ 
  top: isMobile ? 25 : 35, 
  right: isMobile ? 20 : 40, 
  left: isMobile ? 0 : 20, 
  bottom: isMobile ? 50 : 60 
}}
```

---

## Summary of Changes

| Issue | Solution | Lines Affected |
|-------|----------|----------------|
| Remove milestone labels | Delete ReferenceDot block and toggle | 63, 82-86, 131-140, 240-261 |
| Steeper graph appearance | Reduce chart height | 144 |
| "Learn more" not clickable | Change to instructional text | 87-89 |
| Overflow clipping | Change to overflow-visible | 118 |
| Better spacing | Adjust margins | 147-152 |

---

## Expected Result
- Clean graph with no floating labels above data points
- Steeper visual curve due to reduced height
- Clear indication that dots are clickable
- No content clipped at edges
- Professional, uncluttered chart appearance
