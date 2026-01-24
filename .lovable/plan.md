

## Plan: Add AI Voice Request Form with HubSpot CRM Integration

### Overview
Create a dedicated form section on the `/ai-voice` page titled "Request a Call from Our AI Voice Assistant" that captures leads directly into HubSpot CRM. The form will follow the established patterns used in `HubSpotNewsletterForm.tsx` and `StarterPackDownload.tsx`.

---

### Component Architecture

**New Component:** `src/components/AIVoiceRequestForm.tsx`

This reusable form component will:
- Accept HubSpot portal ID and form ID as props
- Load the HubSpot forms embed script dynamically
- Render an embedded HubSpot form when configured
- Fall back to a custom React form with Zod validation when HubSpot IDs are not set
- Submit to HubSpot Forms API as a backup
- Include dark theme CSS overrides matching the site design
- Display success toast on submission

**Form Fields:**
| Field | Type | Required |
|-------|------|----------|
| First Name | text | Yes |
| Last Name | text | Yes |
| Email | email | Yes |
| Phone | tel | Yes |
| Company | text | No |
| Preferred Plan | dropdown | No |
| Message | textarea | No |

---

### Page Integration

**File:** `src/pages/AIVoice.tsx`

Add a new section between the FAQ and Final CTA sections:

```text
+----------------------------------------------+
|   Request a Call from Our AI Voice Assistant |
|   ------------------------------------------ |
|   "Experience our AI voice technology        |
|    firsthand. Submit your details and our    |
|    AI assistant will call you back."         |
|                                              |
|   +--------------------------------------+   |
|   |  [HubSpot Embedded Form]             |   |
|   |  - First Name, Last Name             |   |
|   |  - Email, Phone                      |   |
|   |  - Company (optional)                |   |
|   |  - Preferred Plan dropdown           |   |
|   |  - Message (optional)                |   |
|   |  - [Request AI Call] button          |   |
|   +--------------------------------------+   |
+----------------------------------------------+
```

---

### Technical Implementation

#### Step 1: Create AIVoiceRequestForm Component
**File:** `src/components/AIVoiceRequestForm.tsx`

- Import HubSpot script loading pattern from `HubSpotNewsletterForm.tsx`
- Define Zod schema for validation
- Implement fallback form with styled inputs
- Include Phone icon and AI-themed styling
- Add CSS overrides for HubSpot embed to match dark theme

#### Step 2: Update AIVoice Page
**File:** `src/pages/AIVoice.tsx`

- Import the new `AIVoiceRequestForm` component
- Add new section with gradient background (matching existing sections)
- Position between FAQ section and Final CTA section (around line 274)
- Include heading, description text, and form component

---

### Code Changes Summary

| File | Action | Lines |
|------|--------|-------|
| `src/components/AIVoiceRequestForm.tsx` | **Create** | ~180 lines |
| `src/pages/AIVoice.tsx` | **Modify** | Insert ~25 lines after line 273 |

---

### Visual Design

The form section will feature:
- Phone icon badge at the top
- Gradient background (`bg-muted/30`) consistent with other sections
- Card container with border for the form
- Primary-colored submit button with hover effects
- Responsive grid layout for form fields
- Success state with confirmation message

---

### HubSpot Integration Notes

1. The form will work with placeholder IDs initially (showing the fallback form)
2. When actual HubSpot Portal ID and Form ID are configured, it switches to embedded form
3. Form submissions are automatically synced to HubSpot CRM contacts
4. GA4 event tracking will be added for form submissions

