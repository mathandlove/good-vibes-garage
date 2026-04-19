# Design Critique: Current (GVG) vs. Old (buildempathy.com) Portfolio
_Critiqued on 2026-04-18_

---

## CURRENT PORTFOLIO — goodvibesgarage.ai/portfolio

### Summary

The GVG portfolio has a clear editorial identity — warm, typographic, quiet — that the old one lacks entirely. But the current version has a serious structural problem: **only the first project card renders as a full image hero; the remaining five are list items that are mostly text with small thumbnails**. The visual hierarchy collapses after the first card, making the work feel like an afterthought. The bio section is strong. The cards below it are not.

**Grade: B−**  
Strong concept and tone, but the inconsistency in card treatment and the thin visual weight of most project entries significantly undercut the portfolio's impact.

---

### Rule Violations

#### Rule 1 — Images must not be scaled improperly
**Status:** ⚠️ Unclear / likely violation

**Finding:** The first project card (LEGO) uses a full-width landscape image that appears correctly proportioned. The subsequent project cards use small rectangular thumbnails at the left of a horizontal row layout. The thumbnails are small enough that distortion is hard to confirm at screenshot resolution, but the aspect ratios of the source images (e.g., the "LEVE UP" graphic, the Lowe's vacuum photo) appear inconsistent with the container shape — several thumbnails appear to be cropped squares of non-square originals, which can indicate object-fit issues.

**Fix:** Audit each thumbnail container. Confirm `object-fit: cover` is applied consistently. Prefer consistent aspect ratios across all thumbnail slots (e.g., 16:9 or 3:2 across the board).

---

#### Rule 2 — Chips must have consistent padding
**Status:** ✅ Pass

**Finding:** The category tags (e.g., "Toys, Play, Education, Publishing", "Education, AI, Writing") appear to be plain text labels, not bordered chip components. No chip inconsistency to flag.

---

#### Rule 3 — Link underlines must be proper distance from text
**Status:** ✅ Pass

**Finding:** "View full CV (PDF) →" and the "→" arrow links do not appear to use traditional underlines. The text-only link treatment avoids the baseline-gap problem.

---

#### Rule 4 — Left and right margins must be no larger than 120px
**Status:** ❌ Violation

**Finding:** At 1440px viewport width, the content column appears to occupy roughly 40–45% of the total width — far under the 70% threshold. The left and right whitespace is visually enormous. The bio text block and all project cards are pinched into a narrow center channel that feels undersized relative to the canvas.

**Fix:** Widen the content column. At 1440px, a max-width of ~900–1100px with `margin: 0 auto` would keep margins well under 120px. Currently the max-width appears to be around 600–640px, which is too narrow for desktop.

---

#### Rule 5 — Chips, tags, and similar content must be vertically centered
**Status:** ✅ Pass

**Finding:** Category labels appear inline with title text and no centering issues are visible.

---

#### Rule 6 — Cards must be consistent sizes
**Status:** ❌ Violation

**Finding:** The first card (LEGO) is a full-width hero with a large image taking ~60% of the card height. Every subsequent card is a horizontal row with a small thumbnail at left and text at right. These two treatments are not consistent — the visual weight of card 1 is 4–5× greater than cards 2–6. The list-style cards themselves also vary slightly in height based on text length.

**Fix:** Decide on one card treatment and use it consistently. Either all cards should be hero-style (image-dominant) or all should be row-style. The current mixed treatment makes the LEGO project look like the only "real" work and demotes everything else.

---

#### Rule 7 — Text must be no smaller than 12px
**Status:** ❌ Violation

**Finding:** The company/category eyebrow labels (e.g., "THE LEGO GROUP · Toys, Play, Education, Publishing") appear to be 10–11px at most. At 1440px viewport, these labels are noticeably harder to read than the title and body text. Same applies to the outcome lines at the bottom of each card.

**Fix:** Minimum 12px for all visible text. Eyebrow labels should be at least 12px; outcome/result lines at least 13px.

---

### Additional Observations

1. **One card dominates, five cards are buried.** The hero treatment for LEGO only is either intentional (feature case) or a bug — but it reads as inconsistency. If it's intentional, it needs visual framing (e.g., "FEATURED") to explain the hierarchy.

2. **The bio is doing heavy lifting.** Three long paragraphs before the work starts is a lot of text to ask a portfolio visitor to read before they see anything. Consider inverting: lead with one strong case, then the bio.

3. **No outcome scanability.** The outcome lines (e.g., "Published LEGO Play Stories product line") are great content but visually buried. They'd benefit from a distinct treatment — bolder weight, accent color, or icon marker — so they pop on fast scan.

4. **Footer feels sparse.** "Let's build something." is a good CTA but the footer section has very little content and a lot of vertical breathing room that reads as unfinished rather than intentional.

5. **No visual brand differentiation.** The page is beige/off-white throughout. The lack of color accent means there's nothing to direct the eye or create emphasis. One intentional color — even for the outcome lines or a hover state — would sharpen the design.

---
---

## OLD PORTFOLIO — buildempathy.com/casestudies/

### Summary

The old portfolio is a raw, unstyled grid of case study thumbnails under a Squarespace template. It does one thing: shows you the work. But it shows it with zero editorial voice, zero hierarchy, and zero curation. It's a filing cabinet, not a portfolio. The mPath brand is cold and corporate-blue; the page feels like a vendor site.

**Grade: D+**  
The content exists and the images are real. Everything else — layout, hierarchy, type, identity — is default Squarespace. The bottom row cards (no image, text-only) are unfinished placeholders.

---

### Rule Violations

#### Rule 1 — Images must not be scaled improperly
**Status:** ❌ Violation

**Finding:** All 13 project thumbnails appear to be forcing different-aspect-ratio images into identical square-ish containers. The "Motivating Middle School Students" card in the last row has no image at all. Several thumbnails show subjects visibly cropped or distorted — the "Understanding the Digital Math Experience" image has a child's head nearly cropped out; the "Mapping the Emotional Experience (Elementary)" image is squeezed/zoomed. No consistent aspect ratio or `object-fit` discipline is visible.

**Fix:** Set a consistent container aspect ratio (e.g., 16:9) and apply `object-fit: cover` with deliberate `object-position` for each image.

---

#### Rule 2 — Chips must have consistent padding
**Status:** ✅ Pass

**Finding:** No chip components are used on this page.

---

#### Rule 3 — Link underlines must be proper distance from text
**Status:** ✅ Pass

**Finding:** No underlined links are visible in the content area; navigation links use no underlines.

---

#### Rule 4 — Left and right margins must be no larger than 120px
**Status:** ✅ Pass

**Finding:** At 1440px, the grid appears to fill roughly 75–80% of the viewport width. Margins appear to be approximately 80–100px each side, within the 120px limit.

---

#### Rule 5 — Chips, tags, and similar content must be vertically centered
**Status:** ✅ Pass

**Finding:** No chip or tag components present.

---

#### Rule 6 — Cards must be consistent sizes
**Status:** ❌ Violation

**Finding:** The last row has one card with an image (Middle School girl with arms crossed) and two cards with no image — they're blank white boxes with just a text label beneath. These are visually broken incomplete entries, not a deliberate design choice. The grid uses a 3-column layout but the final row has orphaned 1-column entries.

**Fix:** Either complete the image assets for all entries or use a placeholder image system. No card should appear as a broken blank.

---

#### Rule 7 — Text must be no smaller than 12px
**Status:** ⚠️ Unclear

**Finding:** The card labels (project titles beneath each thumbnail) appear to be approximately 12–13px, within the acceptable range. However, at the bottom of the page, there is a stray "0" element in the top-left corner of the page that appears to be a leftover debug or counter element from Squarespace — this suggests there are hidden or misconfigured text elements that may be smaller than 12px.

---

### Additional Observations

1. **No editorial voice.** Every case study has equal visual weight. There is no signaling of which work is flagship, which is recent, which is most impressive. The user is left to guess.

2. **Generic brand.** The teal mPath logo and white background is Squarespace default territory. Nothing about this page communicates design expertise to someone who hasn't already heard of mPath.

3. **Title-only navigation.** "Building a Multi Agent AI Tutor" next to "Motivating Middle School Students to Take Tests" — the range of scope and sophistication is invisible from the thumbnail. There's no client name, no year, no outcome, no category hint.

4. **Broken/empty last row.** Three cards in the bottom area have no thumbnail image. This reads as unfinished work, which undermines credibility.

5. **No CTA.** The page ends at the last card. There's no contact prompt, no next step, nothing to convert a viewer into a contact.

---

## Head-to-Head Summary

| Dimension | GVG (Current) | buildempathy (Old) |
|---|---|---|
| Visual identity | Strong, distinctive | Generic Squarespace |
| Editorial voice | Present (bio is good) | Absent |
| Card consistency | ❌ Mixed hero/list | ❌ Broken last row |
| Image handling | ⚠️ Needs audit | ❌ Distorted/cropped |
| Content hierarchy | ⚠️ First card dominates | ❌ Flat grid, no priority |
| Margins/layout | ❌ Too narrow at 1440px | ✅ Acceptable |
| Text legibility | ❌ Eyebrow text too small | ✅ Adequate |
| CTA / conversion | ✅ "Let's build something" | ❌ None |
| Overall grade | **B−** | **D+** |

The GVG portfolio is directionally right. The old one is a relic. The gap is real, but the GVG version needs the card inconsistency fixed and the layout widened before it earns a higher grade.
