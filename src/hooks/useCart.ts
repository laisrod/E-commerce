import { useState, useCallback } from 'react'
import { Product, CartItem } from '../types/Product'

function applyPromotions(cart: CartItem[]): CartItem[] {
  return cart.map((item) => {
    let subtotalWithDiscount = 0

    // Cooking Oil (id 1): 20% off when buying 3+
    if (item.id === 1 && item.quantity >= 3) {
      const subtotal = item.price * item.quantity
      subtotalWithDiscount = subtotal - subtotal * 0.2
    }
    // Cake (id 3): 30% off when buying 10+
    else if (item.id === 3 && item.quantity >= 10) {
      const subtotal = item.price * item.quantity
      subtotalWithDiscount = subtotal - subtotal * 0.3
    }

    return { ...item, subtotalWithDiscount }
  })
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { ...product, quantity: 1, subtotalWithDiscount: 0 }]
    })
  }, [])

  const removeFromCart = useCallback((productId: number) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === productId)
      if (!item) return prev
      if (item.quantity > 1) {
        return prev.map((i) =>
          i.id === productId ? { ...i, quantity: i.quantity - 1 } : i,
        )
      }
      return prev.filter((i) => i.id !== productId)
    })
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const cartWithPromotions = applyPromotions(cart)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = cartWithPromotions.reduce((sum, item) => {
    const itemTotal =
      item.subtotalWithDiscount > 0
        ? item.subtotalWithDiscount
        : item.price * item.quantity
    return sum + itemTotal
  }, 0)

  return {
    cart: cartWithPromotions,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  }
}
