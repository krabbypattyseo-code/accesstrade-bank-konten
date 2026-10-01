# Accesstrade — Bank Konten (Daftar Campaign)

Interactive recreation of the Accesstrade publisher dashboard mockup for **Bank Konten** and **Daftar Campaign**.

## Features

- **Campaign List** — filter by bank konten (banner / video / konten baru), status tabs, take affiliate link
- **Campaign Detail** — overview, banner & video tabs with filters, commission info
- **Bank Konten (global)** — aggregated banners & videos across affiliated campaigns, promo strip, locked campaigns
- **Quick drawer** — preview bank konten from a campaign card without leaving the list
- **Get Link / Preview modal** — copy affiliate link, HTML embed, and video captions

Based on the publisher dashboard mockup (`mockup-bank-konten-daftar-campaign`).

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Accesstrade design tokens (Nunito, orange brand) from the original mockup
- Client-side routing via hash (`#/`, `#/campaign/:id`, `#/bank-konten`)

## Notes

- Campaign / banner / video data is mock data sampled from the publisher dashboard (1 Oct 2026).
- Some banner sizes are placeholders when image assets were not captured in the mockup.
- External Accesstrade CDN images may fail offline; the UI falls back to labeled placeholders.
