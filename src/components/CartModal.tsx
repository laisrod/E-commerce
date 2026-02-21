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

  if (!isOpen) return null

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>My Cart</h3>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="table-responsive">
            <table id="cartTable">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty.</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center' }}>
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cart.map((item) => {
                    const itemTotal =
                      item.subtotalWithDiscount > 0
                        ? item.subtotalWithDiscount
                        : item.price * item.quantity
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => onDecrement(item.id)}
                          >
                            -
                          </button>
                          <span style={{ margin: '0 8px' }}>
                            {item.quantity}
                          </span>
                          <button
                            className="btn"
                            onClick={() => onIncrement(item.id)}
                          >
                            +
                          </button>
                        </td>
                        <td>${itemTotal.toFixed(2)}</td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="cart-total">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClear}>
            Clean Cart
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/checkout')}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
