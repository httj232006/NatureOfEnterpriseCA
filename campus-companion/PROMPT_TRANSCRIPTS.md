# Campus Companion — AI Prompt Transcripts Log
## Component 2 Evidence | Nature of Enterprise Computing CA3

> All prompts were created and iterated using the structured template format specified in the CA3 brief.
> Tool used: Claude (Anthropic) — claude-sonnet model
> This log covers the full development lifecycle of the Campus Companion application.

---

## PROMPT LOG ENTRY 001

| Field | Detail |
|---|---|
| **Date/Time** | 2026-04-20 · 10:15 |
| **Tool used** | Claude (Anthropic) |
| **Goal** | Plan the overall Next.js project structure and decide on tech stack |

**Prompt:**
```
ROLE: You are a senior Next.js engineer and software architect.
CONTEXT: We are building a Campus Companion web app for first-year students at TU Dublin.
CONSTRAINTS:
- Next.js 14 (App Router), TypeScript
- Supabase for database
- Tailwind CSS for styling
- Accessibility: WCAG AA principles, keyboard-first
- Data: fictional only (no real personal data)
TASK: Plan the project folder structure, list all pages needed, and suggest the database schema for a campus companion app with: timetable, events, societies, canteen menu, campus map, lost & found, helpdesk tickets, notifications, and an ML recommender.
OUTPUT FORMAT: (1) folder structure, (2) list of routes with descriptions, (3) Supabase table names and key fields.
SELF-CHECK: After the plan, flag any potential accessibility or GDPR concerns I should address.
```

**Model/output summary:** Claude produced a full Next.js App Router folder structure with `src/app` layout, suggested 10 routes, and designed 8 Supabase tables including a `student_interactions` table for the ML feature. Flagged that fictional data must be clearly documented and that all form inputs need associated labels.

**What I changed next:** Adopted the folder structure as proposed. Added a `timetable_slots` table that wasn't in the initial output. Decided to implement the ML feature in a separate `src/lib/recommender.ts` utility rather than mixing it into a page component.

---

## PROMPT LOG ENTRY 002

| Field | Detail |
|---|---|
| **Date/Time** | 2026-04-20 · 11:40 |
| **Tool used** | Claude (Anthropic) |
| **Goal** | Generate the Supabase SQL seed file with all fictional data |

**Prompt:**
```
ROLE: You are a database engineer and data designer.
CONTEXT: Building a Campus Companion app. All data must be completely fictional — no real names, real email addresses, or real personal data.
CONSTRAINTS:
- PostgreSQL (Supabase)
- Tables: timetable_slots, events, societies, menu_items, locations, lost_found_items, helpdesk_tickets, notifications, student_interactions
- All names, lecturers, event details must be fictional
- student_interactions table must have 20 rows with 8 interest dimension columns (tech, arts, sport, career, sustainability, social, science, volunteering) — these are used as training data for a k-NN recommender
TASK: Write a complete SQL file with CREATE TABLE and INSERT statements for all 9 tables. Include realistic but fictional data for a Dublin university campus.
OUTPUT FORMAT: Single .sql file, ready to paste into Supabase SQL editor.
SELF-CHECK: Check that all foreign key references are correct and that no real personal data is included.
```

**Model/output summary:** Generated a full SQL seed file with all 9 tables, 20 student interaction rows with varied interest vectors, and realistic fictional campus data (fictional lecturer names like "Dr. Byrne", "Dr. Walsh"). Correctly set up the foreign key between `student_interactions.event_id` and `events.id`.

**What I changed next:** Removed apostrophes from lecturer names (e.g. "O'Sullivan" → "O Sullivan") to avoid SQL syntax errors. Added `DEFAULT CURRENT_DATE` to the `lost_found_items.date_reported` column.

---

## PROMPT LOG ENTRY 003

| Field | Detail |
|---|---|
| **Date/Time** | 2026-04-21 · 09:00 |
| **Tool used** | Claude (Anthropic) |
| **Goal** | Build the root layout with sidebar navigation and header |

**Prompt:**
```
ROLE: You are a senior Next.js engineer and accessibility reviewer.
CONTEXT: Building a Campus Companion web app for TU Dublin students. This is the root layout — it wraps every page.
CONSTRAINTS:
- Next.js 14 App Router, TypeScript, Tailwind CSS
- Sidebar navigation with sections: Main, Campus, Tools
- Sticky header with brand name and notification/settings links
- Sidebar must show active state based on current URL (use usePathname)
- WCAG AA: nav landmark, aria-current="page" on active link, skip-to-content link, visible focus rings
- Data: fictional only
TASK: Create (1) src/app/layout.tsx — root layout with header and sidebar shell, (2) src/components/Sidebar.tsx — client component with nav links and active state, (3) src/components/Header.tsx — top bar with brand and action links.
OUTPUT FORMAT: Provide complete file contents for all 3 files.
SELF-CHECK: After code, check: does the sidebar announce the current page to screen readers? Are all links keyboard-focusable? Is the skip link functional?
```

**Model/output summary:** Produced all 3 files. Sidebar uses `usePathname()` from `next/navigation` to detect active route and applies `aria-current="page"`. Skip link is positioned off-screen and revealed on `:focus`. Header uses semantic `<header role="banner">`.

**What I changed next:** Moved the notification badge count to just a text label ("Notifications") — the dynamic unread count is handled within the Notifications page itself to avoid requiring a global state provider. Simplified the hamburger menu since the brief doesn't specifically require mobile nav.

---

## PROMPT LOG ENTRY 004

| Field | Detail |
|---|---|
| **Date/Time** | 2026-04-21 · 14:30 |
| **Tool used** | Claude (Anthropic) |
| **Goal** | Build the ML Event Recommender — k-NN with cosine similarity |

**Prompt:**
```
ROLE: You are a machine learning engineer and Next.js developer.
CONTEXT: We need a classical ML recommender feature for a campus events app. It must use the fictional student interaction data from our database.
CONSTRAINTS:
- Use k-Nearest Neighbours (k-NN) with cosine similarity — no external ML libraries (must run client-side in the browser)
- Feature vector: 8 dimensions [tech, arts, sport, career, sustainability, social, science, volunteering]
- Each event has a hand-crafted feature vector based on its description
- User selects interests from checkboxes → builds a user vector → cosine similarity against all event vectors → top 3 results
- TypeScript, must be in src/lib/recommender.ts
- Include JSDoc comments explaining the model choice and evaluation method
TASK: (1) Write src/lib/recommender.ts with cosine similarity function, event feature vectors, and recommend() function, (2) Write src/app/recommender/page.tsx — the UI with interest selection chips, a "Get Recommendations" button, and result cards showing match percentage and a score bar.
OUTPUT FORMAT: Complete file contents for both files.
SELF-CHECK: Does the cosine function handle zero vectors gracefully? Are ARIA progressbar attributes on the score bars? Is the results section an aria-live region?
```

**Model/output summary:** Produced the recommender utility and page. Cosine function returns 0 when either vector magnitude is 0. Score bars use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`. Results section has `aria-live="polite"` and `aria-atomic="true"`. Included leave-one-out evaluation estimate.

**What I changed next:** Iterated on the event feature vectors — the initial output had the Careers Fair with high tech score (0.8) which was too high for a generic careers event. Adjusted to 0.6 tech, 0.9 career. Added the `InterestVector` type alias as a named tuple for type safety.

---

## PROMPT LOG ENTRY 005

| Field | Detail |
|---|---|
| **Date/Time** | 2026-04-22 · 10:00 |
| **Tool used** | Claude (Anthropic) |
| **Goal** | Build the Helpdesk tickets page with form submission |

**Prompt:**
```
ROLE: You are a senior Next.js engineer and accessibility reviewer.
CONTEXT: Campus Companion app. Building the helpdesk page where students can view existing tickets and submit new ones.
CONSTRAINTS:
- Next.js 14 App Router, TypeScript, Tailwind CSS
- Client component ("use client") — form submission with local state (not Supabase, to keep it simple)
- Show existing tickets (3 fictional ones: Open, In Progress, Resolved) with colour-coded status badges
- Form: subject (required), category (select), details (textarea)
- On submit: add ticket to top of list, show success message, clear form
- WCAG: all inputs have labels, required fields indicated, success message is aria role="alert"
TASK: Write src/app/helpdesk/page.tsx.
OUTPUT FORMAT: Complete file contents.
SELF-CHECK: Is the success message announced to screen readers? Are required fields marked? Does the form prevent empty subject submission?
```

**Model/output summary:** Produced the helpdesk page with state management using `useState`. Success message uses `role="alert"` which triggers immediate announcement. Subject field has `required` attribute and the form checks `form.subject.trim()` before adding to state.

**What I changed next:** Changed the ticket ID generation from a random number to a sequential counter based on array length to ensure consistent IDs. Added `noValidate` to the form element since we're doing custom validation.

---

## PROMPT LOG ENTRY 006

| Field | Detail |
|---|---|
| **Date/Time** | 2026-04-23 · 15:00 |
| **Tool used** | Claude (Anthropic) |
| **Goal** | Build the Accessibility Settings page with working toggles |

**Prompt:**
```
ROLE: You are a Next.js developer and WCAG accessibility specialist.
CONTEXT: Campus Companion app. Building an accessibility settings page where users can toggle dark mode, high contrast, reduce motion, and change font size. These settings must apply immediately to the document.
CONSTRAINTS:
- Next.js 14 App Router, TypeScript, Tailwind CSS
- Dark mode: toggle the "dark" class on <html>
- High contrast: set data-contrast="high" on <html>
- Reduce motion: set data-reduced-motion="true" on <body>
- Font size: change document.documentElement.style.fontSize, min 12px max 24px
- All toggles use custom CSS toggle switches (not native checkboxes but styled to be accessible)
- On mount, read prefers-reduced-motion system preference and pre-check that toggle
- Include a WCAG compliance notes section listing what's been implemented
TASK: Write src/app/accessibility/page.tsx.
OUTPUT FORMAT: Complete file contents.
SELF-CHECK: Do toggles work without JavaScript? Is font size change announced to screen readers via aria-live? Are all toggle labels associated correctly?
```

**Model/output summary:** Page uses `useEffect` to read `prefers-reduced-motion`. Font size display uses `aria-live="polite"` and `aria-atomic="true"`. Each toggle has `aria-label` on the `<label>` element. WCAG compliance notes section lists 8 implemented features.

**What I changed next:** The toggle inputs need `id` attributes for programmatic association — updated each option to pass its `id` to the `<input>`. Also noted that dark mode without `localStorage` persistence means settings reset on page reload — acceptable for this demo scope.

---

## PROMPT LOG ENTRY 007 — SELF-CHECK / REVIEW PASS

| Field | Detail |
|---|---|
| **Date/Time** | 2026-04-24 · 11:00 |
| **Tool used** | Claude (Anthropic) |
| **Goal** | Full accessibility and code quality review of all pages |

**Prompt:**
```
ROLE: You are a WCAG 2.1 accessibility auditor and senior code reviewer.
CONTEXT: I have built a Campus Companion Next.js app. Please review the following pages for accessibility issues and code quality: Dashboard, Timetable, Events, Lost & Found, Helpdesk, ML Recommender.
CONSTRAINTS:
- WCAG 2.1 Level AA target
- Next.js 14 TypeScript
TASK: For each page, identify: (1) any missing ARIA attributes, (2) keyboard navigation issues, (3) colour contrast concerns, (4) missing form labels, (5) any other accessibility issues.
OUTPUT FORMAT: Bulleted list per page. Then a priority-ordered fix list.
SELF-CHECK: Are you checking both interactive elements and static content? Are you considering screen reader users as well as keyboard-only users?
```

**Model/output summary:** Identified 6 issues: (1) Events filter chips missing `role="group"` wrapper — fixed. (2) Lost & Found tab buttons need `aria-selected` — fixed. (3) Timetable slot articles need `aria-label` — fixed. (4) Map SVG needs `role="img"` with `aria-label` — fixed. (5) Score bars need `aria-valuenow` attributes — fixed. (6) Notification items need `role="article"` — fixed.

**What I changed next:** Applied all 6 fixes across the relevant pages. Re-ran the review prompt to confirm issues were resolved — only minor suggestions remained (adding `aria-describedby` for complex form fields, which was implemented).
