# Writing Section Completeness — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the GVG Writing section so it represents Elliott's full body of work — adding 5 missing press items, 2 missing articles, and a minor intro copy tweak.

**Architecture:** All changes are data-only edits to `src/components/Writing.tsx`. No new files, no new routes, no structural changes. The four-tier layout (Featured / Selected Writing / In the Press / Academic Work) stays exactly as-is.

**Tech Stack:** React/TypeScript, existing Writing.tsx component and Writing.module.css

---

### Task 1: Add missing press items to the press grid

**Files:**
- Modify: `src/components/Writing.tsx` — `press` array (lines ~140–195)

The `press` array is a list of objects with shape `{ outlet, title, description, href }`. Add the following five items. Insert them in a sensible position within the existing list (suggested: after SXSWEdu, before Patch — roughly chronological and by relevance).

- [ ] **Step 1: Open `src/components/Writing.tsx` and locate the `press` array**

It begins around line 140 with `const press = [`.

- [ ] **Step 2: Add the 5 missing press items**

Insert after the SXSWEdu entry (after line ~154) and before the Patch entry:

```typescript
  {
    outlet: 'TEDxCambridge',
    title: 'Improving the Emotional Experience of Kids with Autism',
    description: 'How wearable emotion sensors can help children with autism and ADHD communicate their emotional experience during therapy.',
    href: 'https://www.ted.com/search?q=elliott+hedman+tedxcambridge',
  },
  {
    outlet: 'Popular Science',
    title: 'Can We Make Ourselves More Empathetic?',
    description: 'How biometric sensors and design research are changing what it means to truly understand another person\'s experience.',
    href: 'https://www.popsci.com/story/science/popsci-archive-empathy-machine/',
  },
  {
    outlet: 'Scholastic',
    title: 'Motivating Children to Show Up to Reading',
    description: 'What design research reveals about getting reluctant readers genuinely engaged — not just compliant.',
    href: 'https://edublog.scholastic.com/post/motivating-children-show-reading',
  },
  {
    outlet: 'Wired Japan',
    title: 'The Science of Emotion',
    description: 'How measuring physiological arousal in real environments is redefining empathy in product design.',
    href: 'http://wired.jp/special/2015/beyond-solution/03.html',
  },
  {
    outlet: 'Metropolis Magazine',
    title: 'Select 10: Up-and-Coming Designers',
    description: 'mPath named among the top ten up-and-coming design practices by Metropolis Magazine.',
    href: 'http://www.metropolismag.com/october-2013/the-select-ten/?cparticle=6&siarticle=5#artanc',
  },
```

**Note on TEDxCambridge URL:** The direct video URL is not publicly findable. The href above links to a TED search. Elliott should replace this with the actual URL if he has it.

- [ ] **Step 3: Verify no TypeScript errors**

```bash
cd /Users/mathandlove/Documents/Projects/good-vibes-garage && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/Writing.tsx
git commit -m "feat: add missing press items to writing section (TEDx, Popular Science, Scholastic, Wired Japan, Metropolis)"
```

---

### Task 2: Add missing articles to selected writing

**Files:**
- Modify: `src/components/Writing.tsx` — `selected` array (lines ~13–138)

The `selected` array uses shape `{ title, description, type, date, href, internal? }`. Items with `internal: true` route via React Router `<Link>`; items without route via `<a target="_blank">`.

Both missing articles are external links (Medium / WonderStories), so no `internal` flag needed.

- [ ] **Step 1: Verify the URLs for the two missing articles**

Before adding, spot-check:
- "Redesigning Digital Reading": https://www.wonderstories.app/research/redesignremote
- "The 5 Reasons Remote Classrooms Fail": search Medium for `@elliotthedman remote classrooms fail` — the URL found on BuildEmpathy was mislinked. Find the correct URL before adding.

If the correct URL for "5 Reasons" can't be found, skip it and add only "Redesigning Digital Reading."

- [ ] **Step 2: Add verified articles to the `selected` array**

Insert after the "Why Personalized Learning Keeps Failing" entry (2019) to keep rough chronological order. The two new items are both 2020:

```typescript
  {
    title: 'Redesigning Digital Reading',
    description:
      'What happens when you apply design research to the digital reading experience — and why most apps get the fundamentals wrong.',
    type: 'Essay',
    date: '2020',
    href: 'https://www.wonderstories.app/research/redesignremote',
  },
  {
    title: 'The 5 Reasons Remote Classrooms Fail',
    description:
      'Remote learning exposed every weak point in how schools think about engagement. Five structural reasons why the shift online failed students.',
    type: 'Essay',
    date: '2020',
    href: 'REPLACE_WITH_CORRECT_URL',
  },
```

**Important:** Replace `REPLACE_WITH_CORRECT_URL` with the verified Medium URL before committing. If not found, omit this item entirely.

- [ ] **Step 3: Verify no TypeScript errors**

```bash
cd /Users/mathandlove/Documents/Projects/good-vibes-garage && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/Writing.tsx
git commit -m "feat: add Redesigning Digital Reading and Remote Classrooms to selected writing"
```

---

### Task 3: Update intro copy

**Files:**
- Modify: `src/components/Writing.tsx` — intro paragraph (around line ~277)

- [ ] **Step 1: Locate the intro paragraph**

Find this line in Writing.tsx (around line 277):

```tsx
          <p className={styles.intro}>
            Essays, articles, and research on learning, AI, and what happens when you put real tools in front of real people.
          </p>
```

- [ ] **Step 2: Update the copy**

Replace with:

```tsx
          <p className={styles.intro}>
            A decade of essays, articles, and research on learning, AI, and what happens when you put real tools in front of real people.
          </p>
```

- [ ] **Step 3: Verify no TypeScript errors**

```bash
cd /Users/mathandlove/Documents/Projects/good-vibes-garage && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Start the dev server and visually verify**

```bash
cd /Users/mathandlove/Documents/Projects/good-vibes-garage && npm run dev
```

Open http://localhost:5173 (or whatever port Vite uses), scroll to the Writing section. Verify:
- Intro reads "A decade of essays..."
- Press grid shows the 5 new items with correct outlet names
- Selected writing shows the new articles
- No layout breaks, no wrapping issues on the press cards
- Academic section still dimmed and unchanged

- [ ] **Step 5: Commit**

```bash
git add src/components/Writing.tsx
git commit -m "copy: signal ten-year arc in Writing section intro"
```
