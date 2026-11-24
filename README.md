# STAR-X TECHNOLOGIES — Website Version 2

A GitHub Pages-ready company portfolio and software storefront, upgraded with customer-account and admin-dashboard demonstrations.

## What's new in Version 2
- Original responsive company website and SVG artwork retained
- Admin dashboard (`dashboard.html`) with product add/edit/delete
- Demo order list and order-status management
- JSON backup export/import for demo catalogue and orders
- Customer account page (`account.html`) with local demo registration/sign-in
- Customer demo order history
- Responsive dark navy/cyan dashboard styling
- No build tools or installation required

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. Open `dashboard.html` to test product and order management.
4. Open `account.html` to test a demo customer account.

## Publish on GitHub Pages
Upload the *contents* of this folder to the root of a GitHub repository. In **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`, then save.

## Important production limitations
This package is a static front-end and is suitable for GitHub Pages demonstrations. Browser localStorage is not a secure database. Demo registration stores credentials locally and is not real authentication. Product changes and demo orders are visible only in the same browser/device. Do not use this version to store real customer information or passwords.

Before real commercial launch, connect: (1) a backend database and server-side admin roles, (2) secure authentication, (3) a payment gateway that supports your chosen Malawi payment methods, (4) server-verified payment webhooks, and (5) protected software downloads with licence/order verification. Never place secret API keys, payment credentials, private download links, or admin passwords in GitHub Pages JavaScript.

## Contact details configured in the original site
- Email: starfrednota@gmail.com
- Phone/WhatsApp: +265 892 990 055
- Alternative: +265 992 732 627
- Bangwe, Blantyre, Malawi

## Project structure
- `index.html` — company website and storefront
- `dashboard.html` — admin dashboard demo
- `account.html` — customer account demo
- `styles.css`, `script.js` — original website styles and interactions
- `v2.css`, `v2.js`, `admin.js`, `account.js` — Version 2 interface and demo logic
- `assets/` — brand and software SVG illustrations
