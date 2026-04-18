# Questions & Uncertainties — New Article Pages

This file tracks things I wasn't sure about while building the 8 new article pages. Review before publishing.

---

## Dates

All dates on the new pages are approximate based on scrape context. Please verify or correct:

| Page | URL | Date I Used | Confident? |
|------|-----|-------------|------------|
| Khanmigo | `/writing/khanmigo` | July 8, 2023 | Yes — scraped from page |
| Teacher Adoption | `/writing/teacher-adoption` | March 11, 2023 | Yes — scraped from page |
| LEGO Technic | `/writing/lego-technic` | 2022 | **No** — year estimated, not confirmed |
| Designing Wonder.io | `/writing/designing-wonder-io` | 2021 | **No** — based on research paper date |
| Lowe's Vacuum | `/writing/lowes-vacuum` | 2020 | **No** — estimated |
| Level Up | `/writing/level-up` | 2023 | **No** — estimated based on AI abstinence article references |
| Middle School Tests | `/writing/middle-school-tests` | 2021 | **No** — estimated |
| Boys & Girls Club Reading | `/writing/boys-girls-club-reading` | 2021 | **No** — estimated |

---

## Images

None of the 8 new pages have images. The scraped source files reference Squarespace CDN images for some of these, but:
- No local image assets exist yet for any of these case studies
- Pages render fine as text-only (they follow the DeathOfCuriosity/TeacherAdoption pattern)
- When you have images to add, let me know — I'll wire them in using `ArticleCard`, `ArticleHero`, or `ArticleImage` components

**Images worth finding:**
- LEGO Technic: Building photos, sensor data graphs
- Wonder.io: Screen recordings or interface screenshots from 70+ version history
- Lowe's: Fake store prototype photos, tennis ball demo
- Middle School Tests: Student/classroom observation shots
- Boys & Girls Club: Reading session photos (check existing assets in `/question-based-reading/` folder — some may overlap)

---

## Content Tone & Voice

- **Khanmigo**: The scrape was a summary, not the full article text. I reconstructed the argument from the summary — but the original article likely has specific quotes and examples I don't have. Worth checking the live page before Squarespace cancels to get full text.

- **Teacher Adoption**: Same situation — the article references a "Classcraft CEO quote" per the TODO notes but I don't have the actual quote. The original live page likely has it.

- **LEGO Technic**: The case study page was short. I expanded the three findings into full paragraphs — but the original may have had more specific detail about what models were tested, which children, etc.

- **Lowe's**: I framed the tennis ball as the central hook since it's the most memorable detail. If there's a different detail you'd rather lead with, easy to change.

- **Level Up**: The Google Workspace Marketplace CTA links to the generic marketplace page — I don't have the direct listing URL. Should be updated with the actual Level Up listing once confirmed.

- **Boys & Girls Club Reading**: I used the Diary of a Wimpy Kid reference from the scraped notes. If that wasn't in the original article, let me know.

---

## Writing.tsx — Placement

All 8 new articles were added to the `selected` array in Writing.tsx, placed after "Question Based Reading" and before "The Neuroscience of Struggling Readers." The list is now long — you may want to:
- Decide which ones go in `selected` vs. moved to `academic` or a new "Case Studies" group
- Pick a new featured article from this batch (Khanmigo or Boys & Girls Club are the strongest for general audiences)
- Add a "Case Studies" section header to group the case study entries separately from the essays

---

## OG Images

All 8 pages reference OG image paths that don't exist yet:
- `/og-khanmigo.jpg`
- `/og-teacher-adoption.jpg`
- `/og-lego-technic.jpg`
- `/og-designing-wonder-io.jpg`
- `/og-lowes-vacuum.jpg`
- `/og-level-up.jpg`
- `/og-middle-school-tests.jpg`
- `/og-boys-girls-club-reading.jpg`

Pages will work without them but social sharing cards won't have images until these are created.

---

## Structural Questions

1. **Should Lowe's be on the writing page?** It's the only non-education case study. It fits the "design research" theme but may feel out of place next to literacy/AI essays. Let me know if you want it moved or hidden for now.

2. **Designing Wonder.io vs. Boys & Girls Club Reading** — these two pages tell overlapping stories (both are about building the reading app with struggling readers). They're differentiated by angle (design history vs. specific prototype findings), but you may want to review both and decide if one should absorb the other.

3. **Level Up CTA** — the inline CTA links to `https://workspace.google.com/marketplace`. Do you have a direct URL for the Level Up listing? I'll update it once you have one.
