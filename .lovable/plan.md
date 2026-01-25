

## Plan: Add HubSpot Integration to AI Voice Request Form

### Overview
Configure the AI Voice Request Form with the provided HubSpot credentials so that form submissions are captured in HubSpot CRM and can trigger the AI call functionality.

---

### Changes

**File:** `src/pages/AIVoice.tsx`

**Line ~121:** Update the `AIVoiceRequestForm` component to include HubSpot credentials

| Current | Updated |
|---------|---------|
| `<AIVoiceRequestForm />` | `<AIVoiceRequestForm portalId="243834591" formId="7ba1eb89-c774-4837-b0f7-b1424eb2f36f" />` |

---

### Technical Details

The `AIVoiceRequestForm` component already has built-in HubSpot support (as shown in the component code). It:
1. Loads the HubSpot Forms embed script dynamically
2. Creates the form with the provided Portal ID and Form ID
3. Falls back to a styled form if HubSpot hasn't loaded yet

```tsx
// Line ~121 - Before
<AIVoiceRequestForm />

// Line ~121 - After
<AIVoiceRequestForm 
  portalId="243834591" 
  formId="7ba1eb89-c774-4837-b0f7-b1424eb2f36f" 
/>
```

---

### How It Works

1. **Form Loading**: When the page loads, the component will fetch the HubSpot Forms script
2. **Form Display**: HubSpot's embedded form will replace the fallback form
3. **Submission**: When users submit, data goes directly to HubSpot
4. **AI Call Trigger**: Your HubSpot workflow can then trigger the AI voice call based on form submission

---

### Files Modified

| File | Change |
|------|--------|
| `src/pages/AIVoice.tsx` | Add `portalId` and `formId` props to `AIVoiceRequestForm` |

---

### Result
- Form submissions will be captured in HubSpot CRM
- HubSpot workflows can trigger AI calls when form is submitted
- Custom styling will be applied to match the site's dark theme

