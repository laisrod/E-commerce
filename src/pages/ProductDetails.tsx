import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'
import { Navbar } from '../components/Navbar'
import { DetailsCard } from '../components/DetailsCard'
import { Footer } from '../components/Footer'
import { CartModal } from '../components/CartModal'
import { useState } from 'react'
import { Product } from '../types/Product'

export function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart } =
    useCart()

  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <>
        <Navbar cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
        <main id="content">
          <div className="text">
            <h1>Produto não encontrado</h1>
            <p>
              <button className="btn" onClick={() => navigate('/')}>
                Voltar à loja
              </button>
            </p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleAddToCart = (_product: Product, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(_product)
    }
  }

  return (
    <>
      <Navbar cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />

      <main id="content">
        <DetailsCard product={product} onAddToCart={handleAddToCart} />
      </main>

      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        totalPrice={totalPrice}
        onClose={() => setIsCartOpen(false)}
        onClear={clearCart}
        onIncrement={(itemId) => {
          const p = products.find((pr) => pr.id === itemId)
          if (p) addToCart(p)
        }}
        onDecrement={removeFromCart}
      />

      <Footer />
    </>
  )
}
