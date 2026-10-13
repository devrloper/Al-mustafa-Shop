# AL Mustafa Shop

A responsive demo e-commerce storefront built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide React.

## Features

- Responsive storefront with mobile accessories, gifts and stationery.
- Product search, category/price/stock/discount filters, sorting and load-more.
- Dynamic product detail pages and related products.
- Persistent browser cart and wishlist using localStorage.
- Cart quantities, stock bounds, PKR totals and estimated shipping.
- Validated demo checkout and order confirmation.
- Contact and newsletter forms with demo-only feedback.
- SEO metadata, keyboard-friendly controls, reduced-motion support and custom 404.
- Configurable contact placeholders and WhatsApp link.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Configuration

Set values in `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567
NEXT_PUBLIC_CONTACT_EMAIL=hello@yourdomain.com
```

Use a digits-only international phone number for WhatsApp. Replace placeholders with confirmed business contact information.

## Customize products

Edit `data/products.ts`. Each product has an `id`, unique `slug`, name, category, price in PKR, optional original price, rating, review count, stock count, description and image URL. For production, replace demo ratings and images with verified product data and licensed assets.

## Brand and styling

- Main colors and Tailwind theme: `tailwind.config.ts`
- Site-wide layout and components: `app/globals.css`
- Logo: `components/Logo.tsx`
- Homepage content: `app/page.tsx`

## Demo checkout notice

Checkout creates a browser-session demo order reference only. It does not contact a store, save orders to a database, reserve stock, send emails, or process payments. Cart and wishlist are stored in localStorage; do not store sensitive payment credentials there.

## Production integration checklist

Before launch, add a secure backend/database, server-side stock and price validation, real order persistence, privacy/terms/shipping/returns pages, verified contact details, email delivery, analytics with consent, and a supported Pakistani payment/Cash on Delivery provider. Never trust prices or totals sent from the browser.
