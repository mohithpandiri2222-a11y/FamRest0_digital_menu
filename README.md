# FamResto — Cozy Mobile-First Digital QR Restaurant Menu

A modern, warm, family-restaurant digital menu website built with **React**, **Vite**, and **Tailwind CSS**, redesigned to match the **FamResto** visual identity and reference specifications.

Engineered specifically for tableside QR browsing and in-person dining ordering: families and guests scan a table QR code on their smartphone, browse categorized dishes, customize their cart, and display a customer-facing order summary token directly to the waiter.

---

## 🍽️ Key Features & Visual Design

- **Warm Family-Restaurant Identity**:
  - **Main background**: Warm ivory `#FFF8EC`
  - **Card background**: `#FFFFFF`
  - **Secondary background**: `#FFF0D9`
  - **Primary orange**: `#FF5A1F`
  - **Deep terracotta**: `#C94316`
  - **Main text**: Warm dark brown `#382216`
  - **Secondary text**: `#806A58`
  - **Borders**: `#F0DCC2`
  - **Veg indicator**: Leafy green `#4F8A43`
  - **Non-veg indicator**: Tomato red `#D94335`
  - **Highlight**: Golden yellow `#F6C94D`
- **Typography & Brand Wordmark**:
  - Handcrafted **FamResto** brush/script lettering and logo featuring an orange chef's hat with a delicate green leaf accent.
  - Taglines: *"Good Food • Happy People"* & *"Delicious Food, Great Moments, Together Always."*
  - Uses Google Fonts **Outfit** and **Caveat**.
- **Welcome Page**:
  - Inviting dining atmosphere, decorative botanical leaf sprigs framing the edges, steaming royal Biryani handi, large orange *"Explore Menu →"* pill button, and social media connect icons (Instagram, Facebook, WhatsApp).
- **Main Categories Page**:
  - Table greeting banner: *"Good Food Brings People Together ♥"* with Table #04 pill.
  - Filter chips: **All Categories**, **Pure Veg**, **Non-Veg**, and **Chef's Special**.
  - Compact, balanced 2-column image category cards:
    1. **Veg** (20 Items)
    2. **Non-Veg** (32 Items)
    3. **Drinks** (18 Items)
    4. **Desserts** (10 Items)
    5. **Chinese** (18 Items)
    6. **Snacks** (14 Items)
- **Subcategory & Dish Listing Pages**:
  - Category header banners with icon, title, and descriptive taglines.
  - **Veg Biryani** subcategory (`Veg → Biryani`) with exclusively vegetarian dishes (`Veg Biryani`, `Paneer Dum Biryani`, `Mushroom Biryani`).
  - **Non-Veg Biryani** subcategory (`Non-Veg → Biryani`) strictly non-vegetarian (`Hyderabadi Chicken Dum Biryani`, `Chicken Fry Biryani`, `Chicken Fry Biryani RCR-Special`).
  - **Soft Drinks** subcategory (`Drinks → Soft Drinks`) populated with Coke (300ml), Sprite (300ml), Fanta (300ml), Thums Up (300ml), and Limca (300ml) at ₹40.00.
  - Horizontal dish cards with food thumbnails, chef special star badges, dietary indicators, descriptions, Indian Rupee (`₹`) pricing, favorite heart button, and orange *"Add +"* button.
- **Shopping Cart & Persistent State**:
  - Fresh visitors start with **0 items and ₹0.00**.
  - LocalStorage persistence (`fam_resto_cart_v1` with legacy migration).
  - Floating orange cart summary pill bar above bottom navigation.
  - Empty cart state with cute steaming casserole illustration, leaf doodles, and *"Explore Menu →"* button.
  - Cart item quantity controls (cannot drop below 1; separate trash remove action).
  - Cooking notes accordion for special chef instructions.
  - Itemized bill breakdown with subtotal and GST.
  - Prominent orange *"Show to Waiter"* customer-facing order summary token (100% static, client-side only).
- **Bottom Navigation**:
  - Fixed across all menu screens: **Menu**, **Search**, **Cart** (with count badge), and **Table #04**.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (Netlify deploy ready)
npm run build

# Run automated validation test suite
node scripts/verify_app.cjs
```

---

## 🔒 Constraints & Architecture

- **100% Static Frontend**: Zero backend, database, authentication, or payment integration.
- **Display-Only Ordering**: Built for physical table dine-in ordering where customers show their screen to the server.
- **Deploy-Ready**: Complete with Netlify SPA redirects (`dist/_redirects`, `netlify.toml`).
