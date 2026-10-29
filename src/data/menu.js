// Category and Subcategory Cover Images
import catVegImg from '../assets/images/cat_veg.jpg';
import catNonVegImg from '../assets/images/cat_nonveg.jpg';
import catDrinksImg from '../assets/images/cat_drinks.jpg';
import catDessertsImg from '../assets/images/cat_desserts.jpg';
import catChineseImg from '../assets/images/cat_chinese.jpg';
import catSnacksImg from '../assets/images/cat_snacks.jpg';

// Subcategory Images
import subBiryaniImg from '../assets/images/sub_biryani.jpg';
import subNoodlesImg from '../assets/images/sub_noodles.jpg';
import subCurriesImg from '../assets/images/sub_curries.jpg';
import subStartersImg from '../assets/images/sub_starters.jpg';
import subRiceImg from '../assets/images/sub_rice.jpg';
import subTandoorImg from '../assets/images/sub_tandoor.jpg';
import subCombosImg from '../assets/images/sub_combos.jpg';
import subOthersImg from '../assets/images/sub_others.jpg';
import subBreadsImg from '../assets/images/sub_breads.jpg';
import subJuicesImg from '../assets/images/sub_juices.jpg';
import subMocktailsImg from '../assets/images/sub_mocktails.jpg';
import subMilkshakesImg from '../assets/images/sub_milkshakes.jpg';
import subColdBevImg from '../assets/images/sub_cold_beverages.jpg';
import subHotBevImg from '../assets/images/sub_hot_beverages.jpg';
import subDrinksOthersImg from '../assets/images/sub_drinks_others.jpg';
import subCakesImg from '../assets/images/sub_cakes.jpg';
import subIceCreamsImg from '../assets/images/sub_icecreams.jpg';
import subSweetsImg from '../assets/images/sub_sweets.jpg';
import subPastriesImg from '../assets/images/sub_pastries.jpg';
import subBrowniesImg from '../assets/images/sub_brownies.jpg';
import subDessertsOthersImg from '../assets/images/sub_desserts_others.jpg';
import subFriedRiceImg from '../assets/images/sub_fried_rice.jpg';
import subManchurianImg from '../assets/images/sub_manchurian.jpg';
import subSoupsImg from '../assets/images/sub_soups.jpg';
import subFriesImg from '../assets/images/sub_fries.jpg';
import subMaggiImg from '../assets/images/sub_maggi.jpg';
import subSandwichImg from '../assets/images/sub_sandwich.jpg';
import subBurgerImg from '../assets/images/sub_burger.jpg';
import subPastaImg from '../assets/images/sub_pasta.jpg';
import subVegBiryaniImg from '../assets/images/sub_veg_biryani.jpg';
import subSoftDrinksImg from '../assets/images/sub_soft_drinks.jpg';

// Specific Dish Images
import dishVegBiryaniImg from '../assets/images/dish_veg_biryani.jpg';
import dishHydDumBiryaniImg from '../assets/images/dish_hyd_dum_biryani.jpg';
import dishChickenFryBiryaniImg from '../assets/images/dish_chicken_fry_biryani.jpg';
import dishChickenFryRcrImg from '../assets/images/dish_chicken_fry_rcr.jpg';
import dishChickenBiryaniCartImg from '../assets/images/dish_chicken_biryani_cart.jpg';
import dishPaneerNoodlesImg from '../assets/images/dish_paneer_noodles.jpg';
import dishMasalaFriesImg from '../assets/images/dish_masala_fries.jpg';

export const categories = [
  {
    id: 'veg',
    name: 'Veg',
    slug: 'veg',
    icon: 'eco',
    accentColor: '#54734B',
    isPureVeg: true,
    itemCount: 20,
    image: catVegImg,
    description: 'Fresh vegetarian delights prepared with aromatic garden spices',
    subcategories: [
      { id: 'veg-biryani', name: 'Biryani', slug: 'biryani', image: subVegBiryaniImg, icon: 'dinner_dining' },
      { id: 'veg-rice', name: 'Rice', slug: 'rice', image: subRiceImg, icon: 'rice_bowl' },
      { id: 'veg-noodles', name: 'Noodles', slug: 'noodles', image: subNoodlesImg, icon: 'ramen_dining' },
      { id: 'veg-curries', name: 'Curries', slug: 'curries', image: subCurriesImg, icon: 'soup_kitchen' },
      { id: 'veg-starters', name: 'Starters', slug: 'starters', image: subStartersImg, icon: 'tapas' },
      { id: 'veg-breads', name: 'Breads', slug: 'breads', image: subBreadsImg, icon: 'bakery_dining' },
      { id: 'veg-combos', name: 'Combo Meals', slug: 'combos', image: subCombosImg, icon: 'set_meal' },
    ]
  },
  {
    id: 'non-veg',
    name: 'Non-Veg',
    slug: 'non-veg',
    icon: 'kebab_dining',
    accentColor: '#D9534F',
    isNonVeg: true,
    itemCount: 32,
    image: catNonVegImg,
    description: 'Juicy tandoori, fragrant royal dum biryanis and authentic gravies',
    subcategories: [
      { id: 'nonveg-biryani', name: 'Biryani', slug: 'biryani', image: subBiryaniImg, icon: 'dinner_dining' },
      { id: 'nonveg-noodles', name: 'Noodles', slug: 'noodles', image: subNoodlesImg, icon: 'ramen_dining' },
      { id: 'nonveg-curries', name: 'Curries', slug: 'curries', image: subCurriesImg, icon: 'soup_kitchen' },
      { id: 'nonveg-starters', name: 'Starters', slug: 'starters', image: subStartersImg, icon: 'tapas' },
      { id: 'nonveg-rice', name: 'Rice', slug: 'rice', image: subRiceImg, icon: 'rice_bowl' },
      { id: 'nonveg-tandoor', name: 'Tandoor', slug: 'tandoor', image: subTandoorImg, icon: 'outdoor_grill' },
      { id: 'nonveg-combos', name: 'Combo Meals', slug: 'combos', image: subCombosImg, icon: 'set_meal' },
      { id: 'nonveg-others', name: 'Others', slug: 'others', image: subOthersImg, icon: 'restaurant' },
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    slug: 'drinks',
    icon: 'local_bar',
    accentColor: '#ebc246',
    tag: 'Chilled',
    itemCount: 18,
    image: catDrinksImg,
    description: 'Refreshing cold mocktails, thick shakes, freshly squeezed juices & brews',
    subcategories: [
      { id: 'drinks-juices', name: 'Fresh Juices', slug: 'fresh-juices', image: subJuicesImg, icon: 'nutrition' },
      { id: 'drinks-mocktails', name: 'Mocktails', slug: 'mocktails', image: subMocktailsImg, icon: 'local_bar' },
      { id: 'drinks-milkshakes', name: 'Milkshakes', slug: 'milkshakes', image: subMilkshakesImg, icon: 'coffee' },
      { id: 'drinks-cold', name: 'Cold Beverages', slug: 'cold-beverages', image: subColdBevImg, icon: 'water_drop' },
      { id: 'drinks-soft-drinks', name: 'Soft Drinks', slug: 'soft-drinks', image: subSoftDrinksImg, icon: 'local_drink' },
      { id: 'drinks-hot', name: 'Hot Beverages', slug: 'hot-beverages', image: subHotBevImg, icon: 'coffee' },
      { id: 'drinks-others', name: 'Others', slug: 'others', image: subDrinksOthersImg, icon: 'local_cafe' },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    slug: 'desserts',
    icon: 'cake',
    accentColor: '#f4bb92',
    itemCount: 10,
    image: catDessertsImg,
    description: 'Decadent chocolate fudge cakes, authentic warm sweets and gourmet ice creams',
    subcategories: [
      { id: 'desserts-cakes', name: 'Cakes', slug: 'cakes', image: subCakesImg, icon: 'cake' },
      { id: 'desserts-icecreams', name: 'Ice Creams', slug: 'ice-creams', image: subIceCreamsImg, icon: 'icecream' },
      { id: 'desserts-sweets', name: 'Traditional Sweets', slug: 'traditional-sweets', image: subSweetsImg, icon: 'cookie' },
      { id: 'desserts-pastries', name: 'Pastries', slug: 'pastries', image: subPastriesImg, icon: 'cake' },
      { id: 'desserts-brownies', name: 'Brownies', slug: 'brownies', image: subBrowniesImg, icon: 'bakery_dining' },
      { id: 'desserts-others', name: 'Others', slug: 'others', image: subDessertsOthersImg, icon: 'sweet_treat' },
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese',
    slug: 'chinese',
    icon: 'ramen_dining',
    accentColor: '#d5784d',
    tag: 'Popular',
    itemCount: 18,
    image: catChineseImg,
    description: 'Wok-tossed spicy noodles, fragrant fried rice & sizzling Manchurian specials',
    subcategories: [
      { id: 'chinese-noodles', name: 'Noodles', slug: 'noodles', image: subNoodlesImg, icon: 'ramen_dining' },
      { id: 'chinese-fried-rice', name: 'Fried Rice', slug: 'fried-rice', image: subFriedRiceImg, icon: 'rice_bowl' },
      { id: 'chinese-manchurian', name: 'Manchurian', slug: 'manchurian', image: subManchurianImg, icon: 'tapas' },
      { id: 'chinese-starters', name: 'Starters', slug: 'starters', image: subStartersImg, icon: 'kebab_dining' },
      { id: 'chinese-soups', name: 'Soups', slug: 'soups', image: subSoupsImg, icon: 'soup_kitchen' },
      { id: 'chinese-combos', name: 'Combo Meals', slug: 'combos', image: subCombosImg, icon: 'set_meal' },
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks',
    slug: 'snacks',
    icon: 'fastfood',
    accentColor: '#f4bb92',
    itemCount: 14,
    image: catSnacksImg,
    description: 'Crispy seasoned fries, loaded sandwiches, juicy burgers & classic Maggi',
    subcategories: [
      { id: 'snacks-fries', name: 'Fries', slug: 'fries', image: subFriesImg, icon: 'fastfood' },
      { id: 'snacks-maggi', name: 'Maggi', slug: 'maggi', image: subMaggiImg, icon: 'ramen_dining' },
      { id: 'snacks-sandwich', name: 'Sandwich', slug: 'sandwich', image: subSandwichImg, icon: 'lunch_dining' },
      { id: 'snacks-burger', name: 'Burger', slug: 'burger', image: subBurgerImg, icon: 'lunch_dining' },
      { id: 'snacks-pasta', name: 'Pasta', slug: 'pasta', image: subPastaImg, icon: 'dinner_dining' },
      { id: 'snacks-others', name: 'Others', slug: 'others', image: subOthersImg, icon: 'egg_alt' },
    ]
  }
];

export const dishes = [
  // ================= VEG BIRYANI =================
  {
    id: 'dish-veg-biryani',
    categoryId: 'veg',
    subcategoryId: 'veg-biryani',
    name: 'Veg Biryani',
    description: 'Aromatic basmati rice cooked with fresh seasonal garden vegetables and whole spices.',
    price: 220.00,
    dietary: 'veg',
    image: dishVegBiryaniImg,
    tag: null,
    rating: 4.6
  },
  {
    id: 'dish-paneer-dum-biryani',
    categoryId: 'veg',
    subcategoryId: 'veg-biryani',
    name: 'Paneer Dum Biryani',
    description: 'Layered fragrant basmati rice slow dum cooked with marinated spiced cottage cheese cubes.',
    price: 250.00,
    dietary: 'veg',
    image: dishVegBiryaniImg,
    tag: 'Bestseller',
    rating: 4.8
  },
  {
    id: 'dish-mushroom-biryani',
    categoryId: 'veg',
    subcategoryId: 'veg-biryani',
    name: 'Mushroom Biryani',
    description: 'Savory button mushrooms tossed in royal biryani masala and mint basmati rice.',
    price: 240.00,
    dietary: 'veg',
    image: dishVegBiryaniImg,
    rating: 4.7
  },

  // ================= NON-VEG BIRYANI =================
  {
    id: 'dish-hyd-chicken-biryani',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-biryani',
    name: 'Hyderabadi Chicken Dum Biryani',
    description: 'Traditional authentic Hyderabadi slow dum cooked chicken with saffron layers.',
    price: 300.00,
    dietary: 'non-veg',
    image: dishHydDumBiryaniImg,
    isChefSpecial: true,
    tag: "Chef's Signature",
    rating: 4.9
  },
  {
    id: 'dish-chicken-fry-biryani',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-biryani',
    name: 'Chicken Fry Biryani',
    description: 'Crispy spiced fried chicken tossed in aromatic biryani masala rice.',
    price: 320.00,
    dietary: 'non-veg',
    image: dishChickenFryBiryaniImg,
    tag: 'Spicy',
    rating: 4.8
  },
  {
    id: 'dish-chicken-fry-rcr',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-biryani',
    name: 'Chicken Fry Biryani (RCR- Special)',
    description: 'Signature chef recipe with double marinated tender chicken pieces and special gravy.',
    price: 350.00,
    dietary: 'non-veg',
    image: dishChickenFryRcrImg,
    isChefSpecial: true,
    tag: "Chef's Choice",
    rating: 5.0
  },

  // ================= NON-VEG NOODLES =================
  {
    id: 'dish-chicken-noodles',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-noodles',
    name: 'Chicken Noodles',
    description: 'Wok tossed Hakka noodles with tender shredded chicken and crisp vegetables.',
    price: 190.00,
    dietary: 'non-veg',
    image: subNoodlesImg,
    rating: 4.6
  },
  {
    id: 'dish-egg-noodles',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-noodles',
    name: 'Egg Noodles',
    description: 'Classic wok noodles tossed with spiced scrambled eggs and spring onions.',
    price: 160.00,
    dietary: 'non-veg',
    image: subNoodlesImg,
    rating: 4.5
  },
  {
    id: 'dish-schezwan-chicken-noodles',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-noodles',
    name: 'Schezwan Chicken Noodles',
    description: 'Fiery wok noodles tossed with house-made Sichuan pepper chili oil and chicken.',
    price: 240.00,
    dietary: 'non-veg',
    image: subNoodlesImg,
    tag: 'Spicy',
    rating: 4.7
  },

  // ================= NON-VEG CURRIES =================
  {
    id: 'dish-butter-chicken',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-curries',
    name: 'Butter Chicken Gravy',
    description: 'Rich velvety tomato and cashew butter gravy with succulent tandoori chicken chunks.',
    price: 280.00,
    dietary: 'non-veg',
    image: subCurriesImg,
    isChefSpecial: true,
    tag: 'Bestseller',
    rating: 4.9
  },
  {
    id: 'dish-chicken-tikka-masala',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-curries',
    name: 'Chicken Tikka Masala',
    description: 'Char-grilled chicken tikka cooked in a spicy, creamy roasted bell pepper masala.',
    price: 290.00,
    dietary: 'non-veg',
    image: subCurriesImg,
    rating: 4.8
  },
  {
    id: 'dish-mutton-rogan-josh',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-curries',
    name: 'Mutton Rogan Josh',
    description: 'Slow-simmered tender mutton cuts in Kashmiri chili and whole cardamom gravy.',
    price: 340.00,
    dietary: 'non-veg',
    image: subCurriesImg,
    rating: 4.8
  },

  // ================= NON-VEG STARTERS =================
  {
    id: 'dish-chicken-555',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Chicken 555',
    description: 'Crispy chicken strips tossed in creamy garlic yogurt masala with curry leaves.',
    price: 270.00,
    dietary: 'non-veg',
    image: subStartersImg,
    rating: 4.8
  },
  {
    id: 'dish-chicken-65',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Chicken 65',
    description: 'South Indian style deep fried spicy chicken bites tempered with curry leaves.',
    price: 270.00,
    dietary: 'non-veg',
    image: subStartersImg,
    tag: 'Popular',
    rating: 4.7
  },
  {
    id: 'dish-chicken-manchurian',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Chicken Manchurian Dry',
    description: 'Crispy fried chicken balls coated in savory garlic ginger soy sauce.',
    price: 260.00,
    dietary: 'non-veg',
    image: subStartersImg,
    rating: 4.6
  },
  {
    id: 'dish-chilli-chicken',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Chilli Chicken',
    description: 'Indo-Chinese classic with diced chicken, bell peppers and green chilies.',
    price: 260.00,
    dietary: 'non-veg',
    image: subStartersImg,
    rating: 4.7
  },
  {
    id: 'dish-crispy-chilli-chicken',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Crispy Chilli Chicken',
    description: 'Ultra-crunchy fried chicken tossed in hot honey chili glaze.',
    price: 260.00,
    dietary: 'non-veg',
    image: subStartersImg,
    rating: 4.8
  },
  {
    id: 'dish-dragon-chicken',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Dragon Chicken',
    description: 'Spicy wok tossed chicken strips with red chili paste and roasted cashews.',
    price: 260.00,
    dietary: 'non-veg',
    image: subStartersImg,
    rating: 4.7
  },
  {
    id: 'dish-garlic-chicken',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Garlic Chicken',
    description: 'Tender chicken tossed with roasted golden garlic bits and herbs.',
    price: 270.00,
    dietary: 'non-veg',
    image: subStartersImg,
    rating: 4.6
  },
  {
    id: 'dish-chicken-crispy-wings',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Chicken Crispy Wings',
    description: 'Golden spiced battered chicken wings served with hot garlic dipping sauce.',
    price: 199.00,
    dietary: 'non-veg',
    image: subStartersImg,
    rating: 4.7
  },
  {
    id: 'dish-butter-garlic-prawn',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Butter Garlic Prawn',
    description: 'Juicy tiger prawns sauteed in rich garlic herb butter with crushed pepper.',
    price: 320.00,
    dietary: 'non-veg',
    image: subStartersImg,
    tag: 'Chef Special',
    rating: 4.9
  },
  {
    id: 'dish-apollo-fish',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-starters',
    name: 'Appollo Fish',
    description: 'Authentic Hyderabadi boneless fish fillets spiced with curry leaves and yogurt.',
    price: 330.00,
    dietary: 'non-veg',
    image: subStartersImg,
    rating: 4.8
  },

  // ================= NON-VEG RICE =================
  {
    id: 'dish-chicken-fried-rice',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-rice',
    name: 'Chicken Fried Rice',
    description: 'Fragrant basmati rice tossed with shredded chicken, eggs and green scallions.',
    price: 210.00,
    dietary: 'non-veg',
    image: subRiceImg,
    rating: 4.6
  },
  {
    id: 'dish-egg-fried-rice',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-rice',
    name: 'Egg Fried Rice',
    description: 'Wok tossed rice with generous scrambled eggs and light pepper seasoning.',
    price: 180.00,
    dietary: 'non-veg',
    image: subRiceImg,
    rating: 4.5
  },
  {
    id: 'dish-chicken-cashew-rice',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-rice',
    name: 'Chicken Cashew Fried Rice',
    description: 'Special fried rice loaded with roasted cashews and aromatic chicken chunks.',
    price: 250.00,
    dietary: 'non-veg',
    image: subRiceImg,
    rating: 4.7
  },
  {
    id: 'dish-peri-peri-chicken-bowl',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-rice',
    name: 'Peri Peri Chicken Rice Bowl',
    description: 'Seasoned yellow rice topped with spicy grilled peri peri chicken strips and dip.',
    price: 260.00,
    dietary: 'non-veg',
    image: subRiceImg,
    rating: 4.7
  },

  // ================= NON-VEG TANDOOR =================
  {
    id: 'dish-tandoori-chicken-half',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-tandoor',
    name: 'Tandoori Chicken (Half)',
    description: 'Clay oven charred chicken marinated in Kashmiri chili, yogurt and spices.',
    price: 240.00,
    dietary: 'non-veg',
    image: subTandoorImg,
    tag: 'Smoky',
    rating: 4.8
  },
  {
    id: 'dish-tandoori-chicken-full',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-tandoor',
    name: 'Tandoori Chicken (Full)',
    description: 'Whole chicken roasted over slow charcoal embers with authentic mint chutney.',
    price: 440.00,
    dietary: 'non-veg',
    image: subTandoorImg,
    rating: 4.9
  },
  {
    id: 'dish-chicken-tikka',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-tandoor',
    name: 'Chicken Tikka (6 pcs)',
    description: 'Succulent boneless chicken breast cubes skewered and charred to perfection.',
    price: 260.00,
    dietary: 'non-veg',
    image: subTandoorImg,
    rating: 4.7
  },

  // ================= NON-VEG COMBOS & OTHERS =================
  {
    id: 'dish-royal-nonveg-thali',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-combos',
    name: 'Royal Non-Veg Platter Thali',
    description: 'Butter chicken, mini chicken biryani, 2 butter rotis, chicken kebab & gulab jamun.',
    price: 360.00,
    dietary: 'non-veg',
    image: subCombosImg,
    tag: 'Complete Meal',
    rating: 4.9
  },
  {
    id: 'dish-egg-masala-curry',
    categoryId: 'non-veg',
    subcategoryId: 'nonveg-others',
    name: 'Chef Specialty Egg Masala Curry',
    description: 'Boiled eggs simmered in rich caramelized onion tomato gravy with fresh cilantro.',
    price: 180.00,
    dietary: 'non-veg',
    image: subOthersImg,
    rating: 4.5
  },

  // ================= VEG CATEGORY ITEMS =================
  // Veg Rice
  {
    id: 'dish-veg-fried-rice',
    categoryId: 'veg',
    subcategoryId: 'veg-rice',
    name: 'Veg Fried Rice',
    description: 'Classic wok tossed basmati with carrots, french beans and sweet baby corn.',
    price: 160.00,
    dietary: 'veg',
    image: subRiceImg,
    rating: 4.5
  },
  {
    id: 'dish-paneer-fried-rice',
    categoryId: 'veg',
    subcategoryId: 'veg-rice',
    name: 'Paneer Fried Rice',
    description: 'Fluffy fried rice tossed with golden pan-seared cottage cheese cubes.',
    price: 200.00,
    dietary: 'veg',
    image: subRiceImg,
    rating: 4.7
  },
  {
    id: 'dish-paneer-cashew-rice',
    categoryId: 'veg',
    subcategoryId: 'veg-rice',
    name: 'Paneer Cashew Fried Rice',
    description: 'Premium wok rice loaded with rich paneer cubes and golden roasted cashews.',
    price: 260.00,
    dietary: 'veg',
    image: subRiceImg,
    rating: 4.8
  },
  {
    id: 'dish-veg-stroganoff',
    categoryId: 'veg',
    subcategoryId: 'veg-rice',
    name: 'Veg Stroganoff Rice',
    description: 'Creamy mushroom and vegetable stroganoff sauce served over parsley butter rice.',
    price: 340.00,
    dietary: 'veg',
    image: subRiceImg,
    rating: 4.6
  },

  // Veg Noodles
  {
    id: 'dish-veg-noodles',
    categoryId: 'veg',
    subcategoryId: 'veg-noodles',
    name: 'Veg Hakka Noodles',
    description: 'Stir fried Hakka noodles with crunchy shredded vegetables and sesame oil.',
    price: 140.00,
    dietary: 'veg',
    image: subNoodlesImg,
    rating: 4.5
  },
  {
    id: 'dish-paneer-noodles',
    categoryId: 'veg',
    subcategoryId: 'veg-noodles',
    name: 'Paneer Noodles',
    description: 'Wok tossed noodles with spiced cottage cheese, bell peppers and scallions.',
    price: 180.00,
    dietary: 'veg',
    image: dishPaneerNoodlesImg,
    tag: 'Bestseller',
    rating: 4.8
  },

  // Veg Curries
  {
    id: 'dish-paneer-butter-masala',
    categoryId: 'veg',
    subcategoryId: 'veg-curries',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese simmered in a luscious buttery tomato and cream gravy.',
    price: 240.00,
    dietary: 'veg',
    image: subCurriesImg,
    tag: 'Bestseller',
    rating: 4.8
  },
  {
    id: 'dish-kadai-paneer',
    categoryId: 'veg',
    subcategoryId: 'veg-curries',
    name: 'Kadai Paneer',
    description: 'Paneer cooked with freshly ground kadai spices, onions and crisp capsicums.',
    price: 230.00,
    dietary: 'veg',
    image: subCurriesImg,
    rating: 4.7
  },
  {
    id: 'dish-dal-makhani',
    categoryId: 'veg',
    subcategoryId: 'veg-curries',
    name: 'Dal Makhani',
    description: 'Overnight slow simmered black lentils finished with rich butter and fresh cream.',
    price: 210.00,
    dietary: 'veg',
    image: subCurriesImg,
    rating: 4.8
  },

  // Veg Starters
  {
    id: 'dish-chilli-paneer',
    categoryId: 'veg',
    subcategoryId: 'veg-starters',
    name: 'Chilli Paneer Dry',
    description: 'Crispy fried paneer cubes tossed in spicy soy chili sauce and spring onions.',
    price: 260.00,
    dietary: 'veg',
    image: subStartersImg,
    tag: 'Popular',
    rating: 4.7
  },
  {
    id: 'dish-crispy-corn',
    categoryId: 'veg',
    subcategoryId: 'veg-starters',
    name: 'Crispy Corn Salt & Pepper',
    description: 'Golden fried sweet corn kernels tossed with crushed pepper and tangy lemon.',
    price: 250.00,
    dietary: 'veg',
    image: subStartersImg,
    rating: 4.6
  },
  {
    id: 'dish-mushroom-manchurian',
    categoryId: 'veg',
    subcategoryId: 'veg-starters',
    name: 'Mushroom Manchurian',
    description: 'Tender button mushrooms batter fried and coated with garlic ginger sauce.',
    price: 260.00,
    dietary: 'veg',
    image: subStartersImg,
    rating: 4.6
  },
  {
    id: 'dish-baby-corn-manchurian',
    categoryId: 'veg',
    subcategoryId: 'veg-starters',
    name: 'Baby Corn Manchurian',
    description: 'Crunchy baby corn tossed with sweet chili garlic sauce and coriander.',
    price: 260.00,
    dietary: 'veg',
    image: subStartersImg,
    rating: 4.6
  },

  // Veg Breads
  {
    id: 'dish-butter-naan',
    categoryId: 'veg',
    subcategoryId: 'veg-breads',
    name: 'Butter Naan',
    description: 'Fluffy clay oven baked Indian flatbread brushed generously with salted butter.',
    price: 50.00,
    dietary: 'veg',
    image: subBreadsImg,
    rating: 4.7
  },
  {
    id: 'dish-garlic-naan',
    categoryId: 'veg',
    subcategoryId: 'veg-breads',
    name: 'Garlic Naan',
    description: 'Tandoor baked naan topped with crushed roasted garlic and fresh coriander.',
    price: 65.00,
    dietary: 'veg',
    image: subBreadsImg,
    rating: 4.8
  },
  {
    id: 'dish-tandoori-roti',
    categoryId: 'veg',
    subcategoryId: 'veg-breads',
    name: 'Tandoori Roti (Butter)',
    description: 'Whole wheat flatbread baked crisp in clay tandoor with a touch of butter.',
    price: 35.00,
    dietary: 'veg',
    image: subBreadsImg,
    rating: 4.5
  },

  // Veg Combos
  {
    id: 'dish-executive-veg-thali',
    categoryId: 'veg',
    subcategoryId: 'veg-combos',
    name: 'Executive Veg Thali',
    description: 'Paneer butter masala, dal tadka, jeera rice, 2 butter rotis, salad & sweet.',
    price: 280.00,
    dietary: 'veg',
    image: subCombosImg,
    tag: 'Value Meal',
    rating: 4.8
  },

  // ================= DRINKS =================
  // Fresh Juices
  {
    id: 'dish-orange-juice',
    categoryId: 'drinks',
    subcategoryId: 'drinks-juices',
    name: 'Fresh Orange Juice',
    description: 'Pure 100% natural cold pressed sweet orange juice with natural pulp.',
    price: 120.00,
    dietary: 'veg',
    image: subJuicesImg,
    rating: 4.7
  },
  {
    id: 'dish-watermelon-juice',
    categoryId: 'drinks',
    subcategoryId: 'drinks-juices',
    name: 'Chilled Watermelon Juice',
    description: 'Refreshing sweet watermelon crush with a hint of mint and black salt.',
    price: 110.00,
    dietary: 'veg',
    image: subJuicesImg,
    rating: 4.6
  },
  // Mocktails
  {
    id: 'dish-virgin-mojito',
    categoryId: 'drinks',
    subcategoryId: 'drinks-mocktails',
    name: 'Classic Virgin Mojito',
    description: 'Crushed garden mint, freshly muddled lime wedges, cane sugar and sparkling soda.',
    price: 150.00,
    dietary: 'veg',
    image: subMocktailsImg,
    tag: 'Refreshing',
    rating: 4.8
  },
  {
    id: 'dish-blue-lagoon',
    categoryId: 'drinks',
    subcategoryId: 'drinks-mocktails',
    name: 'Blue Lagoon Mocktail',
    description: 'Vibrant blue curaçao flavor mixed with citrus lemon cordial and fizz.',
    price: 160.00,
    dietary: 'veg',
    image: subMocktailsImg,
    rating: 4.7
  },
  // Milkshakes
  {
    id: 'dish-belgian-chocolate-shake',
    categoryId: 'drinks',
    subcategoryId: 'drinks-milkshakes',
    name: 'Belgian Chocolate Thickshake',
    description: 'Decadent rich dark chocolate shake topped with whipped cream and cocoa shavings.',
    price: 170.00,
    dietary: 'veg',
    image: subMilkshakesImg,
    tag: 'Bestseller',
    rating: 4.9
  },
  {
    id: 'dish-oreo-crunch-shake',
    categoryId: 'drinks',
    subcategoryId: 'drinks-milkshakes',
    name: 'Oreo Crunch Shake',
    description: 'Creamy vanilla milkshake blended with crunchy chocolate Oreo cookies.',
    price: 180.00,
    dietary: 'veg',
    image: subMilkshakesImg,
    rating: 4.8
  },
  // Cold & Hot Beverages
  {
    id: 'dish-cold-coffee-icecream',
    categoryId: 'drinks',
    subcategoryId: 'drinks-cold',
    name: 'Cold Coffee with Vanilla Scoop',
    description: 'Handcrafted espresso blended with creamy milk and topped with rich vanilla ice cream.',
    price: 140.00,
    dietary: 'veg',
    image: subColdBevImg,
    rating: 4.8
  },
  // ================= DRINKS - SOFT DRINKS =================
  {
    id: 'dish-coke-300ml',
    categoryId: 'drinks',
    subcategoryId: 'drinks-soft-drinks',
    name: 'Coke (300ml)',
    description: 'Chilled classic Coca-Cola refreshing carbonated soft drink.',
    price: 40.00,
    dietary: 'veg',
    image: subSoftDrinksImg,
    rating: 4.8
  },
  {
    id: 'dish-sprite-300ml',
    categoryId: 'drinks',
    subcategoryId: 'drinks-soft-drinks',
    name: 'Sprite (300ml)',
    description: 'Crisp, refreshing lemon-lime flavored chilled soda.',
    price: 40.00,
    dietary: 'veg',
    image: subSoftDrinksImg,
    rating: 4.7
  },
  {
    id: 'dish-fanta-300ml',
    categoryId: 'drinks',
    subcategoryId: 'drinks-soft-drinks',
    name: 'Fanta (300ml)',
    description: 'Bright and bubbly orange fruit flavored fizzy drink.',
    price: 40.00,
    dietary: 'veg',
    image: subSoftDrinksImg,
    rating: 4.7
  },
  {
    id: 'dish-thumsup-300ml',
    categoryId: 'drinks',
    subcategoryId: 'drinks-soft-drinks',
    name: 'Thums Up (300ml)',
    description: 'Strong, fizzy cola with a distinct spicy charged punch.',
    price: 40.00,
    dietary: 'veg',
    image: subSoftDrinksImg,
    rating: 4.9
  },
  {
    id: 'dish-limca-300ml',
    categoryId: 'drinks',
    subcategoryId: 'drinks-soft-drinks',
    name: 'Limca (300ml)',
    description: 'Cloudy lemon-lime fizz that brings instant coolness.',
    price: 40.00,
    dietary: 'veg',
    image: subSoftDrinksImg,
    rating: 4.6
  },
  {
    id: 'dish-masala-chai',
    categoryId: 'drinks',
    subcategoryId: 'drinks-hot',
    name: 'Special Masala Chai (Clay Pot)',
    description: 'Strong milk tea brewed with crushed ginger, green cardamom and cloves.',
    price: 40.00,
    dietary: 'veg',
    image: subHotBevImg,
    rating: 4.9
  },
  {
    id: 'dish-tender-coconut',
    categoryId: 'drinks',
    subcategoryId: 'drinks-others',
    name: 'Fresh Tender Coconut Water',
    description: 'Naturally chilled sweet pure tender coconut water served directly.',
    price: 90.00,
    dietary: 'veg',
    image: subDrinksOthersImg,
    rating: 4.9
  },

  // ================= DESSERTS =================
  {
    id: 'dish-fudge-cake',
    categoryId: 'desserts',
    subcategoryId: 'desserts-cakes',
    name: 'Belgian Chocolate Fudge Cake',
    description: 'Warm multi-layer dark chocolate sponge drenched in rich glossy chocolate ganache.',
    price: 180.00,
    dietary: 'veg',
    image: subCakesImg,
    tag: 'Chef Special',
    rating: 4.9
  },
  {
    id: 'dish-blueberry-cheesecake',
    categoryId: 'desserts',
    subcategoryId: 'desserts-cakes',
    name: 'New York Blueberry Cheesecake',
    description: 'Creamy baked cheesecake slice with buttery graham crust and wild blueberry compote.',
    price: 210.00,
    dietary: 'veg',
    image: subCakesImg,
    rating: 4.8
  },
  {
    id: 'dish-vanilla-sundae',
    categoryId: 'desserts',
    subcategoryId: 'desserts-icecreams',
    name: 'Hot Chocolate Fudge Sundae',
    description: 'Two scoops of gourmet vanilla bean ice cream drenched in warm fudge sauce & roasted nuts.',
    price: 140.00,
    dietary: 'veg',
    image: subIceCreamsImg,
    rating: 4.8
  },
  {
    id: 'dish-gulab-jamun',
    categoryId: 'desserts',
    subcategoryId: 'desserts-sweets',
    name: 'Warm Gulab Jamun (2 Pcs)',
    description: 'Melt-in-mouth milk dough dumplings soaked in fragrant saffron and rose syrup.',
    price: 90.00,
    dietary: 'veg',
    image: subSweetsImg,
    tag: 'Classic',
    rating: 4.9
  },
  {
    id: 'dish-rasmalai',
    categoryId: 'desserts',
    subcategoryId: 'desserts-sweets',
    name: 'Royal Rasmalai (2 Pcs)',
    description: 'Soft cottage cheese patties submerged in chilled clotted saffron cream and pistachios.',
    price: 110.00,
    dietary: 'veg',
    image: subSweetsImg,
    rating: 4.8
  },
  {
    id: 'dish-sizzling-brownie',
    categoryId: 'desserts',
    subcategoryId: 'desserts-brownies',
    name: 'Sizzling Walnut Brownie with Ice Cream',
    description: 'Freshly baked dark chocolate brownie served on a smoking hot sizzler with vanilla ice cream.',
    price: 190.00,
    dietary: 'veg',
    image: subBrowniesImg,
    tag: 'Signature',
    rating: 5.0
  },
  {
    id: 'dish-matka-kulfi',
    categoryId: 'desserts',
    subcategoryId: 'desserts-others',
    name: 'Traditional Matka Kulfi',
    description: 'Dense rich malai kulfi set inside an earthen clay pot garnished with cardamom.',
    price: 100.00,
    dietary: 'veg',
    image: subDessertsOthersImg,
    rating: 4.7
  },

  // ================= CHINESE =================
  {
    id: 'dish-veg-hakka-chinese',
    categoryId: 'chinese',
    subcategoryId: 'chinese-noodles',
    name: 'Classic Veg Hakka Noodles',
    description: 'Thin egg-free noodles wok tossed with bell peppers, cabbage and scallions.',
    price: 150.00,
    dietary: 'veg',
    image: subNoodlesImg,
    rating: 4.6
  },
  {
    id: 'dish-chicken-schezwan-chinese',
    categoryId: 'chinese',
    subcategoryId: 'chinese-noodles',
    name: 'Chicken Schezwan Noodles',
    description: 'Spicy noodles stir-fried with house chili paste, tender chicken and celery.',
    price: 220.00,
    dietary: 'non-veg',
    image: subNoodlesImg,
    tag: 'Spicy',
    rating: 4.7
  },
  {
    id: 'dish-veg-manchurian-gravy',
    categoryId: 'chinese',
    subcategoryId: 'chinese-manchurian',
    name: 'Veg Manchurian Gravy',
    description: 'Crisp vegetable dumplings simmered in savory dark soy ginger sauce.',
    price: 220.00,
    dietary: 'veg',
    image: subManchurianImg,
    rating: 4.6
  },
  {
    id: 'dish-chicken-manchurian-gravy',
    categoryId: 'chinese',
    subcategoryId: 'chinese-manchurian',
    name: 'Chicken Manchurian Gravy',
    description: 'Juicy chicken bites cooked in garlic cilantro gravy, pairs great with fried rice.',
    price: 260.00,
    dietary: 'non-veg',
    image: subManchurianImg,
    rating: 4.7
  },
  {
    id: 'dish-veg-hot-sour-soup',
    categoryId: 'chinese',
    subcategoryId: 'chinese-soups',
    name: 'Veg Hot and Sour Soup',
    description: 'Tangy and spicy broth loaded with mushrooms, bamboo shoots and tofu.',
    price: 90.00,
    dietary: 'veg',
    image: subSoupsImg,
    rating: 4.6
  },
  {
    id: 'dish-chicken-sweet-corn-soup',
    categoryId: 'chinese',
    subcategoryId: 'chinese-soups',
    name: 'Chicken Sweet Corn Soup',
    description: 'Velvety cream of corn soup with shredded chicken and egg ribbons.',
    price: 100.00,
    dietary: 'non-veg',
    image: subSoupsImg,
    rating: 4.7
  },

  // ================= SNACKS =================
  // Fries
  {
    id: 'dish-masala-fries',
    categoryId: 'snacks',
    subcategoryId: 'snacks-fries',
    name: 'Masala Fries',
    description: 'Crispy shoestring fries dusted with tangy peri-peri chaat seasoning.',
    price: 120.00,
    dietary: 'veg',
    image: dishMasalaFriesImg,
    tag: 'Bestseller',
    rating: 4.8
  },
  {
    id: 'dish-cheese-fries',
    categoryId: 'snacks',
    subcategoryId: 'snacks-fries',
    name: 'Loaded Cheese Fries',
    description: 'Golden fries drizzled with melted cheddar cheese sauce and jalapeños.',
    price: 150.00,
    dietary: 'veg',
    image: subFriesImg,
    rating: 4.7
  },
  {
    id: 'dish-chicken-cheese-fries',
    categoryId: 'snacks',
    subcategoryId: 'snacks-fries',
    name: 'Chicken Cheese Fries',
    description: 'Crisp fries topped with spiced minced chicken, mozzarella and herbs.',
    price: 180.00,
    dietary: 'non-veg',
    image: subFriesImg,
    tag: 'Loaded',
    rating: 4.9
  },
  // Maggi
  {
    id: 'dish-cheese-maggi',
    categoryId: 'snacks',
    subcategoryId: 'snacks-maggi',
    name: 'Cheese Maggi',
    description: 'Classic street style Maggi noodles loaded with melted cheese and butter.',
    price: 125.00,
    dietary: 'veg',
    image: subMaggiImg,
    rating: 4.7
  },
  {
    id: 'dish-chicken-cheese-maggi',
    categoryId: 'snacks',
    subcategoryId: 'snacks-maggi',
    name: 'Chicken Cheese Maggi',
    description: 'Special spicy Maggi cooked with shredded chicken tikka and cheddar cheese.',
    price: 140.00,
    dietary: 'non-veg',
    image: subMaggiImg,
    rating: 4.8
  },
  // Sandwich
  {
    id: 'dish-paneer-sandwich',
    categoryId: 'snacks',
    subcategoryId: 'snacks-sandwich',
    name: 'Grilled Paneer Sandwich',
    description: 'Toasted bread stuffed with spiced paneer cubes, mint chutney and cheese.',
    price: 240.00,
    dietary: 'veg',
    image: subSandwichImg,
    rating: 4.7
  },
  {
    id: 'dish-bbq-chicken-sandwich',
    categoryId: 'snacks',
    subcategoryId: 'snacks-sandwich',
    name: 'Barbeque Chicken Sandwich',
    description: 'Smoky pulled chicken tossed in BBQ sauce with coleslaw and melted cheese.',
    price: 260.00,
    dietary: 'non-veg',
    image: subSandwichImg,
    tag: 'Popular',
    rating: 4.8
  },
  // Burger
  {
    id: 'dish-crispy-chicken-burger',
    categoryId: 'snacks',
    subcategoryId: 'snacks-burger',
    name: 'Crispy Chicken Burger',
    description: 'Fried golden chicken fillet with garlic aioli, lettuce and pickles on brioche.',
    price: 225.00,
    dietary: 'non-veg',
    image: subBurgerImg,
    tag: 'Bestseller',
    rating: 4.9
  },
  {
    id: 'dish-veg-burger',
    categoryId: 'snacks',
    subcategoryId: 'snacks-burger',
    name: 'Deluxe Veg Burger',
    description: 'Spiced herb potato and pea patty with fresh tomato slices and cheese.',
    price: 180.00,
    dietary: 'veg',
    image: subBurgerImg,
    rating: 4.6
  },
  // Pasta
  {
    id: 'dish-veg-alfredo-pasta',
    categoryId: 'snacks',
    subcategoryId: 'snacks-pasta',
    name: 'Veg Alfredo Penne Pasta',
    description: 'Penne cooked in rich creamy parmesan garlic sauce with sauteed broccoli and corn.',
    price: 260.00,
    dietary: 'veg',
    image: subPastaImg,
    rating: 4.7
  },
  {
    id: 'dish-chicken-arrabbiata-pasta',
    categoryId: 'snacks',
    subcategoryId: 'snacks-pasta',
    name: 'Chicken Arrabbiata Pasta',
    description: 'Penne tossed in spicy slow-cooked San Marzano tomato sauce with chicken and basil.',
    price: 320.00,
    dietary: 'non-veg',
    image: subPastaImg,
    tag: 'Spicy',
    rating: 4.8
  },
  // Omelettes
  {
    id: 'dish-cheese-omelette',
    categoryId: 'snacks',
    subcategoryId: 'snacks-others',
    name: 'Fluffy Cheese Omelette',
    description: 'Three egg folded omelette stuffed with melted mozzarella and fresh chives.',
    price: 120.00,
    dietary: 'non-veg',
    image: subOthersImg,
    rating: 4.6
  }
];

// Quick Helper Functions
export function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug || c.id === slug);
}

export function getSubcategoryBySlug(categorySlug, subcategorySlug) {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return null;
  return cat.subcategories.find(s => s.slug === subcategorySlug || s.id === subcategorySlug);
}

export function getDishesBySubcategory(subcategoryId) {
  return dishes.filter(d => d.subcategoryId === subcategoryId);
}

export function getDishesByCategory(categoryId) {
  return dishes.filter(d => d.categoryId === categoryId);
}

export function searchDishes(query) {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  return dishes.filter(d => 
    d.name.toLowerCase().includes(q) || 
    d.description.toLowerCase().includes(q)
  );
}

