# STAR-X TECHNOLOGIES — Website Version 3 (Supabase Starter)

This is an upgrade of Version 2 that makes the first Supabase connection steps easier.

## What's included
- Original STAR-X responsive portfolio/storefront and SVG artwork
- New `SUPABASE_SETUP.html` visual setup guide
- New `supabase-config.js` file: paste the Supabase Project URL and public publishable key here
- New `supabase-client.js` file: initializes the official Supabase browser client
- `account.html` and `account.js` now use Supabase Authentication for customer registration/sign-in; passwords are not stored in localStorage
- `supabase-setup.sql` creates starter `products` and `enquiries` tables with Row Level Security policies
- Admin dashboard is clearly marked as a local demo, not a secure backend admin console

## Easiest setup
1. Extract the ZIP.
2. Open `SUPABASE_SETUP.html` in your browser.
3. Follow its steps in order.
4. Paste only the Project URL and Publishable key into `supabase-config.js`.
5. Run `supabase-setup.sql` in Supabase SQL Editor.
6. Configure Supabase Authentication Site URL and Redirect URLs for your GitHub Pages address.
7. Upload the contents of this folder to the root of your GitHub repository.

## Security
The Project URL and publishable key are public browser configuration values. They are safe to include in a static website only when Row Level Security is enabled and policies are correctly configured. Never put a Supabase secret key, legacy service_role key, database password, payment secret, or admin password in this repository.

## Important remaining work
This is a Supabase connection starter, not a complete commercial ecommerce backend.
- Product display on the homepage is still the existing static catalogue.
- The admin dashboard remains local demo functionality and is NOT connected to Supabase.
- Enquiry form and enquiry cart still open WhatsApp; they do not yet write to the Supabase enquiries table.
- Customer authentication is connected, but customer order history is not yet implemented.
- No online payment gateway, payment webhooks, automatic licence issuance, protected software delivery, or server-side admin roles are included.
- Do not store real customer/payment data in the demo dashboard. Build and test server-side features before commercial launch.

## Original contact details
- Email: starfrednota@gmail.com
- Phone/WhatsApp: +265 892 990 055
- Alternative: +265 992 732 627
- Bangwe, Blantyre, Malawi
