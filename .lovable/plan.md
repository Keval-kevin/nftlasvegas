

# Fix Ecosystem Chart - "Scale" Milestone Visibility

## Problem Identified

Looking at the uploaded screenshot and the code, the "Scale" milestone label (at Distribution phase with index=100) is being cut off because:

1. **Top margin is too small**: The label sits at y=100 (maximum value) with `position: 'top'`, but the chart's top margin is only 10px on mobile and 20px on desktop - not enough space for the label
2. **Right margin is too small**: The Distribution phase is the last data point, and the right margin (10px mobile, 30px desktop) clips the label
3. **Overflow hidden**: The chart container has `overflow-hidden` which clips content outside bounds

## Solution

### Fix 1: Increase Chart Margins
Increase top and right margins to provide adequate space for milestone labels:
- **Top margin**: 10px → 40px (mobile), 20px → 50px (desktop)
- **Right margin**: 10px → 30px (mobile), 30px → 50px (desktop)

### Fix 2: Adjust Label Positioning for Edge Cases
For the "Scale" label specifically (last data point at maximum y-value):
- Position it differently to avoid clipping
- Use conditional positioning based on the data point's location

### Fix 3: Remove Overflow Hidden
Change `overflow-hidden` to `overflow-visible` on the chart container to allow labels to extend beyond the chart boundary if needed.

### Fix 4: Adjust Chart Height to Compensate
Slightly increase chart height to accommodate the larger margins while maintaining visual proportions.

---

## Technical Implementation

### File: `src/components/Flywheel/EcosystemChart.tsx`

**Change 1 - Chart Container (line 118)**
```tsx
// Before
<div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl overflow-hidden">

// After
<div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl overflow-visible">
```

**Change 2 - Chart Margins (lines 147-152)**
```tsx
// Before
margin={{ 
  top: isMobile ? 10 : 20, 
  right: isMobile ? 10 : 30, 
  left: isMobile ? 0 : 20, 
  bottom: isMobile ? 50 : 60 
}}

// After
margin={{ 
  top: isMobile ? 45 : 55, 
  right: isMobile ? 35 : 50, 
  left: isMobile ? 0 : 20, 
  bottom: isMobile ? 50 : 60 
}}
```

**Change 3 - Increase Chart Height (line 144)**
```tsx
// Before
<ResponsiveContainer width="100%" height={isMobile ? 280 : 400}>

// After
<ResponsiveContainer width="100%" height={isMobile ? 320 : 420}>
```

**Change 4 - Smart Label Positioning (lines 240-261)**
Update the ReferenceDot labels to position "Scale" (and any labels at index=100) differently:
```tsx
{showMilestones && PHASES_DATA.map((phase, idx) => {
  const milestoneText = isMobile 
    ? phase.milestone.split(' - ')[0]
    : phase.milestone;
  
  // For the last data point (Scale) or any at max Y, position below
  const isAtTop = phase.index >= 90;
  const isLastPoint = idx === PHASES_DATA.length - 1;
  
  return (
    <ReferenceDot
      key={phase.phase}
      x={phase.phase}
      y={phase.index}
      r={0}
      label={{
        value: milestoneText,
        position: isAtTop ? 'insideTop' : 'top',
        fill: '#a78bfa',
        fontSize: isMobile ? 9 : 11,
        offset: isAtTop ? (isMobile ? -25 : -30) : (isMobile ? 12 : 18),
        fontWeight: 500
      }}
    />
  );
})}
```

---

## Expected Results

After these changes:
- "Scale" label will be clearly visible on both mobile and desktop
- All milestone labels will have proper spacing and not be clipped
- Chart proportions remain visually balanced
- Touch interactions remain functional
- Labels are more readable with slightly larger font size and better weight

