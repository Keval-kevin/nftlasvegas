

## Plan: Embed HubSpot Newsletter Form in Footer

### Overview
Replace the current non-functional newsletter input in the footer with an embedded HubSpot form widget that connects directly to your HubSpot CRM for subscriber management.

---

### What You'll Need from HubSpot
Before implementation, you'll need to create a newsletter form in HubSpot and get the embed code:

1. Go to **HubSpot → Marketing → Forms**
2. Create a new form (or use existing) with an email field
3. Click **Embed** and select **Embed code**
4. Copy the Portal ID and Form ID from the embed script

---

### Implementation Steps

**Step 1: Create HubSpot Newsletter Form Component**

Create a new reusable component `src/components/HubSpotNewsletterForm.tsx` that:
- Loads the HubSpot forms script dynamically
- Renders the form in a target container
- Handles dark theme styling for the footer context

**Step 2: Update Footer Component**

Modify `src/components/Footer.tsx` (lines 70-83):
- Remove the current `Input` and `Button` elements
- Import and render the new `HubSpotNewsletterForm` component
- Keep the "Stay Updated ♥️" heading

---

### Technical Details

**New Component Structure:**
```
src/components/HubSpotNewsletterForm.tsx
├── useEffect for script loading
├── HubSpot form target div
└── Dark-themed CSS overrides
```

**Footer Changes:**
```text
Before:
┌──────────────────────────────────┐
│ Stay Updated ♥️                  │
│ ┌────────────────────┐ ┌──────┐  │
│ │ Enter your email   │ │  →   │  │
│ └────────────────────┘ └──────┘  │
└──────────────────────────────────┘

After:
┌──────────────────────────────────┐
│ Stay Updated ♥️                  │
│ ┌────────────────────────────┐   │
│ │   HubSpot Embedded Form    │   │
│ │   (email + submit button)  │   │
│ └────────────────────────────┘   │
└──────────────────────────────────┘
```

**HubSpot Script Integration:**
```tsx
// Dynamically load HubSpot forms script
useEffect(() => {
  const script = document.createElement('script');
  script.src = '//js.hsforms.net/forms/embed/v2.js';
  script.async = true;
  script.onload = () => {
    window.hbspt.forms.create({
      portalId: "YOUR_PORTAL_ID",
      formId: "YOUR_FORM_ID",
      target: "#hubspot-newsletter-form"
    });
  };
  document.body.appendChild(script);
}, []);
```

---

### Styling Considerations

The form will need custom CSS to match the dark footer:
- Override HubSpot default white backgrounds
- Style input fields to match existing `bg-gray-800` theme
- Style submit button to match `bg-blue-600` brand color

---

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/HubSpotNewsletterForm.tsx` | Create new component |
| `src/components/Footer.tsx` | Replace lines 73-82 with embedded form |

---

### Configuration Required

You will need to provide:
- **HubSpot Portal ID** (e.g., `12345678`)
- **HubSpot Newsletter Form ID** (e.g., `abc123-def456-...`)

I can add placeholder values that you can replace, or you can provide the IDs now.

