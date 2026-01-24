

## Plan: Add Partnerships Section to Case Studies Page

### Overview
Add a new section below the "Ready to Build Your Success Story?" CTA that promotes the Partnerships page, providing another navigation path to `/partnerships` beyond the footer link.

---

### Design

The new section will follow the existing styling patterns and sit between the current Mini CTA (line 135-144) and the Footer:

```text
+--------------------------------------------------+
|   [Case Studies Grid - existing]                 |
+--------------------------------------------------+
|   Ready to Build Your Success Story? - existing  |
|   [Download Onboarding Package]                  |
+--------------------------------------------------+
|                                                  |
|   🤝 Our Partner Network                         |
|   Learn More About Our Top-of-the-Line           |
|   Partnerships                                   |
|                                                  |
|   We collaborate with industry-leading           |
|   platforms to deliver exceptional results.      |
|                                                  |
|        [ Explore Our Partners → ]                |
|                                                  |
+--------------------------------------------------+
|   [Footer]                                       |
+--------------------------------------------------+
```

---

### Changes

**File:** `src/pages/CaseStudiesNFT.tsx`

| Location | Change |
|----------|--------|
| Line 4 | Add `Users` icon import from lucide-react |
| Line 5 | Add `Link` import from react-router-dom |
| After line 144 | Insert new Partnerships section |

**New Section Code:**
```tsx
{/* Partnerships Section */}
<div className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg border border-border/50 mt-10">
  <Users className="w-10 h-10 mx-auto mb-4 text-primary" />
  <h3 className="text-2xl font-semibold mb-2">
    Our Partner Network
  </h3>
  <p className="text-lg text-muted-foreground mb-6">
    Learn more about our Top-of-the-Line Partnerships with industry leaders like X Ads, HubSpot, and Salesforce.
  </p>
  <Link to="/partnerships">
    <Button variant="outline" size="lg">
      Explore Our Partners
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  </Link>
</div>
```

---

### Styling Details

| Aspect | Value |
|--------|-------|
| Background | Subtle gradient: `from-muted/20 to-muted/40` to differentiate from the CTA above |
| Border | `border border-border/50` for subtle definition |
| Icon | `Users` from lucide-react, sized at 10x10 |
| Button | `variant="outline"` to distinguish from the primary Download CTA above |
| Spacing | `mt-10` margin-top to separate from the previous section |

---

### Summary

- Adds a visually distinct section promoting the Partnerships page
- Uses the `Users` icon to represent partnerships
- Mentions the key partners (X Ads, HubSpot, Salesforce) to entice clicks
- Links directly to `/partnerships` using React Router's `Link` component
- Maintains consistent styling with the rest of the page

