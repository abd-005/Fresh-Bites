# Fresh Bites - Modern Restaurant App

A mobile-first restaurant management application built with Next.js 16 and Express.js.

## Tech Stack
- **Frontend:** Next.js 16 (App Router), Tailwind CSS, next-themes (Dark Mode), Lucide Icons.
- **Backend:** Express.js (Mock API).
- **Auth:** Cookie-based mock authentication.

## Initial Setup
1. **Backend:**
   - `cd backend && npm install`
   - `node server.js` (Runs on port 5000)
2. **Frontend:**
   - `cd frontend && npm install`
   - `npm run dev` (Runs on port 3000)

## Implemented Features
- **Theming:** Toggle between Light and Dark mode using `next-themes`.
- **Responsive Design:** 7-section landing page optimized for mobile.
- **Product Management:** Public list/details views and a protected "Add Item" form.
- **Route Protection:** Middleware blocks `/add-item` unless a mock auth cookie is present.