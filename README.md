# =====================================
# New Salman Electronics Website
# E-commerce + Owner Contact (Brevo API)
# =====================================

## Quick Start

1. Install dependencies:
   ```
   npm install
   ```

2. Configure Brevo in `.env`:
   - Sign up at https://www.brevo.com (free plan)
   - Get API Key: https://app.brevo.com/settings/keys/api (looks like `xkeysib-...`)
   - Verify the sender email: https://app.brevo.com/senders/
     (Sender email MUST be verified in Brevo, otherwise emails are blocked)
   - Set `BREVO_API_KEY`, `BREVO_SENDER_EMAIL`, `OWNER_EMAIL` in `.env`

3. Start the server:
   ```
   npm start
   ```

4. Open http://localhost:3000

## Why Brevo API (not SMTP)?
Render / Railway jaise hosting platforms SMTP port 587 block kartay hain.
Brevo ka Transational Email API (HTTPS port 443) use karta hai is project
men, jo hosting pe bhi bina block chalta hai.

## Features

- Browse products by category (click category card -> modal)
- Compare prices across brands with feature comparison
- Add to cart, update quantity, remove
- Checkout: order goes to WhatsApp AND email (owner) via Brevo
- Contact/Complaint form: message goes to owner email via Brevo

## APIs

| Endpoint | Purpose |
|----------|---------|
| POST `/api/order` | New order notification to owner |
| POST `/api/contact` | Complaint / feedback to owner |

If the server is NOT running (e.g. file opened directly), the site
automatically falls back to sending orders/messages via WhatsApp.

## Email Settings (.env)
```
BREVO_API_KEY=your-brevo-api-key-here
BREVO_SENDER_EMAIL=razakhan9257@gmail.com   # must be verified in Brevo
OWNER_EMAIL=razakhan9257@gmail.com          # where emails arrive
PORT=3000
```

## Deploy on Render (free)

Repo mein `render.yaml` already hai — Render ka Blueprint. Steps:

1. Sign up at https://render.com (free)
2. Go to https://render.com/new/render-blueprint
3. Connect GitHub, install Render on the repo `sabirsikandar4599/salman-electronics`
4. Click **Apply Blueprint** / Deploy
5. When asked, paste your real `BREVO_API_KEY`
6. Done - Render aap ko live URL dega, e.g. `https://salman-electronics.onrender.com`

Notes:
- Free plan spins down after 15 min idle, automatically wakes on visit.
- SMTP is blocked on Render, so this project uses **Brevo HTTP API**
  (port 443) - already handled in `server.js`.
- `PORT` is auto-injected by Render; server defaults to 3000 locally.