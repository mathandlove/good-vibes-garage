```xml
<original_task>
Compare every article in the GVG Writing section against its buildempathy.com counterpart to verify text was copied word for word. Fix any discrepancies found.
</original_task>

<work_completed>
None. The task was just assigned. No auditing has been done yet.
</work_completed>

<work_remaining>
## Internal GVG Writing Articles to Audit

The Writing section lives in `src/components/Writing.tsx`. It has three categories: Featured, Selected Writing, and Academic Work. The articles with `internal: true` render as GVG pages — these are the ones to compare. External links (medium.com, etc.) are not relevant.

### Article Pages → Source References

Each GVG page file is in `src/pages/`. Each page renders an article component from `src/components/`. The buildempathy references are in `References/buildempathy/`.

---

**1. AI Abstinence** (Featured)
- GVG page: `src/pages/AIAbstinencePage.tsx`
- Route: `/writing/ai-abstinence`
- Buildempathy source: `References/buildempathy/articles/aiabstinence.md`

**2. LEGO Reading — "5 Ways Books Can Empower Play"**
- GVG page: `src/pages/LegoReadingPage.tsx`
- Route: `/writing/lego-reading`
- Buildempathy source: `References/buildempathy/case-studies/lego-play-reading-full.md` or `lego-play-reading-study.md` or `lego-reinventing-the-book.md`

**3. Death of Curiosity**
- GVG page: `src/pages/DeathOfCuriosityPage.tsx`
- Route: `/writing/death-of-curiosity`
- Buildempathy source: check `References/buildempathy/articles/` — no direct match found yet; may be in `pages/` or missing

**4. Personalized Learning Keeps Failing**
- GVG page: `src/pages/PersonalizedLearningPage.tsx`
- Route: `/writing/personalized-learning`
- Buildempathy source: likely in `References/buildempathy/articles/` — not found in initial listing; check for alternate filenames

**5. Remote Classrooms — "5 Reasons Remote Classrooms Fail"**
- GVG page: `src/pages/RemoteClassroomsPage.tsx`
- Route: `/writing/remote-classrooms`
- Buildempathy source: `References/buildempathy/pages/5 reasonsyour remote classroom will explode` (this is a directory with images, not a text file — check for a text/markdown file inside it or look elsewhere)

**6. Question Based Reading**
- GVG page: `src/pages/QuestionBasedReadingPage.tsx`
- Route: `/writing/question-based-reading`
- Buildempathy source: `References/wonderstories/inquiry-based-reading.md`

**7. Khanmigo**
- GVG page: `src/pages/KhanmigoPage.tsx`
- Route: `/writing/khanmigo`
- Buildempathy source: `References/buildempathy/articles/khanmigo.md`

**8. Teacher Adoption — "3 Pillars of Teacher Adoption for Edtech"**
- GVG page: `src/pages/TeacherAdoptionPage.tsx`
- Route: `/writing/teacher-adoption`
- Buildempathy source: `References/buildempathy/articles/teacher-adoption.md`

**9. LEGO Technic**
- GVG page: `src/pages/LegoTechnicPage.tsx`
- Route: `/writing/lego-technic`
- Buildempathy source: `References/buildempathy/case-studies/lego-technic-digital-instructions.md`

**10. Designing Wonder.io — "Five Years Building Wonder.io"**
- GVG page: `src/pages/DesigningWonderIoPage.tsx`
- Route: `/writing/designing-wonder-io`
- Buildempathy source: `References/buildempathy/case-studies/designing-wonder-io.md`

**11. Lowe's Vacuum**
- GVG page: `src/pages/LowesPage.tsx`
- Route: `/writing/lowes-vacuum`
- Buildempathy source: `References/buildempathy/case-studies/lowes-vacuum.md`

**12. Level Up — AI Writing Coach**
- GVG page: `src/pages/LevelUpPage.tsx`
- Route: `/writing/level-up`
- Buildempathy source: `References/buildempathy/case-studies/level-up-ai-tutor.md`

**13. Middle School Tests — "These Kids Aren't Lazy"**
- GVG page: `src/pages/MiddleSchoolTestsPage.tsx`
- Route: `/writing/middle-school-tests`
- Buildempathy source: `References/buildempathy/case-studies/middle-school-tests-full.md` or `middle-school-tests.md`

**14. Boys & Girls Club Reading — "From I Won't Read a Paragraph"**
- GVG page: `src/pages/BoysGirlsClubReadingPage.tsx`
- Route: `/writing/boys-girls-club-reading`
- Buildempathy source: `References/buildempathy/case-studies/boys-girls-club-engaged-reading.md` or `engaged-reading-bgc.md`

**15. Feel Their Learning (in Academic section)**
- GVG page: `src/pages/FeelTheirLearningPage.tsx`
- Route: `/writing/feel-their-learning`
- Buildempathy source: unknown — search `References/buildempathy/` for relevant content

**16. Adding Rewards** (listed in pages/ but not in Writing.tsx — may be a portfolio case study)
- GVG page: `src/pages/AddingRewardsPage.tsx`
- Buildempathy source: `References/buildempathy/case-studies/adding-rewards-full.md` or `adding-rewards-lessons.md`

**17. Empowering Parents**
- GVG page: `src/pages/EmpoweringParentsPage.tsx`
- Buildempathy source: `References/buildempathy/case-studies/empowering-parents-full.md`

**18. Digital Math**
- GVG page: `src/pages/DigitalMathPage.tsx`
- Buildempathy source: `References/buildempathy/case-studies/digital-math-full.md` or `digital-math.md`

**19. Education.com**
- GVG page: `src/pages/EducationComPage.tsx`
- Buildempathy source: `References/buildempathy/case-studies/education-com-gamification-full.md` or `education-com-gamification.md`

**20. Rubric for Engaging Educational Games**
- Note: This may be a portfolio page, not a writing page
- Buildempathy source: `References/wonderstories/rubric-for-engaging-educational-games.md`

---

## Audit Process (for each article)

1. Read the GVG page file (e.g., `src/pages/KhanmigoPage.tsx`) — find where the body text is rendered. It may be inline JSX or in a separate component.
2. Read the corresponding buildempathy source file.
3. Compare paragraph-by-paragraph. Note any:
   - Missing paragraphs
   - Paraphrased or reworded text
   - Added text not in the original
   - Reordered sections
4. Fix any discrepancies in the GVG page file so the text matches word for word.

## Additional Lookup Needed

- **Remote Classrooms**: The buildempathy reference is a directory with images only. Check `References/buildempathy/pages/` for a markdown file or search `References/` more broadly.
- **Death of Curiosity**: No buildempathy match found in initial scan. Check `References/buildempathy/articles/` for alternate filenames, or check `References/seowonder/` or other directories.
- **Personalized Learning**: Same — no clear match found. Search needed.
- **Feel Their Learning**: No buildempathy match found. Search needed.
</work_remaining>

<attempted_approaches>
No approaches attempted yet. This is a fresh handoff at the very start of the task.
</attempted_approaches>

<critical_context>
## Project Structure
- React + Vite + TypeScript. CSS Modules.
- Page files: `src/pages/[Name]Page.tsx`
- Article body text is either inline in page JSX or rendered via shared article components in `src/components/article/`
- Writing section index: `src/components/Writing.tsx` — contains titles, descriptions, routes

## What "Word for Word" Means Here
The user wants the article body text (paragraphs, headings, pull quotes, etc.) to match the buildempathy source exactly. Descriptions in `Writing.tsx` are summaries/teasers — those may not need to match. Focus on the full article content in each page file.

## Reference File Structure
```
References/
  buildempathy/
    articles/       # aiabstinence.md, khanmigo.md, teacher-adoption.md
    case-studies/   # ~25 files covering most case study articles
    pages/          # about-us, empowering-parents-app, empowerplay-prototypes, remote classrooms dir, etc.
  wonderstories/    # inquiry-based-reading.md, rubric-for-engaging-educational-games.md
  seowonder/        # two subdirectories: wonderio/, wonderstories.app/
```

## CLAUDE.md Rules to Follow
- Before editing any file, state which exact file you're targeting.
- When reporting a problem, fix it — don't report findings as a status update.
</critical_context>

<current_state>
- Status: NOT STARTED. No articles have been audited yet.
- No files have been modified.
- The handoff doc itself (`whats-next.md`) is the only artifact created.
- Starting point: read `src/pages/AIAbstinencePage.tsx` and `References/buildempathy/articles/aiabstinence.md` in parallel to begin the first comparison.
</current_state>
```
