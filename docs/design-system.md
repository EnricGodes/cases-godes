# Design System: The Digital Archivist

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Archivist"**
This design system rejects the sterile, "app-like" templates of the modern web in favor of a tactile, editorial experience. It is inspired by 19th-century Barcelona—a period of Cerdà's urban expansion and the rise of Modernisme. The interface should feel less like a software tool and more like a curated folio of historical documents.

To break the "template" look, we employ **Intentional Asymmetry**. Do not align every image to a rigid center; allow elements to overlap, use generous white space (Scale 16 and 24) to create a sense of importance, and lean into high-contrast typography scales where the `display-lg` headline commands the page while the `body-sm` metadata whispers in the margins.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated study in sepia, charcoal, and gold. It moves away from digital pure-whites to a grounded, "aged paper" foundation.

*   **Foundation:** The `surface` (`#fef9f0`) is your paper. It is never pure white.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To separate the "Archive" from the "Navigation," use a background shift from `surface` to `surface-container-low` (`#f8f3ea`). Boundaries are felt through tonal shifts, not drawn with lines.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers.
    *   *Base layer:* `surface`
    *   *Secondary sections:* `surface-container` (`#f2ede4`)
    *   *Interactive/Floating elements:* `surface-container-lowest` (`#ffffff`) to create a highlight effect against the beige backdrop.
*   **The Gold Accent:** Use `primary` (`#715915`) and `primary-container` (`#8c712d`) sparingly. These represent gold-leaf accents found on antique book spines. Use them for active states and critical CTAs only.
*   **Signature Textures:** For Hero backgrounds or large interactive cards, apply a subtle linear gradient from `primary` to `primary-container` at a 45-degree angle. This mimics the sheen of aged silk or metallic ink.

### Color Tokens

| Token | Hex |
|-------|-----|
| background | #fef9f0 |
| surface | #fef9f0 |
| surface-bright | #fef9f0 |
| surface-dim | #ded9d1 |
| surface-container | #f2ede4 |
| surface-container-low | #f8f3ea |
| surface-container-high | #ece8df |
| surface-container-highest | #e7e2d9 |
| surface-container-lowest | #ffffff |
| surface-variant | #e7e2d9 |
| surface-tint | #745b18 |
| primary | #715915 |
| primary-container | #8c712d |
| primary-fixed | #ffdf97 |
| primary-fixed-dim | #e4c375 |
| on-primary | #ffffff |
| on-primary-container | #fffbff |
| on-primary-fixed | #251a00 |
| on-primary-fixed-variant | #5a4300 |
| secondary | #625e5b |
| secondary-container | #e5dedb |
| secondary-fixed | #e8e1de |
| secondary-fixed-dim | #cbc5c2 |
| on-secondary | #ffffff |
| on-secondary-container | #66625f |
| on-secondary-fixed | #1e1b19 |
| on-secondary-fixed-variant | #4a4644 |
| tertiary | #6f583d |
| tertiary-container | #897053 |
| tertiary-fixed | #fdddba |
| tertiary-fixed-dim | #e0c1a0 |
| on-tertiary | #ffffff |
| on-tertiary-container | #fffbff |
| on-tertiary-fixed | #281804 |
| on-tertiary-fixed-variant | #584329 |
| on-background | #1d1c16 |
| on-surface | #1d1c16 |
| on-surface-variant | #4d4639 |
| outline | #7e7667 |
| outline-variant | #d0c5b4 |
| error | #ba1a1a |
| error-container | #ffdad6 |
| on-error | #ffffff |
| on-error-container | #93000a |
| inverse-surface | #32302a |
| inverse-on-surface | #f5f0e7 |
| inverse-primary | #e4c375 |

---

## 3. Typography: The Editorial Voice
Our typography establishes a dialogue between the classical (Serif) and the functional (Sans-Serif).

*   **The Authority (Noto Serif):** Used for all `display` and `headline` levels. It carries the weight of history. Use `display-lg` (3.5rem) for chapter titles, ensuring letter-spacing is set to -0.02em to feel tight and professional.
*   **The Utility (Manrope):** Used for `body` and `label` levels. It provides a clean, modern counterpoint that ensures the "Historical" aesthetic doesn't compromise 21st-century legibility.
*   **Hierarchy Note:** Always pair a `headline-lg` with a `label-md` in `on-surface-variant` (`#4d4639`) for "metadata" (e.g., dates, locations, or catalog numbers) to reinforce the museum-archive feel.

---

## 4. Elevation & Depth
In this system, depth is atmospheric, not structural.

*   **Tonal Layering:** Avoid shadows for standard cards. Instead, place a `surface-container-highest` (`#e7e2d9`) card onto a `surface` background. The slight darkening provides enough "weight" to define the element.
*   **Ambient Shadows:** For floating elements like Modals or Menus, use a shadow with a 40px blur, 0px offset, and 6% opacity using the `on-surface` color. It should look like a soft glow of ink, not a drop shadow.
*   **The "Ghost Border" Fallback:** If a border is required for high-contrast accessibility, use `outline-variant` (`#d0c5b4`) at 15% opacity. It should be barely perceptible.
*   **Glassmorphism:** For top navigation bars or hovering tooltips, use `surface` at 80% opacity with a `backdrop-filter: blur(12px)`. This creates the effect of looking through vellum paper.

---

## 5. Components

### Buttons & Interaction
*   **Primary Button:** Solid `primary` (`#715915`) with `on-primary` (`#ffffff`) text. **Radius is 0px.** Sharp corners are non-negotiable to maintain the "cut paper" aesthetic.
*   **Secondary Button:** A "Ghost" style. No fill, but a 1px border using `outline` (`#7e7667`) at 30% opacity.
*   **Interactive State:** On hover, gold elements should shift to `primary-fixed-dim` (`#e4c375`) to simulate light catching a metallic surface.

### Input Fields
*   **Text Inputs:** No background fill. Use a bottom-border only (2px) using `outline-variant`. Labels (`label-md`) should always sit above the input, never as placeholders, to mimic a handwritten ledger.

### Cards & Collections
*   **The "No-Divider" Rule:** In lists or card grids, never use a horizontal line to separate items. Use `spacing-8` (2.75rem) of vertical whitespace or a subtle toggle between `surface` and `surface-container-low` backgrounds.

### Specialized Component: The "Artifact Plate"
*   A specific layout pattern for featured items: A `surface-container-high` container with no border, featuring a `headline-sm` title, a `body-sm` description, and a `label-sm` "Inventory Number" in the top right corner.

### Specialized Component: The "Consulta de l'Arxiver" (Quiz)
*   Interactive quiz sections always use a **dark background** (`#2b251e`) with the vellum texture overlay. This creates a dramatic tonal inversion that signals interactivity and separates the quiz from editorial content.
*   Text uses `inverse-on-surface` (`#f5f0e7`) tones. Accent elements use gold (`#e4c375`, `#a68942`).
*   Option borders use `#a68942` at 20% opacity. Hover state shifts to `#3d342a`.
*   Correct answers highlight with green (`#2d5016` bg, `#4ade80` border). Incorrect answers dim with red (`#4a1c1c` bg, `#ef4444` border, 60% opacity).

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme scale. A very large serif title next to a very small sans-serif label creates "Design Soul."
*   **Do** use 0px border radius for everything. Sharpness conveys prestige and historical accuracy.
*   **Do** treat images with a subtle sepia filter or high-contrast black and white to ensure they integrate with the `surface` color.

### Don't:
*   **Don't** use "Blue" for links. Use `primary` (Gold) or `tertiary` (Warm Brown).
*   **Don't** use standard "Material Design" shadows. They feel too "software-like" for a digital museum.
*   **Don't** center-align long blocks of text. Stick to left-aligned editorial layouts to maintain the documentary feel.
*   **Don't** use 100% black. Use `on-background` (`#1d1c16`) for text; it is a deep charcoal that feels like aged ink.

---

## 7. Spacing Scale
Layouts should feel "airy." When in doubt, increase the padding.
*   **Section Gaps:** Use `spacing-20` (7rem) or `spacing-24` (8.5rem).
*   **Component Internal Padding:** Use `spacing-4` (1.4rem) as the minimum standard.
*   **Text-to-Image Gaps:** Use `spacing-10` (3.5rem) to allow the "paper" to breathe.
