# eLAP (ops)

Front-end for the eLAP operations dashboard: case listing, filters, and printable loan and compliance documents opened from the per-row Action menu.

## Stack

React 19, Vite 8, React Router 7, Tailwind CSS v4.

## Commands

```bash
npm install
npm run dev    # development server
npm run build  # production build
npm run lint   # ESLint
```

## Layout

- `src/pages/` — route-level views (dashboard, details, static document pages).
- `src/components/` — shared UI; `DataTable.jsx` owns the hardcopy and print modals.
- `src/data/` — mock rows, table/action config, route metadata for placeholders.

**[HANDOFF.md](./HANDOFF.md)** is the canonical onboarding document for this repository—read it first for architecture, routes, mock data, UI conventions, and feature status.
