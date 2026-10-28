# ezyPey Landing Page — React + Vite

Responsive marketing landing page for a restaurant billing SaaS.

## Run locally
1. Install Node.js 18 or newer.
2. Extract the ZIP and open this folder in a terminal.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```
The generated production site is in `dist/`.

## Connect it to your app
In `src/App.jsx`, change `loginUrl` and `registerUrl` to match your existing React Router routes or authentication flow. If your app uses buttons/state rather than `/login` and `/register`, replace the links with your auth callbacks.

## Before publishing
- Replace the sample pricing with your real plan prices and billing terms.
- Replace the demo button notice with a real demo video or modal.
- Add your official privacy policy, terms, support details and business contact information.
- Connect sign-up and login to your actual backend; this landing page intentionally does not fake authentication or payment processing.
- The QR and dashboard are decorative UI mockups only, not real payment information.
- Run an end-to-end test, accessibility check, security review and production build before deploying.
