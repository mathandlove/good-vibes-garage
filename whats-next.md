```xml
<original_task>
Match the text content of LowesPage.tsx (http://localhost:5173/writing/lowes-vacuum) exactly to the source text from https://www.buildempathy.com/casestudies/lowes. The user wants the GVG version to use the exact original text from that page, not paraphrased or rewritten versions.
</original_task>

<work_completed>
- Read LowesPage.tsx (src/pages/LowesPage.tsx) in full
- Fetched https://www.buildempathy.com/casestudies/lowes and extracted all text verbatim
- Compared the two versions to identify discrepancies
</work_completed>

<work_remaining>

## Exact Text Fixes Needed in src/pages/LowesPage.tsx

### 1. Intro / Lead paragraph (lines 113–125)
**Current GVG text:**
```
Lowe's hired mPath to reinvent the experience of buying a wet-dry vacuum. mPath conducted diagnostic research and emototyping to understand the current experience and develop a new approach that increased purchases, customer retention, and value.

We built a fake store in our lab, strapped MOXO sensors onto shoppers, and watched what actually happened when someone tried to buy a vacuum.

The overarching theme in our design work was that shoppers were not feeling confident that they were making the right choice in their purchases.

We built a fake vacuum store and had shoppers visit in the morning, making changes in the afternoon.
```

**Source text (buildempathy.com):**
```
Lowe's hired mPath to reinvent the experience of buying a wet-dry vacuum. mPath conducted diagnostic research and emototyping to understand the current experience and develop a new approach that increased purchases, customer retention, and value.

The overarching theme in our design work was that shoppers were not feeling confident that they were making the right choice in their purchases.

We built a fake vacuum store and had shoppers visit in the morning, making changes in the afternoon.
```

**Fix:** Remove the invented line "We built a fake store in our lab, strapped MOXO sensors onto shoppers, and watched what actually happened when someone tried to buy a vacuum." — it does not appear on buildempathy.com. Keep the remaining three paragraphs exactly as-is.

---

### 2. Timeline Item 01 — "Simplify the Messaging" (lines 152–158)
**Current GVG text (section heading subtext that is NOT on source):**
The section heading on GVG is "Simplify the Messaging" — source uses "Simplify Messaging". Update heading to match exactly.

**Current GVG body text:**
```
Boxes and signs had many unorganized messages and information. Shoppers were so overwhelmed they couldn't read any of it, let alone stop to touch.

The number-one question we identified from new shoppers was "Which one should I use at home?" To help make messages clear and relevant, we placed a label above boxes and displays: "Best vacuum for home use." We also placed a large, red, pop-up arrow next to the vacuum, saying "Try me out," achieving our primary goal of getting shoppers to touch the products.
```

**Source text:**
```
Boxes and signs had many unorganized messages and information. Shoppers were so overwhelmed they couldn't read any of it, let alone stop to touch.

The number-one question we identified from new shoppers was "Which one should I use at home?"

We placed a label above boxes and displays: "Best vacuum for home use."

We also placed a large, red, pop-up arrow next to the vacuum, saying "Try me out," achieving our primary goal of getting shoppers to touch the products.
```

**Fix:** The body text is the same content, just split differently. The GVG version combines these into one paragraph — this is acceptable since paragraph breaks are presentational. No text content change needed here. However, the phrase "To help make messages clear and relevant," is NOT in the source — it was added. Remove it. The sentence should read: "The number-one question we identified from new shoppers was 'Which one should I use at home?' We placed a label above boxes and displays: 'Best vacuum for home use.'"

**Also fix:** Section heading "Simplify the Messaging" → "Simplify Messaging" (source has no "the")

---

### 3. Timeline Item 02 — "Add Something to Touch" (lines 160–170)
**Current GVG heading:** "Add Something to Touch"
**Source heading:** "Add Interaction"

**Current GVG body text:**
```
We addressed what people originally asked for: professional design, simple messaging, accessible products, and differentiable choices. After implementing all of these features, the space was still only rated 5/10.

We noticed that most shoppers subconsciously put their hands on every vacuum to feel the suction, but all the suctions felt the same. We installed a tube with tennis balls to help customers visualize the suction; they rated the experience as the best they ever had at Lowe's.

Over the weekend, we experimented with suction physics to see how we could better visualize horsepower.
```

**Source text:**
```
We addressed what people originally asked for: professional design, simple messaging, accessible products, and differentiable choices. After implementing all of these features, the space was still only rated 5/10.

We noticed that most shoppers subconsciously put their hands on every vacuum to feel the suction, but all the suctions felt the same. We installed a tube with tennis balls to help customers visualize the suction; they rated the experience as the best they ever had at Lowe's.

Over the weekend, we experimented with suction physics to see how we could better visualize horsepower.
```

**Fix:** Body text matches exactly. **Only fix the heading:** "Add Something to Touch" → "Add Interaction"

---

### 4. Timeline Item 03 — "Reduce the Choices" (lines 172–186)
**Current GVG heading:** "Reduce the Choices"
**Source heading:** "Simplify Choices"

**Current GVG body text:**
```
Interviewed shoppers were expecting one wet/dry vacuum. Instead, they had to evaluate and choose between 14 different options. They could not differentiate between these options.

We found that shoppers differentiated vacuums based on their storage size: small, medium, and large. They expected all vacuums to have strong suctions and similar accessories. For wet-dry vacuums, they tend to be indifferent to the brand.

If you visit the Lowe's store today, you can see the tennis ball suction station ready for play.
```

**Source text:**
```
Interviewed shoppers were expecting one wet/dry vacuum. Instead, they had to evaluate and choose between 14 different options. They could not differentiate between these options.

We found that shoppers differentiated vacuums based on their storage size: small, medium, and large. They expected all vacuums to have strong suctions and similar accessories. For wet-dry vacuums, they tend to be indifferent to the brand.

If you visit the Lowe's store today, you can see the tennis ball sunction station ready for play.
```

**Fix:** Heading "Reduce the Choices" → "Simplify Choices". 

Note: The source has a typo "sunction" (should be "suction") — GVG currently has the correct spelling "suction". Keep "suction" (do not copy the typo).

---

### 5. ArticleCallout — "The Core Insight" (lines 193–195)
**Current GVG text:**
```
Customers weren't uninformed about vacuums. They were unconfident. The design fix wasn't to add more information — it was to give customers a way to feel certain before they committed. That's a meaningfully different problem to solve.
```

**Source text:** This callout does not appear on buildempathy.com at all. It was written for GVG.

**Decision needed:** Keep as original GVG editorial addition, or remove it to stay purely source-faithful? The user said "copy the text exactly" — this block has no source equivalent. Likely should be removed or flagged for user decision.

---

### 6. Closing paragraphs (lines 201–207)
**Current GVG text:**
```
Lowe's implemented over 150 of the design suggestions that came out of this research. The result was a 9% sales increase in an in-store randomized control test — alongside improved satisfaction and likelihood to recommend.

The tennis ball demo is the detail I tell this story with, because it captures something true about all good design: you can't engineer confidence through better copywriting. Sometimes you have to let people touch the thing.
```

**Source text:**
```
Lowe's implemented over 150 of mPath's design suggestions and conducted an in-store, randomized control test. According to the results, mPath helped Lowe's increase their sales by over 9% and increase customer satisfaction and promotion.
```

**Fix:** Replace closing with source version. The second paragraph ("The tennis ball demo is the detail...") does not appear in source — it is GVG original. Remove or flag for user decision.

**Source version:**
```
Lowe's implemented over 150 of mPath's design suggestions and conducted an in-store, randomized control test. According to the results, mPath helped Lowe's increase their sales by over 9% and increase customer satisfaction and promotion.
```

---

### 7. ArticleClosing quote (line 211)
**Current:** "Confidence isn't a feeling you can describe your way to. Sometimes you have to let people touch the thing."
**Source:** No equivalent — GVG original. Flag for user decision.

---

## Summary of Changes

| Location | Type | Action |
|----------|------|--------|
| Intro, line ~117 | Invented sentence | Remove "We built a fake store in our lab, strapped MOXO sensors..." |
| Timeline 01 heading | Wrong wording | "Simplify the Messaging" → "Simplify Messaging" |
| Timeline 01 body | Inserted phrase | Remove "To help make messages clear and relevant," |
| Timeline 02 heading | Wrong wording | "Add Something to Touch" → "Add Interaction" |
| Timeline 03 heading | Wrong wording | "Reduce the Choices" → "Simplify Choices" |
| ArticleCallout | No source equivalent | Remove or get user decision |
| Closing paragraphs | Wrong wording + extra paragraph | Replace with source text; remove editorial second paragraph |
| ArticleClosing quote | No source equivalent | Remove or get user decision |

</work_remaining>

<attempted_approaches>
- Fetched buildempathy.com/casestudies/lowes via WebFetch to extract verbatim text
- Read LowesPage.tsx in full
- No edits attempted yet — this is a pre-edit analysis
</attempted_approaches>

<critical_context>
- The source page (buildempathy.com) is the mPath company site. The GVG version is Elliott's personal retelling of the same project.
- Several passages in GVG were written fresh (the "We built a fake store in our lab" line, the ArticleCallout, the closing editorial paragraph, the ArticleClosing quote) — these are good writing but don't exist in the source.
- The user said "copy the text exactly" — needs to decide whether to keep any GVG-original editorial content or strip to pure source text.
- Source has a typo: "sunction" instead of "suction" — do NOT copy this typo.
- The stats block (9%, 150+, 14→3) and project meta are GVG additions with no source equivalent — user likely wants to keep these as they improve the article structure.
- Image captions in GVG were also written for this version — source doesn't have equivalent captions.
</critical_context>

<current_state>
- No edits made yet
- Analysis complete, exact diff documented above
- Awaiting user decision on: ArticleCallout, editorial closing paragraph, ArticleClosing quote (keep as GVG original or remove to match source exactly)
- All other fixes are clear and ready to implement
</current_state>
```
