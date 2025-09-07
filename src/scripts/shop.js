let products = [];
const cart = [];

export function initShop(initialProducts) {
  products = initialProducts;
  renderAllProducts();
  bindUIEvents();
  updateCartBadge();
}

function renderAllProducts() {
  renderProducts('groceryProducts', 'grocery');
  renderProducts('beautyProducts', 'beauty');
  renderProducts('electronicsProducts', 'electronics');
}

function renderProducts(containerId, productType) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const filteredProducts = products.filter(p => p.type === productType);
  
  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <div class="product-icon">
        <img src="img/product.svg" alt="Product">
      </div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <div class="add-cart-btn">
        <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">Add to cart</button>
      </div>
    </div>
  `).join('');
}

function bindUIEvents() {
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-to-cart');
    const decBtn = e.target.closest('.dec-from-cart');
    const incBtn = e.target.closest('.inc-to-cart');
    const openCartBtn = e.target.closest('.cart-btn');

    if (addBtn) { buy(Number(addBtn.dataset.productId)); }
    if (decBtn) { removeFromCart(Number(decBtn.dataset.productId)); }
    if (incBtn) { buy(Number(incBtn.dataset.productId)); }
    if (openCartBtn) { openCart(); }
  });
}

function buy(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const item = cart.find(i => i.id === productId);
  if (item) item.quantity += 1; else cart.push({ ...product, quantity: 1 });
  if (window.DEBUG) console.log('[cart] add', { productId, cart: (typeof structuredClone !== 'undefined') ? structuredClone(cart) : JSON.parse(JSON.stringify(cart)) });
  updateUI();
}

function removeFromCart(productId) {
  const index = cart.findIndex(i => i.id === productId);
  if (index === -1) return;
  if (cart[index].quantity > 1) cart[index].quantity -= 1; else cart.splice(index, 1);
  if (window.DEBUG) console.log('[cart] remove', { productId, cart: (typeof structuredClone !== 'undefined') ? structuredClone(cart) : JSON.parse(JSON.stringify(cart)) });
  updateUI();
}

function cleanCart() {
  cart.length = 0;
  updateUI();
}

function calculateTotal() {
  return cart.reduce((sum, item) => {
    const n = item.subtotalWithDiscount > 0 ? item.subtotalWithDiscount : item.price * item.quantity;
    return sum + n;
  }, 0);
}

function applyPromotionsCart(cart) {
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    
    if (item.id === 1 && item.quantity >= 3) {
      const subtotal = item.price * item.quantity;
      const discount = subtotal * 0.20;
      item.subtotalWithDiscount = subtotal - discount;
    }
    
    else if (item.id === 3 && item.quantity >= 10) {
      const subtotal = item.price * item.quantity;
      const discount = subtotal * 0.30;
      item.subtotalWithDiscount = subtotal - discount;
    }
    
    else {
      item.subtotalWithDiscount = 0;
    }
  }
}

function printCart() {
  const modal = document.getElementById('cartModal');
  const tableBody = document.getElementById('cartTableBody');
  const totalSpan = document.getElementById('cartTotal');
  
  tableBody.innerHTML = '';
  
  if (cart.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = '<td colspan="4" style="text-align: center;">Your cart is empty</td>';
    tableBody.appendChild(emptyRow);
    totalSpan.textContent = '0';
    if (window.DEBUG) console.log('[cart] printCart empty');
    return;
  }
  
  applyPromotionsCart(cart);
  
  cart.forEach(item => {
    const row = document.createElement('tr');
    
    const itemTotal = item.subtotalWithDiscount > 0 ? 
                     item.subtotalWithDiscount : 
                     item.price * item.quantity;
    
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <button class="btn dec-from-cart" data-product-id="${item.id}">-</button>
        <span style="margin: 0 8px;">${item.quantity}</span>
        <button class="btn inc-to-cart" data-product-id="${item.id}">+</button>
      </td>
      <td>$${itemTotal.toFixed(2)}</td>
    `;
    
    tableBody.appendChild(row);
  });
  
  const total = calculateTotal();
  totalSpan.textContent = total.toFixed(2);
  if (window.DEBUG) console.log('[cart] printCart done', { cart, total });
}

function openCart() {
  const modal = document.getElementById('cartModal');
  printCart();
  modal.style.display = 'block';
  if (window.DEBUG) console.log('[cart] openCart');
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = 'none';
}

function checkout() {
  window.location.href = 'checkout.html';
}

function getCartCount() {
  return cart.reduce((sum, it) => sum + it.quantity, 0);
}

function updateCartBadge() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = String(getCartCount());
  if (window.DEBUG) console.log('[cart] badge', getCartCount());
}

function updateUI() {
  applyPromotionsCart(cart);
  printCart();
  if (typeof updateCartBadge === 'function') {
    updateCartBadge();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
  }
  if (window.DEBUG) console.log('shop.js loaded');
});

window.closeCart = closeCart;
window.cleanCart = cleanCart;
window.checkout = checkout;
  