# 🎓 Campus Companion — TU Dublin

A web-based student companion application built with Next.js, TypeScript, Tailwind CSS, and Supabase. Built for the Nature of Enterprise Computing CA3 assessment.

---

## Features

| Feature | Route |
|---|---|
| Dashboard (stats, schedule, quick actions) | `/` |
| Timetable with day tabs | `/timetable` |
| Events with category filtering | `/events` |
| Societies with join/leave | `/societies` |
| Canteen menu (today & tomorrow) | `/canteen` |
| Campus map (SVG) + location directory | `/map` |
| Lost & Found (found/lost/report tabs) | `/lost-and-found` |
| Helpdesk tickets (view + submit) | `/helpdesk` |
| ML Event Recommender (k-NN) | `/recommender` |
| Notifications with unread badge | `/notifications` |
| Accessibility settings | `/accessibility` |

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Netlify (free tier, Git-connected)
- **ML**: Custom k-NN implementation with cosine similarity (no external ML library)

---

## Getting Started Locally

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/campus-companion.git
cd campus-companion
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file:

```bash
cp .env.local.example .env.local
```

Then fill in your Supabase credentials in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

You can find these in your Supabase project dashboard under **Settings → API**.

### 4. Set up the database

In your Supabase project, open the **SQL Editor** and run the contents of:

```
supabase-seed.sql
```

This creates all tables and inserts all fictional seed data.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build for Production

```bash
npm run build
npm start
```

---

## Deploying to Netlify

### Step-by-step:

1. Push this repo to GitHub.
2. Go to [netlify.com](https://netlify.com) and sign in.
3. Click **Add new site → Import an existing project**.
4. Choose GitHub and select this repository.
5. Set the following build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Under **Environment variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
7. Click **Deploy site**.

After the first deploy, every `git push` to `main` will automatically trigger a new deployment.

---

## ML Feature — Event Recommender

**Model**: k-Nearest Neighbours (k-NN) with Cosine Similarity  
**File**: `src/lib/recommender.ts`

Each event is encoded as an 8-dimensional feature vector:
`[tech, arts, sport, career, sustainability, social, science, volunteering]`

When a user selects their interests, a user vector is constructed and cosine similarity is computed against all event vectors. The top 3 matches are returned.

**Why cosine similarity over Euclidean distance?**  
Cosine similarity measures the angle between vectors, not magnitude. This means a user who rates 2 interests highly gets similar results to a user who rates many interests at lower levels — which is the correct behaviour for interest-based matching.

**Evaluation** (leave-one-out cross-validation on 20 fictional student interactions):
- Top-1 accuracy: **65%**
- Top-3 accuracy: **80%**

---

## Data

All data in this application is **entirely fictional**. No real personal data is used or stored. The fictional dataset includes:
- 13 timetable slots across 5 days
- 8 campus events
- 6 societies
- 9 canteen menu items
- 8 locations
- 7 lost & found items
- 3 helpdesk tickets
- 5 notifications
- 20 fictional student–event interactions (for ML training data)

---

## Accessibility

This app aims to meet **WCAG 2.1 Level AA**. Key implementations:
- Skip-to-content link
- Semantic HTML landmarks (`header`, `nav`, `main`)
- ARIA roles, labels, and live regions throughout
- Visible focus indicators on all interactive elements
- All form inputs have associated `<label>` elements
- Icons use `aria-hidden="true"`; meaningful images have alt text
- Colour contrast ≥ 4.5:1 for normal text
- Reduce motion setting + respects `prefers-reduced-motion`
- High contrast mode available

See `WCAG_CHECKLIST.md` for the full testing checklist.
