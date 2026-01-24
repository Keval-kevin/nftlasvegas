

## Plan: Enable Direct Link Scrolling to FAQ Section

### Problem Identified
The FAQ section on the Contact page already has the correct `id="faq"` anchor, and the footer already links to `/contact#faq`. However, when clicking this link from another page, the page scrolls to the top instead of the FAQ section.

**Root Cause**: The `ScrollToTop` component in `src/components/ScrollToTop.tsx` scrolls to top on every route change, overriding the browser's built-in hash navigation.

---

### Implementation Steps

**Step 1: Update ScrollToTop Component**

Modify `src/components/ScrollToTop.tsx` to respect URL hash anchors:

- Check if the URL contains a hash (e.g., `#faq`)
- If hash exists: scroll to that element instead of the top
- If no hash: scroll to top as usual

**Step 2: Add Hash Scroll Effect to Contact Page** 

Add a `useEffect` hook in `src/pages/Contact.tsx` that:
- Reads the URL hash on page load
- Scrolls smoothly to the FAQ section if `#faq` is present
- Runs after a brief delay to ensure the page is fully rendered

---

### Technical Details

```text
ScrollToTop.tsx changes:
┌─────────────────────────────────────┐
│ useEffect(() => {                   │
│   const hash = window.location.hash │
│   if (hash) {                       │
│     setTimeout(() => {              │
│       element?.scrollIntoView()     │
│     }, 100)                         │
│   } else {                          │
│     window.scrollTo({ top: 0 })     │
│   }                                 │
│ }, [pathname])                      │
└─────────────────────────────────────┘
```

---

### Result

After implementation:
- Clicking "FAQ" link in footer (`/contact#faq`) will navigate to Contact page and auto-scroll to FAQ section
- Regular navigation without hash will continue scrolling to top
- Smooth scrolling animation will be preserved

