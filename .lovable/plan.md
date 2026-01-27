

## Plan: Make Ecosystem Chart Steeper and Fill More Space

### Current Issues

The chart has significant empty space because:

1. **Low starting point**: First data point (Onboarding) starts at index 5 - very close to the bottom
2. **Gentle curve**: The growth progression is relatively linear (5 → 22 → 42 → 65 → 85 → 100)
3. **Large margins**: Chart margins eat into usable space
4. **Y-axis domain**: Fixed at 0-100, but data only uses 5-100

---

### Solution: Multi-Pronged Approach

#### 1. Adjust Data Points for Steeper Curve

Make the growth curve more exponential/dramatic:

| Phase | Current Index | New Index | Effect |
|-------|---------------|-----------|--------|
| Onboarding | 5 | 8 | Slightly higher start |
| Funding | 22 | 18 | Lower dip creates contrast |
| Tech | 42 | 35 | Steeper climb ahead |
| Manufacturing | 65 | 58 | Build tension |
| Launch | 85 | 82 | Sharp acceleration |
| Distribution | 100 | 100 | Peak unchanged |

This creates a more dramatic "hockey stick" growth curve that feels steeper in the final phases.

#### 2. Reduce Chart Margins

Current margins waste space:

| Setting | Current (Desktop) | New (Desktop) | Current (Mobile) | New (Mobile) |
|---------|-------------------|---------------|------------------|--------------|
| Top | 35px | 15px | 25px | 10px |
| Right | 40px | 25px | 20px | 10px |
| Left | 20px | 10px | 0px | -5px |
| Bottom | 60px | 45px | 50px | 40px |

#### 3. Adjust Y-Axis to Better Fill Space

- Remove the 0 tick mark and start visual display slightly higher
- Keep domain at [0, 100] for accuracy but adjust tick display
- Use ticks: [10, 30, 50, 70, 90, 100] instead of [0, 25, 50, 75, 100]

#### 4. Increase Chart Height

| Device | Current | New |
|--------|---------|-----|
| Mobile | 300px | 320px |
| Desktop | 400px | 420px |

---

### File to Modify

**`src/components/Flywheel/EcosystemChart.tsx`**

#### Change 1: Update PHASES_DATA (Lines 7-50)

```tsx
const PHASES_DATA = [
  { 
    phase: "Onboarding", 
    index: 8,  // Was 5
    benefit: "Clarity, access, and a 90-day roadmap.",
    route: "/onboarding",
    milestone: "Journey Starts"
  },
  { 
    phase: "Funding", 
    index: 18,  // Was 22
    benefit: "Investor narrative, data room, capital strategy.",
    route: "/funding-enablement",
    milestone: "Funding Ready"
  },
  { 
    phase: "Tech", 
    index: 35,  // Was 42
    benefit: "AI, Web3, and enterprise integrations designed for scale.",
    route: "/tech-development",
    milestone: "MVP Assembled"
  },
  { 
    phase: "Manufacturing", 
    index: 58,  // Was 65
    benefit: "Prototype → certify → mass produce with reliable partners.",
    route: "/product-manufacturing",
    milestone: "Production Ready"
  },
  { 
    phase: "Launch", 
    index: 82,  // Was 85
    benefit: "Positioning, content engine, marketing ops, analytics.",
    route: "/platform-launch",
    milestone: "Public Launch"
  },
  { 
    phase: "Distribution", 
    index: 100,  // Unchanged
    benefit: "Channels, marketplaces, enablement kits, & SLAs.",
    route: "/distribution",
    milestone: "Scale"
  }
];
```

#### Change 2: Reduce Margins and Increase Height (Lines 128-136)

```tsx
<ResponsiveContainer width="100%" height={isMobile ? 320 : 420}>
  <ComposedChart 
    data={PHASES_DATA}
    margin={{ 
      top: isMobile ? 10 : 15, 
      right: isMobile ? 10 : 25, 
      left: isMobile ? -5 : 10, 
      bottom: isMobile ? 40 : 45 
    }}
  >
```

#### Change 3: Adjust Y-Axis Ticks (Lines 164-176)

```tsx
<YAxis 
  domain={[0, 105]}  // Slight buffer at top
  ticks={[20, 40, 60, 80, 100]}  // Skip 0, start at 20
  stroke="rgba(255,255,255,0.3)" 
  tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: isMobile ? 9 : 12 }}
  width={isMobile ? 25 : 45}  // Tighter width
  label={!isMobile ? { 
    value: 'Growth Potential', 
    angle: -90, 
    position: 'insideLeft', 
    fill: 'rgba(255,255,255,0.6)',
    style: { textAnchor: 'middle' },
    offset: 5
  } : undefined}
/>
```

#### Change 4: Adjust X-Axis Height (Lines 153-162)

```tsx
<XAxis 
  dataKey="phase" 
  stroke="rgba(255,255,255,0.3)" 
  tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: isMobile ? 10 : 12 }}
  angle={isMobile ? -30 : -15}  // Less angle = more compact
  textAnchor="end"
  height={isMobile ? 55 : 60}  // Reduced from 70/80
  onClick={(data: any) => data && handlePhaseClick(data.value)}
  style={{ cursor: 'pointer' }}
/>
```

---

### Visual Comparison

```text
BEFORE:                          AFTER:
+------------------------+       +------------------------+
|                        |       |                    ●   |
|                        |       |                  ●     |
|                   ●    |       |               ●        |
|               ●        |       |            ●           |
|          ●             |       |        ●               |
|      ●                 |       |    ●                   |
|  ●                     |       |●                       |
+------------------------+       +------------------------+
  More empty space above           Curve fills more of box
  Gentle, linear growth            Steeper "hockey stick"
```

---

### Summary of Changes

| File | Lines | Change |
|------|-------|--------|
| `src/components/Flywheel/EcosystemChart.tsx` | 7-50 | Adjust index values for steeper curve |
| `src/components/Flywheel/EcosystemChart.tsx` | 128-136 | Reduce margins, increase height |
| `src/components/Flywheel/EcosystemChart.tsx` | 153-162 | Reduce X-axis height and angle |
| `src/components/Flywheel/EcosystemChart.tsx` | 164-176 | Adjust Y-axis ticks and width |

---

### Result

- Chart curve appears steeper and more dramatic
- Less empty space around the graph
- Data fills more of the container box
- Works consistently on both mobile and desktop
- Maintains all interactivity (tooltips, clickable dots)

