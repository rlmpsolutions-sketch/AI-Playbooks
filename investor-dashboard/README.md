# Property Investor Dashboard

A local, dark-theme dashboard for tracking a real estate investing pipeline:
properties found, under analysis/offer, under contract, purchased, renovating,
listed, and sold — plus follow-ups and profit.

## Run it

No build step. From this folder:

```bash
python3 -m http.server 8765
```

Then open **http://localhost:8765** in your browser.

(Opening `index.html` directly by double-clicking also works, since all data
is loaded from plain `<script>` tags rather than `fetch`.)

## Use your own data

Edit `data.js`:

- `PROPERTIES` — one entry per property. `status` must be one of the keys in
  `STATUS_META` (`found`, `analyzing`, `offer`, `contract`, `purchased`,
  `renovating`, `listed`, `sold`).
- `PROFIT_TREND` — realized profit per month, feeds the profit trend chart.

Everything else (KPI cards, charts, table, search, filters, follow-ups panel)
recalculates automatically from `PROPERTIES`.

## Features

- **Search bar** — filters the properties table live across address, city,
  state, zip, owner, source, property type, status, and notes.
- **Status pills + type filter** — narrow the table to a pipeline stage or
  property type; pill counts update live.
- **Sortable columns** — click any table header to sort.
- **KPI cards** — properties found, under contract, currently owned, sold,
  follow-ups due (with overdue count), realized profit, average ROI on sold
  deals, and portfolio value (ARV of owned properties).
- **Charts** — deal pipeline by stage, monthly/cumulative realized profit,
  property type mix, and lead source breakdown.
- **Follow-ups panel** — next 8 follow-ups sorted by date, with overdue items
  flagged in red and due-soon items in orange.
