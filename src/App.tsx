import { useState } from 'react'
import { products } from './data/products'
import { useCart } from './hooks/useCart'
import { Header } from './components/Header'
import { ProductSection } from './components/ProductSection'
import { CartModal } from './components/CartModal'
import { Footer } from './components/Footer'
import { Product } from './types/Product'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart } =
    useCart()

  const groceryProducts = products.filter((p) => p.type === 'grocery')
  const beautyProducts = products.filter((p) => p.type === 'beauty')
  const electronicsProducts = products.filter((p) => p.type === 'electronics')

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }

  return (
    <>
      <Header
        cartCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main id="content">
        <section>
          <div className="text">
            <h1>Welcome to ShopNow</h1>
          </div>
        </section>

        <ProductSection
          title="Grocery"
          icon="/img/grocery.png"
          iconAlt="Grocery"
          products={groceryProducts}
          onAddToCart={handleAddToCart}
        />

        <ProductSection
          title="Beauty"
          icon="/img/silhueta-em-forma-de-coracao.png"
          iconAlt="Beauty"
          products={beautyProducts}
          onAddToCart={handleAddToCart}
        />

        <ProductSection
          title="Electronics"
          icon="/img/herramientas-y-utensilios.png"
          iconAlt="Electronics"
          products={electronicsProducts}
          onAddToCart={handleAddToCart}
        />
      </main>

      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        totalPrice={totalPrice}
        onClose={() => setIsCartOpen(false)}
        onClear={clearCart}
        onIncrement={(id) => {
          const product = products.find((p) => p.id === id)
          if (product) addToCart(product)
        }}
        onDecrement={removeFromCart}
      />

      <Footer />
    </>
  )
}

export default App
