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

// exercicio 2 esvazia carrinho
function cleanCart() {
  cart.length = 0;
}

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
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

//testando
buy(1);
buy(2); 

// exercicio 4
function applyPromotionsCart(cart) {
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    
    // Promoção 3 ou mais garrafas de óleo
    if (item.id === 1 && item.quantity >= 3) {
      const subtotal = item.price * item.quantity;
      const discount = subtotal * 0.20;
      item.subtotalWithDiscount = subtotal - discount;
    }
    
    // Promoção 10 ou mais produtos para fazer bolos
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