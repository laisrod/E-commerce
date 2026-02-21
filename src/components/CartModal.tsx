import { useNavigate } from 'react-router-dom'
import { CartItem } from '../types/Product'

interface CartModalProps {
  isOpen: boolean
  cart: CartItem[]
  totalPrice: number
  onClose: () => void
  onClear: () => void
  onIncrement: (productId: number) => void
  onDecrement: (productId: number) => void
}

export function CartModal({
  isOpen,
  cart,
  totalPrice,
  onClose,
  onClear,
  onIncrement,
  onDecrement,
}: CartModalProps) {
  const navigate = useNavigate()

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-sidebar-header">
          <h3 className="cart-sidebar-title">CART ({cart.length})</h3>
          <button className="cart-sidebar-close" onClick={onClose} aria-label="Fechar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-sidebar-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <ul className="cart-items">
              {cart.map((item) => {
                const itemTotal =
                  item.subtotalWithDiscount > 0
                    ? item.subtotalWithDiscount
                    : item.price * item.quantity
                return (
                  <li key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src="/img/product.svg" alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <span className="cart-item-name">{item.name.toUpperCase()}</span>
                      <span className="cart-item-price">{itemTotal.toFixed(2)} EUR</span>
                      <div className="cart-item-qty">
                        <button onClick={() => onDecrement(item.id)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onIncrement(item.id)}>+</button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-sidebar-total">
              <span>TOTAL</span>
              <span>{totalPrice.toFixed(2)} EUR</span>
            </div>
            <button
              className="cart-checkout-btn"
              onClick={() => {
                onClose()
                navigate('/checkout')
              }}
            >
              CHECKOUT
            </button>
            <button className="cart-clear-btn" onClick={onClear}>
              CLEAR CART
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
