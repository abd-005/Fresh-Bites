# Fresh Bites - Modern Restaurant Delivery App

A modern, fully-featured restaurant menu and delivery management application built with **Next.js 16** (App Router) and **Tailwind CSS**. The app features public menu browsing, secure admin authentication, item management, and a sleek dark-themed UI.

## 🎯 Overview

Fresh Bites is a high-performance restaurant delivery platform that allows users to browse menu items and admins to manage products. The app showcases modern web development practices including:

- **Server-Side Rendering** with Next.js 16
- **Protected Routes** with middleware authentication
- **Responsive Design** optimized for mobile and desktop
- **Dark Mode** support with `next-themes`
- **Real-time Notifications** with `react-hot-toast`
- **Async Data Fetching** with Suspense and loading states
- **Cookie-based Authentication** for admin access

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or higher
- npm or yarn

### Installation

1. **Clone & Navigate:**

   ```bash
   git clone <repo-url>
   cd fresh-bites
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run Development Server:**

   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:3000`

---

## 🗂️ Project Structure

```
fresh-bites/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── login/
│   │   │       └── page.jsx          # Admin login page
│   │   ├── (public)/
│   │   │   └── items/
│   │   │       ├── page.jsx          # Items list page with Suspense
│   │   │       ├── [id]/
│   │   │       │   └── page.jsx      # Item details page
│   │   │       └── loading.jsx       # Skeleton loaders
│   │   ├── (protected)/
│   │   │   └── add-item/
│   │   │       └── page.jsx          # Protected add item page
│   │   ├── layout.jsx                # Root layout
│   │   ├── page.jsx                  # Landing page (7 sections)
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   ├── auth/
│   │   │   └── ProtectedRoute.jsx    # Route protection wrapper
│   │   ├── cards/
│   │   │   └── ItemCard.jsx          # Item card component
│   │   ├── forms/
│   │   │   └── AddItemForm.jsx       # Add item form
│   │   ├── shareable/
│   │   │   ├── Navbar.jsx            # Navigation with auth state
│   │   │   └── Footer.jsx            # Footer with links
│   │   ├── skeletons/
│   │   │   └── ItemCardSkeleton.jsx  # Loading skeleton
│   │   └── themes/
│   │       ├── theme-provider.jsx    # Theme provider wrapper
│   │       └── ThemeToggle.jsx       # Dark mode toggle
│   └── middleware.js                 # Route protection middleware
├── public/
│   └── logo.png                      # Brand logo
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── README.md
```

---

## 📖 Route Summary

### Public Routes

| Route         | Description                                  |
| ------------- | -------------------------------------------- |
| `/`           | Landing page with 7 sections                 |
| `/items`      | Public menu items list with Suspense loading |
| `/items/[id]` | Individual item details page                 |

### Protected Routes

| Route       | Description            | Auth Required |
| ----------- | ---------------------- | ------------- |
| `/add-item` | Add new menu item form | ✅ Yes        |
| `/login`    | Admin login page       | ❌ No         |

---

## ✨ Implemented Features

### 1. **Landing Page**

- ✅ 7 complete sections:
  1.  Hero section with CTAs
  2.  Stats section (Daily Orders, Chefs, Clients, Cities)
  3.  CHEF&apos;S SPECIALS (Featured Items)
  4.  App Promo Section
  5.  Philosophy/Quality Section
  6.  Newsletter Subscription
  7.  Services/How We Serve Section
- ✅ Dark theme with modern glassmorphism
- ✅ Responsive navigation bar

### 2. **Authentication**

- ✅ Mock login with hardcoded credentials:
  - **Email:** `admin@freshbites.com`
  - **Password:** `password123`
- ✅ Cookie-based session management
- ✅ Middleware route protection for `/add-item`
- ✅ Login/Logout functionality in navbar
- ✅ Beautiful, user-friendly login form with UX feedback

### 3. **Public Menu System**

- ✅ Public items list page at `/items`
- ✅ Individual item details page at `/items/[id]`
- ✅ Fetches real data from external API
- ✅ Responsive grid layout (1-3 columns)
- ✅ Item cards with images, prices, ratings
- ✅ Smooth loading states with skeleton loaders

### 4. **Protected Add Item Page**

- ✅ Only accessible when logged in
- ✅ Form to add new dishes with:
  - Title, Price, Category
  - Food Image URL, Cuisine Type
  - Recipe Video URL (YouTube)
- ✅ Toast notifications on success/error
- ✅ Auto-redirect to items page after success
- ✅ Loading state with disabled button

### 5. **Theming & UI/UX**

- ✅ Dark mode toggle with `next-themes`
- ✅ Glassmorphism design with backdrop blur
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations and transitions
- ✅ Toast notifications for user feedback
- ✅ Accessibility improvements
- ✅ Professional color scheme (Yellow & Black)

### 6. **Navigation & Routing**

- ✅ Fixed navigation bar
- ✅ Dynamic navigation (Shows "Add Dish" only when logged in)
- ✅ Logout button in navbar (when authenticated)
- ✅ Mobile menu dropdown
- ✅ Active route indicators
- ✅ Shopping cart indicator (UI ready)

### 7. **Data Fetching & Performance**

- ✅ Server-side rendering with Next.js
- ✅ Suspense boundaries for loading states
- ✅ Error handling for API failures
- ✅ Skeleton loaders for better UX
- ✅ Cache management (`no-store` for fresh data)
- ✅ Optimized image loading

---

## 🔐 Authentication Flow

```
1. User clicks "LOGIN" in navbar
2. Redirected to /login page
3. Enters demo credentials (pre-filled for testing)
4. Form submits with validation
5. Server sets auth_token cookie (24h expiry)
6. Toast notification: "Welcome back, Admin!"
7. Auto-redirect to /items page (1.5s delay)
8. Navbar updates: Shows "Logout" and "Add Dish" link
9. Can now access /add-item (protected route)
10. Click "LOGOUT" to clear cookie and return to home
```

---

## 🛡️ Protected Routes

The `/add-item` route is protected by:

1. **Middleware** (`src/middleware.js`) - Intercepts unauthenticated requests
2. **ProtectedRoute Component** - Client-side guard with fallback
3. **Cookie Validation** - Checks for `auth_token` cookie

If unauthenticated user tries to access:

```
/add-item → Redirected to /login (via middleware)
```

---

## 📱 Key Components

### **Navbar** (`components/shareable/Navbar.jsx`)

- Fixed header with logo
- Responsive menu (desktop + mobile)
- Dark mode toggle
- Dynamic auth buttons (Login/Logout)
- Cart indicator
- Navigation links (Home, Menu, Add Dish)

### **ItemCard** (`components/cards/ItemCard.jsx`)

- Food image with hover zoom
- Title, category, price, rating
- "View Details" & "Add to Cart" buttons
- "Best Seller" badge
- Glassmorphic design

### **LoginForm** (`app/(auth)/login/page.jsx`)

- Email & password inputs with icons
- Show/hide password toggle
- Demo credentials info box
- Loading state with spinner
- Toast error messages
- Beautiful gradient background

### **AddItemForm** (`components/forms/AddItemForm.jsx`)

- 6 form fields for item data
- Toast notifications
- Form validation
- Loading state
- Auto-redirect on success

### **ItemDetailsPage** (`app/(public)/items/[id]/page.jsx`)

- Large hero image with gradient overlay
- Full item details
- YouTube video embed
- Sticky price card
- Category & cuisine info
- "Add to Cart" button

---

## 🎨 Color Palette & Theming

| Element       | Color              | Usage                    |
| ------------- | ------------------ | ------------------------ |
| Primary Brand | Yellow (`#EAB308`) | CTAs, highlights, badges |
| Background    | Black/Dark Stone   | Main background          |
| Text          | White/Light Gray   | Content text             |
| Accent        | White/10% opacity  | Borders, subtle elements |
| Success       | Green              | Success messages         |
| Error         | Red                | Error states             |

---

## 📦 Dependencies

```json
{
  "next": "16.1.3",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "next-themes": "^0.4.6",
  "react-hot-toast": "^2.6.0",
  "lucide-react": "^0.562.0",
  "react-icons": "^5.5.0",
  "tailwindcss": "^4"
}
```

---

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

---

## 🔧 Configuration

### Environment Variables

Currently uses public APIs. For backend integration, add to `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Tailwind CSS (v4)

Configured in `tailwind.config.js` with dark mode support.

### Next.js

- **App Router** (not Pages Router)
- **Server Components** for SSR
- **Dynamic Imports** for code splitting

---

## 📝 Demo Credentials

**For testing the protected routes:**

- **Email:** `admin@freshbites.com`
- **Password:** `password123`

These are displayed in the login form for easy reference.

---

## 🎯 Future Enhancements

- [ ] NextAuth.js integration (Google OAuth)
- [ ] Real database (MongoDB/PostgreSQL)
- [ ] Shopping cart functionality
- [ ] Order management system
- [ ] Payment integration (Stripe)
- [ ] Admin dashboard with analytics
- [ ] User reviews and ratings
- [ ] Search and filter functionality
- [ ] Email notifications
- [ ] SMS delivery tracking

---

## 🐛 Troubleshooting

### Issue: Items page shows "No Foods Available"

**Solution:** Check internet connection. External API may be unavailable.

### Issue: Login doesn't redirect

**Solution:** Check browser console for errors. Ensure cookies are enabled.

### Issue: Dark mode not persisting

**Solution:** Clear browser cache. `next-themes` uses localStorage.

### Issue: Protected route redirects to login

**Solution:** This is expected. Log in first at `/login`.

---

## 📄 License

This project is part of the SCIC-9-NextJS course. All rights reserved.

---

## 👨‍💻 Development Notes

- Built with **Next.js 16 App Router** (latest)
- **Server Components** reduce JavaScript bundle size
- **Suspense** provides seamless loading states
- **Middleware** ensures secure route protection
- **Tailwind CSS v4** for utility-first styling
- **Toast Notifications** for real-time feedback

---

## 📞 Support

For issues or questions, refer to the [Next.js Documentation](https://nextjs.org/docs).

---

**Last Updated:** January 2025  
**Status:** ✅ Production Ready
