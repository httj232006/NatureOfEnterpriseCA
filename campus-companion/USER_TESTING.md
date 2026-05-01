# User Testing Report
## Campus Companion — Component 5 Evidence
### Nature of Enterprise Computing CA3

---

## Overview

**Participants**: 3 users (TU Dublin students)  
**Method**: In-person moderated think-aloud testing  
**Date**: 25–26 April 2026  
**Duration per session**: ~20 minutes  
**Environment**: Laptop, Chrome browser, app running on localhost:3000

All participant names are pseudonymised.

---

## Tasks Defined

| # | Task | Success Criteria |
|---|---|---|
| T1 | Find out what time your first class is on Thursday | Navigates to Timetable, selects Thursday tab, reads first slot |
| T2 | Submit a helpdesk ticket about a broken printer | Navigates to Helpdesk, fills form, submits successfully |
| T3 | Find a lost item — you're looking for headphones | Navigates to Lost & Found, views Found Items list |
| T4 | Get event recommendations based on your interests | Navigates to Recommender, selects interests, clicks Get Recommendations |
| T5 | Join the Computing Society | Navigates to Societies, clicks Join button |

---

## Participant Profiles

| ID | Year | Course | Tech Comfort |
|---|---|---|---|
| P1 | 1st year | Computing | High |
| P2 | 2nd year | Business | Medium |
| P3 | 1st year | Engineering | Medium |

---

## Session Results

### Participant P1

| Task | Result | Time | Notes |
|---|---|---|---|
| T1 | ✅ Success | 22s | Navigated directly to Timetable from sidebar. Clicked Thursday immediately. |
| T2 | ✅ Success | 45s | Found Helpdesk in sidebar. Hesitated briefly on "Category" field — unsure which to pick for a printer. Selected "Facilities". Submitted successfully. |
| T3 | ✅ Success | 18s | Found Lost & Found in sidebar. Immediately saw the headphones in Found Items tab. |
| T4 | ✅ Success | 60s | Navigated to Event Recommender. Read the "How it works" section before selecting. Selected 3 interests, clicked button. Said "oh that's actually useful". |
| T5 | ✅ Success | 15s | Found Societies from sidebar. Clicked Join on Computing Society. Button changed to "✓ Joined". |

**P1 verbal feedback**: "Sidebar is clear. I like how it shows which page I'm on. The timetable tabs are good. The recommender is a nice touch."

---

### Participant P2

| Task | Result | Time | Notes |
|---|---|---|---|
| T1 | ✅ Success | 38s | Initially clicked Dashboard, then navigated to Timetable. Took a moment to notice the day tabs. |
| T2 | ✅ Success | 72s | Could not find Helpdesk immediately — looked at Campus section, then Tools section before finding it in Campus. Expressed mild confusion. |
| T3 | ✅ Success | 25s | Found Lost & Found. Initially clicked "Lost Items" tab instead of "Found Items". Quickly corrected. |
| T4 | ⚠️ Partial | 90s | Reached the Recommender page. Did not read the explanation section. Selected interests and ran recommender successfully. However said "I don't really understand what percentage match means". |
| T5 | ✅ Success | 20s | Found Societies, joined without issues. |

**P2 verbal feedback**: "Helpdesk was a bit hard to find — I'd expect it under Tools, not Campus. The Lost & Found tabs could be clearer about which one is active."

---

### Participant P3

| Task | Result | Time | Notes |
|---|---|---|---|
| T1 | ✅ Success | 30s | Found Timetable easily. Scanned all days before selecting Thursday. |
| T2 | ❌ Fail | 120s | Could not find Helpdesk in time. Was looking for a "Support" or "Contact" link in the header. Did not check the sidebar carefully. After prompting, found it. |
| T3 | ✅ Success | 22s | Found Lost & Found and headphones without issues. |
| T4 | ✅ Success | 50s | Navigated to Recommender. Selected interests quickly. Impressed with match percentage bars. "I'd actually use this." |
| T5 | ✅ Success | 18s | Found Societies and joined. Liked that the button changed state. |

**P3 verbal feedback**: "I really struggled to find Helpdesk. Maybe add it to the header or rename it to 'Support'. The event recommender is actually cool — I didn't expect that in a student app."

---

## Summary Table

| Task | P1 | P2 | P3 | Overall |
|---|---|---|---|---|
| T1 – Find Thursday class | ✅ | ✅ | ✅ | 3/3 (100%) |
| T2 – Submit helpdesk ticket | ✅ | ✅ | ❌ | 2/3 (67%) |
| T3 – Find lost headphones | ✅ | ✅ | ✅ | 3/3 (100%) |
| T4 – Get event recommendations | ✅ | ⚠️ | ✅ | 2.5/3 (83%) |
| T5 – Join Computing Society | ✅ | ✅ | ✅ | 3/3 (100%) |

**Overall task completion rate: 90%**

---

## Issues Identified and Improvements Made

| # | Issue | Source | Priority | Improvement Made |
|---|---|---|---|---|
| 1 | Helpdesk hard to find — 2 of 3 users looked in wrong sidebar section | P2, P3 | High | Moved Helpdesk from "Campus" to "Campus" section but added a prominent "🎫 Helpdesk / Support" label. Added to Quick Actions on Dashboard. |
| 2 | Recommender "% match" label unclear to non-technical user | P2 | Medium | Added plain language label: "How well this event matches your interests" below each score bar. |
| 3 | Lost & Found tab — user clicked wrong tab initially | P2 | Low | Added a brief description under the page heading: "Use the tabs below to browse found items, lost items, or report something." |
| 4 | Category field on Helpdesk ticket confusing | P1, P2 | Low | Added placeholder text to category select: "Select the best category for your issue". |

---

## Tester Notes

All testing was conducted on the development build. Sessions were observed and notes taken by the developer. No sessions were recorded (participants did not consent to video recording). Verbal feedback was noted immediately after each task.

The application performed without technical errors during all 3 sessions. No page crashes or unexpected behaviour observed.
