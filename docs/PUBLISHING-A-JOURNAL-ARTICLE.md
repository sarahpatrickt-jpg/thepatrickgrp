# Publishing a Journal Article to thepatrickgrp.com

This is the complete, self-contained process for putting a new journal/insights
article on the live website. Follow it top to bottom.

**Repo:** `~/Desktop/patrick-group/website-repo/` (Next.js App Router, TypeScript).
Pushing to `main` auto-deploys to Vercel in 2 to 4 minutes. The push IS the publish.

---

## 1. Add the article to `data/posts.ts`

Every article is one `Post` object in the `posts` array. Add the new one as the
**first element** in the array (newest). The homepage automatically promotes the
newest 3 articles by date, so nothing else needs touching.

`Post` fields:

- `slug` — kebab-case, used in the URL `/insights/<slug>`
- `title` — full headline
- `excerpt` — 1 to 2 sentence summary (shows on cards and as the meta description)
- `date` — `"YYYY-MM-DD"` (must be the newest date to lead the homepage)
- `author` — `"Sarah"` or `"Brad"`
- `category` — one of `"Market Update" | "Buyer Tips" | "Seller Tips" | "Neighborhood" | "Team News"`
- `readTime` — e.g. `"6 min read"`
- `image` — `"/images/insights/<slug>.jpg"` (see step 2)
- `imageAlt` — plain-English description of the hero image
- `relatedSlugs` — 3 existing article slugs (see the array for valid ones)
- `relatedCitySlugs` — a few city slugs like `"birmingham-mi"`, `"troy-mi"`
- `content` — array of content blocks (see below)

## 2. Content blocks

`content` is an array of `ContentBlock` objects. Do NOT write raw HTML or
markdown in the text. Available block types:

- `{ type: "paragraph", text }`
- `{ type: "h2", text }` and `{ type: "h3", text }`
- `{ type: "bullets", items: string[] }` — for a label, put it inline: `"Label: explanation"`
- `{ type: "callout", label, text }` — highlighted box, good for the takeaway
- `{ type: "stat-row", stats: [{ label, value, note }] }` — small metric cards
- `{ type: "two-col", left: {label,text}, right: {label,text} }`
- `{ type: "table", headers: string[], rows: string[][], caption? }` — YoY columns auto color green/red

## 3. Hero image

Put a REAL image file in `public/images/insights/` named to match the slug, e.g.
`public/images/insights/<slug>.jpg`. **Never reference an image file that does
not exist** — it renders as a broken image on the live site.

- If a custom graphic was provided, save that file to that path.
- If none was provided, either reuse an existing image from that folder or
  generate a branded one. A generator lives at `assets/fb-cover-tool/`
  (`build_article_hero.py`, brand fonts in `fonts/`, run with a Pillow venv).

## 4. Writing rules (non-negotiable)

- **No em dashes (—) anywhere in published content.** Restructure with commas,
  periods, colons, or parentheses. Verify: `grep "—" data/posts.ts` must return
  nothing.
- No school-quality or "family/family-friendly" language (Michigan Fair Housing).
- Brad's title is always "Realtor®". Sarah is always "Principal Broker".
- Full brand/voice rules: `CLAUDE.md`; business context: `docs/BUSINESS.md`.

## 5. Verify, then publish

```bash
cd ~/Desktop/patrick-group/website-repo
npx tsc --noEmit          # must be clean
grep -c "—" data/posts.ts # must be 0
```

Then publish:

```bash
git add -A
git commit -m "Add <title> article"
git push
```

Vercel deploys automatically. Within a few minutes the article is live at
`https://www.thepatrickgrp.com/insights/<slug>` and featured on the homepage.
