# LEAP-MOOD-BOARD

FAIRPLATZ · LEAP 2027 Mood Board

An editable Next.js 16 / React 19 project containing the FAIRPLATZ proposal, 22 event-area reference pages, mood and material boards directly below the reference images, marked floor plans, material palettes, UAE / Saudi sourcing links and the PDF / editable PowerPoint books.

## Open the project

Install Node.js 22 or newer. From this project folder, run:

```sh
npx pnpm@11.25.0 install
npx pnpm@11.25.0 dev
```

Open the local address printed in the terminal, normally http://localhost:3000.

## Create a production website

```sh
npx pnpm@11.25.0 build
npx pnpm@11.25.0 start
```

The production build exports the website into `out/`. That folder can be deployed to a static website host. `start` serves the built `out/` folder locally on port 3000; set `PORT` to choose another port. The website uses browser hash links for area views, so static hosting needs no routing rules or backend.

## Edit the design

| File | Content |
| --- | --- |
| `components/ProposalSections.jsx` | FAIRPLATZ header, proposal cover, company details, main concept, visitor journey and footer |
| `components/AreaGallery.jsx` | Area cards, category filters and stand-code search |
| `components/AreaReference.jsx` | Individual reference page |
| `components/AreaLocations.jsx` | Expandable location schedules and marked floor-plan excerpts |
| `components/DownloadDialog.jsx` | PDF and editable PowerPoint downloads |
| `components/Moodbook.jsx` | Page composition, area navigation and dialog state |
| `components/Palette.jsx` | LEAP colours |
| `data/moodbook.json` | All 22 areas, sizes, requirements, image paths, material specifications and supplier sources |
| `app/globals.css` | Theme, layout, floating effects and responsive styles |
| `public/assets/` | All logos, reference images, plan excerpts, material textures and downloadable books |
| `app/layout.jsx` | Page title, description and browser theme colour |

The four requested removals are retained: no top navigation, no scope-note paragraph below the collection, no overlay caption on the architectural-direction image, and no descriptive paragraph under the cover title.

## Content and sources

Spatial renderings and material textures are AI-generated design references based on the client briefs. Client documents supply the LEAP brand assets, palette, event details, area requirements, sizes and floor plans. Conflicting dimensions are identified in the location panels. Material proposals and regional supply routes require supplier confirmation of stock, finish, lead time and suitability.

FAIRPLATZ logo and company details: https://www.fairplatz.com/ and https://www.fairplatz.com/contact-3 . Supplier sources are linked in each material panel. The supplied scope contains 22 design-brief families, including repeated locations.

No credentials, account tokens or environment variables are needed to run this project. External links open supplier / company sites. The optional Google Fonts stylesheet loads in the visitor's browser; local fallback fonts work when it is unavailable. All design images and downloadable books are included locally.

Framework references: https://nextjs.org/docs/app/getting-started/installation and https://nextjs.org/docs/app/guides/static-exports .
