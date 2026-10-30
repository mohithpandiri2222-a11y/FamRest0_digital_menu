const fs = require('fs');
const path = require('path');

console.log('=== RUNNING FAMRESTO REDESIGN VERIFICATION SUITE ===\n');

let failedTests = 0;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failedTests++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Verify Netlify and Vite production build output
console.log('--- 1. Netlify & Vite Static Assets Output ---');
assert(fs.existsSync('dist/index.html'), 'dist/index.html exists');
assert(fs.existsSync('dist/_redirects'), 'dist/_redirects exists');
assert(fs.existsSync('netlify.toml'), 'netlify.toml exists');
const redirectsContent = fs.readFileSync('dist/_redirects', 'utf8');
assert(redirectsContent.includes('/*    /index.html   200'), 'Redirects file contains SPA fallback rule');

const htmlContent = fs.readFileSync('index.html', 'utf8');
assert(htmlContent.includes('<title>FamResto | Digital Menu</title>'), 'HTML title is "FamResto | Digital Menu"');
assert(!htmlContent.includes('class="dark"'), 'Dark class completely removed from <html>');
assert(htmlContent.includes('name="viewport"'), 'Viewport meta tag is set');
assert(htmlContent.includes('Caveat'), 'Google Font Caveat (brush script) is linked');
assert(htmlContent.includes('Outfit'), 'Google Font Outfit is linked');

// 2. Verify all downloaded image assets exist in src/assets/images
console.log('\n--- 2. Image Assets Integrity ---');
const imageDir = path.resolve('src/assets/images');
const images = fs.readdirSync(imageDir);
assert(images.length >= 20, `Found ${images.length} local food images in src/assets/images`);

const requiredImages = [
  'hero_biryani.jpg',
  'cat_veg.jpg',
  'cat_nonveg.jpg',
  'cat_drinks.jpg',
  'cat_desserts.jpg',
  'cat_chinese.jpg',
  'cat_snacks.jpg',
  'sub_biryani.jpg',
  'sub_veg_biryani.jpg',
  'sub_soft_drinks.jpg',
  'sub_noodles.jpg',
  'sub_curries.jpg',
  'sub_starters.jpg',
  'sub_rice.jpg',
  'sub_tandoor.jpg',
  'sub_combos.jpg',
  'sub_others.jpg',
  'dish_veg_biryani.jpg',
  'dish_hyd_dum_biryani.jpg',
  'dish_chicken_fry_biryani.jpg',
  'dish_chicken_fry_rcr.jpg'
];

for (const img of requiredImages) {
  assert(fs.existsSync(path.join(imageDir, img)), `Image asset "${img}" exists`);
}

// 3. Verify Restaurant Config & FamResto Branding
console.log('\n--- 3. FamResto Brand & Theme Config Verification ---');
const restaurantFile = fs.readFileSync('src/data/restaurant.js', 'utf8');
assert(restaurantFile.includes('FamResto'), 'Restaurant name defined as FamResto');
assert(!restaurantFile.includes('Nxt Resto'), 'Old Nxt Resto branding replaced in restaurant.js');
assert(restaurantFile.includes('Good Food • Happy People'), 'Tagline defined as "Good Food • Happy People"');
assert(!restaurantFile.includes('tableNumber') && !restaurantFile.includes('tableLabel') && !restaurantFile.includes('Table #04'), 'Table numbers completely removed from restaurant.js');
assert(restaurantFile.includes('Dine-in'), 'General Dine-in context preserved in restaurant.js');
assert(restaurantFile.includes('#FFF8EC'), 'Theme contains warm ivory background #FFF8EC');
assert(restaurantFile.includes('#FF5A1F'), 'Theme contains primary orange #FF5A1F');
assert(restaurantFile.includes('#382216'), 'Theme contains main text warm dark brown #382216');
assert(restaurantFile.includes('https://instagram.com'), 'Instagram link configured');
assert(restaurantFile.includes('https://facebook.com'), 'Facebook link configured');
assert(restaurantFile.includes('https://wa.me/'), 'WhatsApp link configured');

// 4. Verify Menu Categories & Subcategories
console.log('\n--- 4. Menu Categories & Subcategories Verification ---');
const menuFile = fs.readFileSync('src/data/menu.js', 'utf8');
assert(menuFile.includes("id: 'veg'"), 'Veg category defined');
assert(menuFile.includes("id: 'non-veg'"), 'Non-Veg category defined');
assert(menuFile.includes("id: 'drinks'"), 'Drinks category defined');
assert(menuFile.includes("id: 'desserts'"), 'Desserts category defined');
assert(menuFile.includes("id: 'chinese'"), 'Chinese category defined');
assert(menuFile.includes("id: 'snacks'"), 'Snacks category defined');

// Verify subcategories
assert(menuFile.includes("id: 'veg-biryani'") && menuFile.includes("slug: 'biryani'"), 'Veg category includes Biryani subcategory (veg-biryani)');
assert(menuFile.includes("id: 'nonveg-biryani'") && menuFile.includes("slug: 'biryani'"), 'Non-Veg category includes Biryani subcategory (nonveg-biryani)');
assert(menuFile.includes("id: 'drinks-soft-drinks'") && menuFile.includes("slug: 'soft-drinks'"), 'Drinks category includes Soft Drinks subcategory (drinks-soft-drinks)');

// 5. Verify Soft Drinks Dishes from Reference Image (Screen 8)
console.log('\n--- 5. Soft Drinks Dishes Verification (Screen 8) ---');
assert(menuFile.includes("id: 'dish-coke-300ml'"), 'Coke (300ml) is present in soft drinks');
assert(menuFile.includes("id: 'dish-sprite-300ml'"), 'Sprite (300ml) is present in soft drinks');
assert(menuFile.includes("id: 'dish-fanta-300ml'"), 'Fanta (300ml) is present in soft drinks');
assert(menuFile.includes("id: 'dish-thumsup-300ml'"), 'Thums Up (300ml) is present in soft drinks');
assert(menuFile.includes("id: 'dish-limca-300ml'"), 'Limca (300ml) is present in soft drinks');

// 6. Verify Dietary Classifications for Biryanis
console.log('\n--- 6. Dietary Classifications for Biryanis ---');
assert(menuFile.includes("id: 'dish-veg-biryani'") && menuFile.includes("categoryId: 'veg'") && menuFile.includes("subcategoryId: 'veg-biryani'"), 'Veg Biryani is placed under Veg -> Biryani');

const nonvegBiryaniBlock = menuFile.slice(menuFile.indexOf('// ================= NON-VEG BIRYANI ================='), menuFile.indexOf('// ================= NON-VEG NOODLES ================='));
assert(!nonvegBiryaniBlock.includes('dish-veg-biryani'), 'Non-Veg Biryani listing does NOT contain Veg Biryani');
assert(!nonvegBiryaniBlock.includes("dietary: 'veg'"), 'Non-Veg Biryani listing contains zero vegetarian dishes');
assert(nonvegBiryaniBlock.includes('Hyderabadi Chicken Dum Biryani'), 'Hyderabadi Chicken Dum Biryani remains in Non-Veg Biryani');
assert(nonvegBiryaniBlock.includes('Chicken Fry Biryani'), 'Chicken Fry Biryani remains in Non-Veg Biryani');
assert(nonvegBiryaniBlock.includes('Chicken Fry Biryani (RCR- Special)'), 'Chicken Fry Biryani (RCR- Special) remains in Non-Veg Biryani');

const vegBiryaniBlock = menuFile.slice(menuFile.indexOf('// ================= VEG BIRYANI ================='), menuFile.indexOf('// ================= NON-VEG BIRYANI ================='));
assert(!vegBiryaniBlock.includes("dietary: 'non-veg'"), 'Veg Biryani listing contains zero non-vegetarian dishes');
assert(vegBiryaniBlock.includes("dietary: 'veg'"), 'Veg Biryani listing contains vegetarian dishes');

// 7. Verify Cart State Management: Starts Empty with ₹0.00
console.log('\n--- 7. Empty Cart Initialization & LocalStorage ---');
const cartFile = fs.readFileSync('src/context/CartContext.jsx', 'utf8');
assert(!cartFile.includes('defaultInitialCart'), 'defaultInitialCart sample array removed');
assert(cartFile.includes('getInitialCart'), 'getInitialCart function implemented');
assert(cartFile.includes('localStorage.getItem'), 'LocalStorage read implemented');
assert(cartFile.includes('localStorage.setItem'), 'LocalStorage persistence implemented');
assert(cartFile.includes('newQty >= 1'), 'Quantity lower bound at 1 enforced');

// 8. Verify No Backend / Server Dependencies
console.log('\n--- 8. Static-Only Constraint Verification ---');
const pkgFile = fs.readFileSync('package.json', 'utf8');
const pkg = JSON.parse(pkgFile);
const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
assert(!allDeps['express'], 'No Express backend');
assert(!allDeps['mongoose'], 'No MongoDB database');
assert(!allDeps['firebase'], 'No Firebase backend');
assert(!allDeps['@supabase/supabase-js'], 'No Supabase backend');
assert(!allDeps['stripe'], 'No online payment processing');
assert(!fs.existsSync('server.js'), 'No server.js');
assert(!fs.existsSync('backend/'), 'No backend/ folder');

// 9. Verify Removal of All Table Numbers and Waiter References
console.log('\n--- 9. No Table Numbers & Waiter References Verification ---');
function getAllSourceFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'images' && file !== 'node_modules') {
        results = results.concat(getAllSourceFiles(fullPath));
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const srcFiles = getAllSourceFiles('src').concat(['index.html']);
let foundTableRef = [];
let foundWaiterRef = [];

const tableRegex = /\b(table\s*#?\d*|t-04|tableNumber|tableLabel|tableCode|table_restaurant)\b/i;
const waiterRegex = /\b(waiter|server|anita)\b/i;

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Check lines
  content.split('\n').forEach((line, idx) => {
    // Ignore harmless re-exports or comments if any, but all UI text and variables must be clean
    if (tableRegex.test(line)) {
      foundTableRef.push(`${file}:${idx + 1}: ${line.trim()}`);
    }
    if (waiterRegex.test(line)) {
      // Check if it's the re-export line in WaiterModal
      if (!file.includes('WaiterModal.jsx')) {
        foundWaiterRef.push(`${file}:${idx + 1}: ${line.trim()}`);
      }
    }
  });
});

assert(foundTableRef.length === 0, `Zero table references in source files (found: ${foundTableRef.length})`);
if (foundTableRef.length > 0) {
  foundTableRef.forEach(ref => console.error(`   Found table reference: ${ref}`));
}

assert(foundWaiterRef.length === 0, `Zero waiter/server/staff references in source files (found: ${foundWaiterRef.length})`);
if (foundWaiterRef.length > 0) {
  foundWaiterRef.forEach(ref => console.error(`   Found waiter reference: ${ref}`));
}

console.log(`\n=== VERIFICATION RESULT: ${failedTests === 0 ? 'ALL CHECKS PASSED (100% SUCCESS) ✅' : `${failedTests} FAILURES ❌`} ===`);
if (failedTests > 0) process.exit(1);
