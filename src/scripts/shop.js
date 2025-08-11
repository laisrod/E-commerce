const products = [
  { id: 1, name: "cooking oil", price: 10.5, type: "grocery" },
  { id: 2, name: "Pasta", price: 6.25, type: "grocery" },
  { id: 3, name: "Cake", price: 5, type: "grocery" },
  { id: 4, name: "Shampoo", price: 8.99, type: "beauty" },
  { id: 5, name: "Face cream", price: 12.50, type: "beauty" },
  { id: 6, name: "Batom", price: 9.75, type: "beauty" },
  { id: 7, name: "Headphones", price: 29.99, type: "electronics" },
  { id: 8, name: "DVD", price: 99.99, type: "electronics" },
  { id: 9, name: "TV", price: 49.99, type: "electronics" }
];

const cart = [];

function buy(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  console.log(cart);
}

// exercicio 2 
function cleanCart() {
  cart.length = 0;
}

//teste 1
buy(1);
buy(2);
buy(1);
console.log("Before cleaning:", cart);

cleanCart();

console.log("After cleaning:", cart);

// exercicio 3
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    if (item.subtotalWithDiscount > 0) {
      total += item.subtotalWithDiscount;
    } else {
      total += item.price * item.quantity;
    }
  }
  return total;
}

//teste 2
buy(1);
buy(2);
console.log("Before applying promotions:", cart);

// exercicio 4
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
console.log(cart)

// exercicio 5
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
      <td>${item.quantity}</td>
      <td>$${itemTotal.toFixed(2)}</td>
    `;
    
    tableBody.appendChild(row);
  });
  
  const total = calculateTotal();
  totalSpan.textContent = total.toFixed(2);
}

function openCart() {
  const modal = document.getElementById('cartModal');
  printCart();
  modal.style.display = 'block';
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = 'none';
}

function checkout() {
  alert('Checkout functionality will be implemented in the future!');
  closeCart();
}

document.addEventListener('DOMContentLoaded', function() {
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
  }
});
  