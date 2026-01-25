# Fresh Bites - Application Flow Diagram & Architecture

## 🗺️ User Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Fresh Bites App                           │
└─────────────────────────────────────────────────────────────────┘

                    ┌──────────────────────┐
                    │   Landing Page (/)   │
                    │   • Hero Section     │
                    │   • Stats Section    │
                    │   • Chef's Specials  │
                    │   • App Promo        │
                    │   • Philosophy       │
                    │   • Newsletter       │
                    │   • Services         │
                    └──────────────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
        ┌──────▼──────┐      ┌────────▼─────────┐
        │   Browse    │      │     Click Login  │
        │   Menu (/   │      │                  │
        │   items)    │      └────────┬─────────┘
        │             │               │
        │ • View Items│    ┌──────────▼──────────┐
        │ • Load Data │    │   Login Page (/auth)│
        │ • Sort      │    │ • Email Input       │
        │ • Search    │    │ • Password Input    │
        └──────┬──────┘    │ • Submit Button     │
               │            │ • Demo Credentials  │
               │            └────────┬────────────┘
               │                     │
        ┌──────▼──────┐      ┌───────▼─────────┐
        │ Item Details│      │  Validate &     │
        │ Page (id)   │      │  Set Cookie     │
        │             │      │                 │
        │ • Full Info │      └───────┬─────────┘
        │ • Image     │              │
        │ • Video     │      ┌───────▼──────────┐
        │ • Price     │      │  Menu Page (/    │
        └─────────────┘      │  items) - LOGGED │
                             │  IN              │
                             │                  │
                             │ ✅ Add Dish Link │
                             │ ✅ Logout Button │
                             └────────┬─────────┘
                                      │
                             ┌────────▼──────────┐
                             │  Add Item Page    │
                             │  (/add-item)      │
                             │  [PROTECTED]      │
                             │                   │
                             │ • Title Input     │
                             │ • Price Input     │
                             │ • Category Input  │
                             │ • Image URL Input │
                             │ • Cuisine Input   │
                             │ • Video URL Input │
                             │ • Submit Button   │
                             └────────┬──────────┘
                                      │
                             ┌────────▼──────────┐
                             │   Add Success     │
                             │   Toast Appear    │
                             │   Redirect to     │
                             │   Menu Page       │
                             └───────────────────┘
```

---

## 🔐 Authentication & Route Protection Flow

```
User Request
    │
    ├─→ Middleware Check (src/middleware.js)
    │   │
    │   ├─→ Path = /add-item ?
    │   │   │
    │   │   ├─→ YES → Has auth_token cookie?
    │   │   │         │
    │   │   │         ├─→ YES → ✅ Allow Access
    │   │   │         │
    │   │   │         └─→ NO → ❌ Redirect /login
    │   │   │
    │   │   └─→ NO → ✅ Allow Access
    │   │
    │   └─→ Continue to Next
    │
    └─→ Component Rendering (Client-side)
        │
        ├─→ ProtectedRoute Component?
        │   │
        │   ├─→ Check Cookie in Browser
        │   │
        │   ├─→ Token Found?
        │   │   │
        │   │   ├─→ YES → Render Component
        │   │   │
        │   │   └─→ NO → Show "Access Denied"
        │   │
        │   └─→ Fallback to Login
        │
        └─→ Display Page
```

---

## 📊 Component Architecture

```
RootLayout
│
├─── ThemeProvider (next-themes)
│    │
│    ├─── Navbar.jsx
│    │    ├─ Logo
│    │    ├─ Navigation Links (conditional)
│    │    ├─ Theme Toggle
│    │    ├─ Cart Icon
│    │    ├─ Auth Buttons (Login/Logout)
│    │    └─ Mobile Menu
│    │
│    ├─── Main Content (children)
│    │    ├─ /page.jsx (Landing)
│    │    ├─ /(public)/items/page.jsx (Menu)
│    │    ├─ /(public)/items/[id]/page.jsx (Details)
│    │    ├─ /(auth)/login/page.jsx (Login)
│    │    └─ /(protected)/add-item/page.jsx (Protected)
│    │
│    ├─── Toaster (react-hot-toast)
│    │    └─ Toast Notifications
│    │
│    └─── Footer.jsx
│         ├─ Logo
│         ├─ Links
│         ├─ Social Icons
│         └─ Contact Info
│
└─── Middleware (src/middleware.js)
     └─ Route Protection
```

---

## 🔄 Data Flow Diagram

```
┌─────────────────────────────────────┐
│     Items Page (/items)             │
│   (Server Component)                │
└────────────┬────────────────────────┘
             │
    ┌────────▼────────┐
    │  Fetch Data     │
    │  getFoods()     │
    └────────┬────────┘
             │
    ┌────────▼────────────────────────┐
    │  API Call                        │
    │  https://taxi-kitchen-api...    │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────┐
    │  Parse JSON     │
    │  Extract items  │
    └────────┬────────┘
             │
    ┌────────▼────────────────────────┐
    │  Suspense Boundary              │
    │  • Show skeleton loaders         │
    │  • Stream content as it loads    │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────────────────────┐
    │  Render Grid                    │
    │  • ItemCard × N items           │
    │  • Responsive columns           │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────────────────────┐
    │  Browser Display                │
    │  • Fully loaded menu            │
    │  • Interactive cards            │
    └─────────────────────────────────┘
```

---

## 🔑 Key Technical Flows

### **Login Flow**

```
User Input (email/password)
        ↓
Form Validation
        ↓
Match Demo Credentials?
        ├→ YES: Set auth_token cookie + toast
        ├→ NO: Show error toast
        ↓
Redirect to /items
        ↓
Navbar Updates
        ├→ Show "Logout" button
        ├→ Show "Add Dish" link
        ↓
Session Active ✅
```

### **Add Item Flow**

```
User Accesses /add-item
        ↓
Middleware Checks:
├→ Has auth_token?
│  ├→ YES → Continue
│  └→ NO → Redirect /login
        ↓
Form Displayed
        ↓
User Fills Fields
        ↓
Form Submitted
        ↓
Validation Check
├→ All fields valid?
│  ├→ YES → Continue
│  └→ NO → Show errors
        ↓
API POST Request
        ↓
Success?
├→ YES: Toast + Redirect /items
└→ NO: Error toast + Stay on form
```

### **Dark Mode Flow**

```
User Clicks Theme Toggle
        ↓
next-themes Updates HTML class
        ↓
Tailwind CSS applies dark: styles
        ↓
localStorage Saves Preference
        ↓
Page Transition Smoothly
        ↓
Preference Persists
(across sessions & page reloads)
```

---

## 📁 File Structure with Dependencies

```
src/
│
├── middleware.js
│   └─ Used by: App Router (all routes)
│
├── app/
│   │
│   ├── layout.jsx
│   │   ├─ Imports: ThemeProvider, Navbar, Footer
│   │   └─ Wraps: All pages
│   │
│   ├── globals.css
│   │   └─ Used by: All components
│   │
│   ├── page.jsx (Landing Page)
│   │   ├─ Imports: Icons from lucide-react, Link
│   │   └─ Displays: 7 sections
│   │
│   ├── (auth)/
│   │   └── login/
│   │       └── page.jsx (Login Page)
│   │           ├─ Imports: useRouter, useState, toast, Icons
│   │           ├─ Sets: auth_token cookie
│   │           └─ Redirects: /items
│   │
│   ├── (public)/
│   │   └── items/
│   │       ├── page.jsx (Menu Page)
│   │       │   ├─ Imports: ItemCard, ItemCardSkeleton, Suspense
│   │       │   ├─ Fetches: External API
│   │       │   └─ Shows: Grid of items
│   │       │
│   │       ├── loading.jsx
│   │       │   └─ Fallback UI for Suspense
│   │       │
│   │       └── [id]/
│   │           └── page.jsx (Item Details)
│   │               ├─ Imports: Dynamic route params
│   │               ├─ Fetches: Single item by ID
│   │               └─ Shows: Full item info + video
│   │
│   └── (protected)/
│       └── add-item/
│           └── page.jsx (Add Item Page)
│               ├─ Imports: Proxy, AddItemForm
│               ├─ Protected: By Proxy component
│               └─ Shows: Form for new items
│
└── components/
    │
    ├── auth/
    │   └── ProtectedRoute.jsx
    │       ├─ Imports: useRouter, usePathname
    │       ├─ Checks: auth_token cookie
    │       └─ Guards: Protected pages
    │
    ├── cards/
    │   └── ItemCard.jsx
    │       ├─ Props: food object
    │       ├─ Displays: Food image, title, price, etc.
    │       └─ Used by: Items page
    │
    ├── forms/
    │   └── AddItemForm.jsx
    │       ├─ Imports: useState, useRouter, toast
    │       ├─ Fields: Title, price, category, image, etc.
    │       ├─ Validates: Form inputs
    │       └─ Used by: Add item page
    │
    ├── shareable/
    │   ├── Navbar.jsx
    │       ├─ State: isOpen (mobile menu), isAuthed
    │       ├─ Checks: auth_token for conditional rendering
    │       ├─ Imports: ThemeToggle, Icons
    │       └─ Used by: layout.jsx (all pages)
    │   │
    │   └── Footer.jsx
    │       ├─ Imports: Icons, Links
    │       └─ Used by: layout.jsx (all pages)
    │
    ├── skeletons/
    │   └── ItemCardSkeleton.jsx
    │       ├─ Shows: Placeholder while loading
    │       └─ Used by: Items page (Suspense fallback)
    │
    └── themes/
        ├── theme-provider.jsx
        │   └─ Wraps: Root with next-themes
        │
        └── ThemeToggle.jsx
            ├─ Imports: next-themes
            ├─ Toggles: Light/dark mode
            └─ Used by: Navbar, Footer
```

---

## 🔗 Request/Response Cycle

### **Menu Page Load**

```
1. Browser: GET /items
2. Server: Render page component
3. Server: Start async data fetch
4. Server: Suspend (wait for data)
5. Server: Stream Suspense fallback
6. Browser: Display skeleton loaders
7. Server: Data arrives
8. Server: Render actual items
9. Browser: Replace skeletons with items
10. Browser: Page interactive ✅
```

### **Add Item Submission**

```
1. User: Fill form + click submit
2. Client: Validate inputs
3. Client: Show loading spinner
4. Client: POST to /api/v1/foods
5. Server: Receive request
6. Server: Validate data
7. Server: Save to database
8. Server: Return response
9. Client: Receive response
10. Client: Show success toast
11. Client: Clear form
12. Client: Redirect to /items
13. Browser: Render updated menu ✅
```

---

## 🎯 Key Design Patterns Used

### **Server Components**

- Pages that don't need interactivity
- Direct database access (ready for future)
- Smaller JS bundle

### **Client Components**

- Pages with forms (`"use client"`)
- Pages with state (useState)
- Pages with event handlers

### **Suspense Boundaries**

- Stream content as it loads
- Show fallback UI while loading
- Better perceived performance

### **Middleware**

- Centralized route protection
- Runs before page renders
- Intercepts unauthorized requests

### **Component Composition**

- Reusable components (ItemCard)
- Composition over inheritance
- Props-based customization

---

## 📈 State Management Flow

```
Global State (Cookies):
- auth_token → Shared across tabs/windows
- theme (localStorage) → Persistent across sessions

Component State (React):
- isOpen (Navbar) → Mobile menu toggle
- isAuthed (Navbar) → Login status
- loading (Forms) → Form submission state
- showPassword (Login) → Password visibility

Server State (Async):
- Foods list → Fetched from API
- Single food item → Fetched by ID
```

---

## 🚀 Performance Considerations

```
Optimization         Implementation
─────────────────────────────────────────
Code Splitting       Route-based splitting
Lazy Loading         Suspense boundaries
Image Optimization   Ready for next/image
CSS Optimization     Tailwind CSS + PurgeCSS
Caching              cache: "no-store" for fresh data
Bundle Size          Server components reduce JS
Hydration            Selective hydration
```

---

## 🔒 Security Layers

```
Layer 1: Middleware
- Intercepts requests
- Redirects unauthenticated users

Layer 2: Component
- ProtectedRoute checks cookie
- Shows fallback UI

Layer 3: Validation
- Client-side form validation
- Server-side data validation (ready)

Layer 4: Secrets
- No sensitive data in client code
- Environment variables (future)
```

---

This architecture ensures:

- ✅ Clean separation of concerns
- ✅ Scalability for future features
- ✅ Security at multiple levels
- ✅ Performance optimizations
- ✅ Developer experience
- ✅ Maintainability
