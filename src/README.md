# ShopNow 🛒

A simple online store developed during my JavaScript studies. The project focuses on implementing basic e-commerce features like shopping cart, promotions, and checkout.

## What's included

- **Functional cart**: add/remove products, calculate total
- **Automatic promotions**: quantity-based discounts
- **Responsive interface**: works well on desktop and mobile
- **Form validation**: checkout with real-time validation

## How to run

1. Clone the repository
2. Open terminal in the project folder
3. Start a local server:
   ```bash
   npx serve .
   # or
   npx http-server
   ```
4. Access `http://localhost:3000` (or the port shown in terminal)

**Important**: needs a local HTTP server because I use ES6 modules.

## Implemented features

### Shopping Cart
- Add products to cart
- Remove products (button "-")
- Increase quantity (button "+")
- Clear entire cart
- Badge with item counter

### Promotions
- **Cooking Oil**: 20% discount when buying 3+ units
- **Cake**: 30% discount when buying 10+ units

### Checkout
- Form with validation
- Required fields
- Email and password validation
- Visual error feedback

## Project structure

```
src/
├── index.html          # Main store page
├── checkout.html       # Checkout page
├── scripts/
│   ├── shop.js         # Main cart logic
│   ├── checkout.js     # Form validation
│   └── data/
│       └── products.js # Product data
├── css/
│   └── styles.css      # Application styles
└── img/                # Images and icons
```

## Technologies used

- HTML5
- CSS3
- JavaScript (ES6+)
- ES6 modules (import/export)

## What I learned

During development I learned about:
- Event delegation for performance
- Dynamic DOM manipulation
- ES6 modules and code organization
- Form validation
- Debug with console.log (removed in final version)

## Next steps

- [ ] Cart persistence (localStorage)
- [ ] More product categories
- [ ] Search system
- [ ] Price/category filters
- [ ] Improved responsiveness

---

Developed as part of JavaScript course. Feedback and suggestions are welcome! 🚀 