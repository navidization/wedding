# Digital Persian Wedding Invitation

A Vite + React + TypeScript single-page wedding invitation with RTL Persian UI, local assets, SCSS theme variables, and a ready-gated unwrap animation.

## Run

```bash
npm install
npm run dev
```

Open `/invite/guest-001` through `/invite/guest-005`.

## Add Guests

Edit `src/data/guests.ts` and add a new record keyed by the URL slug you want to send, for example `guest-006`.

## Change Wedding Details

Edit `src/data/wedding.ts` for names, date, venue, address, map URL, WhatsApp phone, and calendar details.

## Replace Fonts And Assets

Put final font files in `src/assets/fonts/` and update the `@font-face` URLs in `src/styles/globals.scss`. The current `.woff2` files are placeholders so the app can be wired for local fonts immediately.

Reference images are stored in `src/assets/images/`. Decorative invitation pieces are currently CSS/SVG so they can animate cleanly.

## Customize Colors And Animation

Theme tokens live in `src/styles/_variables.scss`. Animation timing lives in `src/data/wedding.ts` as `animationTiming`.
