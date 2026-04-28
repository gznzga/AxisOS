# AxisOS — Marketing site

Next.js (App Router) + Tailwind CSS. Dark, data-forward UI with Rajdhani + Share Tech Mono (via `next/font/google`).

## Run locally

```bash
cd axisos
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### `__webpack_modules__[moduleId] is not a function`

Almost always a **stale webpack cache** after dependency or file changes. From `axisos/`:

```bash
npm run clean
npm run dev
```

If it persists: `rm -rf node_modules && npm install`, then `npm run dev` again. Do a **hard refresh** in the browser (Cmd+Shift+R) so an old JS chunk isn’t loaded.

## Book a Call / contact

Edit `lib/site.ts`:

- `BOOK_CALL_HREF` — defaults to `mailto:…`; replace with your [Calendly](https://calendly.com/) URL if you prefer.
- `CONTACT_EMAIL`, `CONTACT_PHONE`, `CONTACT_PHONE_HREF` — update to your real details.

## 21st.dev / shadcn-style components

This project uses custom **HUD-style** cards, nav, pricing blocks, and a contact form that match the AxisOS brief (turquoise glow, corner brackets, no purple-gradient SaaS look).

To add blocks from **[21st.dev](https://21st.dev)** (shadcn-based registry), initialize shadcn in this folder and pull components with the CLI:

```bash
npx shadcn@latest init
npx shadcn@latest add <component-name>
```

Then swap or compose with `components/bracket-card.tsx`, `components/book-call-button.tsx`, etc., so tokens stay aligned with the black / `#00e5cc` / `#0088ff` palette.

## Repo layout

| Path | Role |
|------|------|
| `app/` | Routes: home, services, about, pricing, contact |
| `components/` | Header, footer, fade-in, cards, form, CTAs |
| `lib/site.ts` | Global strings and booking link |
| `lib/services.ts` | Shared service copy |

The parent folder still contains `index.html` (legacy dashboard) — this site lives entirely under `axisos/`.
# AxisOS
