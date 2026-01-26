

## Plan: Remove Cookie Consent Popup

### Current Implementation

There are two cookie consent systems currently active:

| System | Location | Description |
|--------|----------|-------------|
| Custom React component | `src/App.tsx` | The `CookieConsent` component that creates a styled banner |
| Cookiebot external script | `index.html` | Third-party cookie management service |

---

### Changes to Make

#### 1. Remove CookieConsent from App.tsx

**File:** `src/App.tsx`

- **Line 42**: Remove the import statement
- **Line 53**: Remove the `<CookieConsent />` component

#### 2. Remove Cookiebot Script from index.html

**File:** `index.html`

- **Lines 15-16**: Remove the Cookiebot script and its comment

---

### Files Modified

| File | Action |
|------|--------|
| `src/App.tsx` | Remove import and component usage |
| `index.html` | Remove Cookiebot third-party script |

---

### Optional Cleanup

The following files will remain but won't be used. They can be kept for future use or deleted:

| File | Status |
|------|--------|
| `src/components/CookieConsent.tsx` | Unused (can keep or delete) |
| `src/pages/CookiePolicy.tsx` | Still accessible at `/cookie-policy` route |

---

### Result

- No cookie consent popup will appear on any page
- Site loads faster without the Cookiebot external script
- Cookie Policy page remains available if you want to keep it for legal/compliance purposes
- The custom CookieConsent component file stays in the codebase in case you need it later

