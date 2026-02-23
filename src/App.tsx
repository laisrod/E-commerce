import { useState } from 'react'
import { products } from './data/products'
import { useCart } from './hooks/useCart'
import { Navbar, FilterType } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductSection } from './components/ProductSection'
import { CartModal } from './components/CartModal'
import { Footer } from './components/Footer'
import { Product } from './types/Product'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const { cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart } =
    useCart()

  const groceryProducts = products.filter((p) => p.type === 'grocery')
  const beautyProducts = products.filter((p) => p.type === 'beauty')
  const electronicsProducts = products.filter((p) => p.type === 'electronics')

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }

  const showGrocery = activeFilter === 'all' || activeFilter === 'grocery'
  const showBeauty = activeFilter === 'all' || activeFilter === 'beauty'
  const showElectronics = activeFilter === 'all' || activeFilter === 'electronics'

  return (
    <>
      <Navbar
        cartCount={totalItems}
        activeFilter={activeFilter}
        onCartClick={() => setIsCartOpen(true)}
        onFilterChange={setActiveFilter}
      />

      <Hero />

      <main id="content">
        {showGrocery && (
          <ProductSection
            title="Grocery"
            subtitle="selection"
            icon="/img/grocery.png"
            iconAlt="Grocery"
            products={groceryProducts}
            startIndex={1}
            onAddToCart={handleAddToCart}
          />
        )}

        {showBeauty && (
          <ProductSection
            title="Beauty"
            subtitle="selection"
            icon="/img/silhueta-em-forma-de-coracao.png"
            iconAlt="Beauty"
            products={beautyProducts}
            startIndex={4}
            onAddToCart={handleAddToCart}
          />
        )}

        {showElectronics && (
          <ProductSection
            title="Electronics"
            subtitle="selection"
            icon="/img/herramientas-y-utensilios.png"
            iconAlt="Electronics"
            products={electronicsProducts}
            startIndex={7}
            onAddToCart={handleAddToCart}
          />
        )}
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
