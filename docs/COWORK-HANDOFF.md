# Cowork Handoff: How to Publish Anything to thepatrickgrp.com

For any Claude session (Cowork, Code, or otherwise) asked to change or publish
to the website. Read this top to bottom before touching anything.

## Where everything lives

- Project: `~/Desktop/patrick-group/website-repo/` on this Mac. Work THERE.
- `CLAUDE.md` (repo root): brand rules, fair housing rules, people and titles,
  key files. Read it first, always.
- `docs/BUSINESS.md`: business context, accounts, automations, backlog.
- `docs/PUBLISHING-A-JOURNAL-ARTICLE.md`: step-by-step for journal articles.

## How publishing works (the whole thing)

Pushing to `main` IS publishing. Vercel auto-deploys every push in 2 to 4
minutes. There is no other deploy step, no button, no dashboard.

```bash
cd ~/Desktop/patrick-group/website-repo
git pull                 # ALWAYS first: a nightly automation also pushes to this repo
# ...make your changes...
npx tsc --noEmit         # must pass with no output
git add -A
git commit -m "Describe the change"
git push                 # this deploys the site
```

If `git push` is rejected, run `git pull --rebase` and push again.

## Where content goes (edit data, not page templates)

| Content | File |
|---|---|
| Journal articles | `data/posts.ts` (see the publishing doc) |
| Press / news mentions | `data/news.ts` (one object per entry, newest first is automatic) |
| City page info | `data/cities.ts` |
| Grant programs | `data/grants.ts` (bump BOTH `GRANTS_LAST_UPDATED` constants) |
| MLS listings | `data/listings.ts`: NEVER hand-edit, a nightly sync owns it |

## Hard rules (non-negotiable)

1. NO em dashes anywhere in published content. Verify: `grep -c "—" data/posts.ts data/news.ts` must be 0.
2. Fair housing: no school-quality praise, no "family/family-friendly"
   neighborhood language. Full rules in `CLAUDE.md`.
3. Titles: Sarah is always "Principal Broker". Brad is always "Realtor®".
4. Never reference an image file that does not exist (renders broken).
   Article images live in `public/images/insights/`.
5. Do not duplicate the automations (weekly journal, nightly listings sync,
   monthly grants refresh all run on their own; see `CLAUDE.md`).

## After publishing

Confirm the change is live at https://www.thepatrickgrp.com after ~4 minutes.
If the site does not update, the Vercel build failed; check that `npx tsc
--noEmit` passes and that no referenced image is missing, fix, push again.
