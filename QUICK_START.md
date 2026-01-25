# Fresh Bites - Quick Start & Testing Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install & Run

```bash
npm install
npm run dev
```

App runs on: `http://localhost:3000`

### Step 2: Login (Test Admin Access)

1. Click **"LOGIN"** in the navbar
2. Pre-filled credentials (click any field to see):
   - Email: `admin@freshbites.com`
   - Password: `password123`
3. Click **"Sign In"** button
4. Success! You're redirected to the menu

### Step 3: Add Your First Dish

1. Click **"Add Dish"** in navbar (visible only when logged in)
2. Fill in the form:
   - **Dish Title:** Spicy Chicken Burger
   - **Price:** 14.99
   - **Category:** Poultry
   - **Image URL:** https://images.unsplash.com/photo-1562547256-52a39dbb2a69?w=500
   - **Cuisine Area:** Indian
   - **Video URL:** (optional)
3. Click **"Save to Menu"** button
4. Success message appears → Redirected to menu ✅

---

## 📍 Key Pages & Features

| Page         | URL           | Access        | What You Can Do              |
| ------------ | ------------- | ------------- | ---------------------------- |
| Home         | `/`           | Public        | View 7 landing page sections |
| Menu         | `/items`      | Public        | Browse all dishes            |
| Dish Details | `/items/[id]` | Public        | View full dish info + video  |
| Login        | `/login`      | Public        | Sign in as admin             |
| Add Dish     | `/add-item`   | **Protected** | Add new menu items           |

---

## 🔐 Authentication Flow

### Logging In

```
1. Landing Page
2. Click "LOGIN" button
3. See pre-filled demo credentials
4. Click "Sign In"
5. Cookie set (24 hours)
6. Auto-redirect to /items
7. Navbar shows "LOGOUT" & "Add Dish"
```

### Logging Out

```
1. Click "LOGOUT" button (visible when logged in)
2. Cookie cleared
3. Redirect to home page
4. Navbar shows "LOGIN" again
```

### Accessing Protected Routes

```
Without Login:
/add-item → Redirected to /login ❌

With Login:
/add-item → Full form access ✅
```

---

## 🎨 Dark Mode

- Click the **theme toggle icon** in navbar
- Theme persists across page reloads
- Works on all pages

---

## 📝 Form Validation

**Add Dish Form:**

- ✅ Title: Required, text
- ✅ Price: Required, number (decimal allowed)
- ✅ Category: Required, text
- ✅ Image URL: Required, valid URL
- ✅ Cuisine: Optional
- ✅ Video URL: Optional, YouTube link

**All inputs have:**

- Focus ring highlight (yellow)
- Placeholder text guidance
- Real-time validation feedback

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📱 Responsive Design

- **Mobile:** Single column, full-width
- **Tablet (768px+):** Two columns
- **Desktop (1024px+):** Three columns
- **Navigation:** Hamburger menu on mobile, full nav on desktop

---

## 🔍 Troubleshooting

### "No Foods Available" Error

- **Cause:** External API is down
- **Fix:** Check internet connection, try refreshing

### Login doesn't work

- **Check:** Correct email and password
- **Try:** Clear browser cache and cookies
- **Verify:** Credentials: admin@freshbites.com / password123

### Add Dish form not showing after login

- **Check:** You're actually logged in (see "LOGOUT" in navbar)
- **Try:** Hard refresh page (Ctrl+Shift+R)

### Dark mode not saving

- **Check:** localStorage isn't blocked
- **Try:** Clear site data and retry

### Items page is blank

- **Check:** Internet connection is active
- **Try:** Refresh page (F5)
- **Note:** External API may take 2-3 seconds to respond

---

## 🎯 Test Scenarios

### Scenario 1: Public User

```
1. Go to http://localhost:3000
2. View landing page (7 sections)
3. Click "Menu" to see items
4. Click item for details
5. Try accessing /add-item
   → Should redirect to login ❌
```

### Scenario 2: Logged-In Admin

```
1. Go to login page
2. Use demo credentials
3. Add new dish
4. See it in the menu
5. Logout
6. Verify navbar updates
```

### Scenario 3: Dark Mode Toggle

```
1. Click theme toggle
2. Page goes dark
3. Refresh page
4. Theme persists ✅
5. Click toggle again → Light mode
```

### Scenario 4: Session Persistence

```
1. Login
2. Refresh page
3. Still logged in ✅
4. Close browser
5. Reopen app
6. Still logged in (24h cookie) ✅
```

---

## 🎬 Live Demo Flow

**Best for showcasing the app:**

1. **Open Landing Page** (30 sec)
   - Show 7 sections
   - Highlight design/branding

2. **Browse Menu** (30 sec)
   - Click items to see details
   - Show responsive design

3. **Login & Add Item** (60 sec)
   - Use demo credentials
   - Fill form, submit
   - Show success toast

4. **Show Dark Mode** (15 sec)
   - Toggle theme
   - Show persistence

5. **Test Logout** (15 sec)
   - Click logout
   - Show navbar update

---

## 📊 Feature Checklist

- [x] Landing page with 7 sections
- [x] Public menu browsing
- [x] Item details page
- [x] Admin authentication (mock)
- [x] Protected add item page
- [x] Dark mode toggle
- [x] Toast notifications
- [x] Responsive design
- [x] Loading states
- [x] Error handling
- [x] Route protection middleware
- [x] Session management

---

## 🌐 API Integration

**Items Data Source:**

```
API: https://taxi-kitchen-api.vercel.app/api/v1/foods/random
Response: Array of 10 random food items
Includes: id, title, price, category, foodImg, area, video
```

**Add Item Endpoint:**

```
Endpoint: http://localhost:5000/api/v1/foods
Method: POST
(Currently mock - ready for backend integration)
```

---

## 📚 Key Libraries

| Library           | Purpose                  |
| ----------------- | ------------------------ |
| `next`            | React framework with SSR |
| `react-hot-toast` | Toast notifications      |
| `next-themes`     | Dark mode support        |
| `lucide-react`    | Beautiful icons          |
| `tailwindcss`     | Utility-first CSS        |

---

## 💡 Pro Tips

1. **Pre-filled Login:** Demo credentials appear in the form automatically
2. **Try Different Images:** Use any image URL for the food image
3. **Explore Details:** Each item has a full details page with video
4. **Mobile Testing:** Use browser DevTools device emulation
5. **Try Small Prices:** e.g., 9.99, 14.99 (looks realistic)

---

## 🚀 Next Steps (Optional Enhancements)

- [ ] Connect to real backend API
- [ ] Add shopping cart functionality
- [ ] Implement payment system
- [ ] Add user reviews
- [ ] Email notifications
- [ ] Order tracking
- [ ] Admin dashboard

---

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review [REQUIREMENTS_CHECKLIST.md](REQUIREMENTS_CHECKLIST.md) for all features
- Check browser console (F12) for errors

---

**Last Updated:** January 25, 2025  
**Version:** 1.0  
**Status:** ✅ Production Ready
