import { useNavigate } from 'react-router-dom'
import { Product } from '../types/Product'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const navigate = useNavigate()

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-icon">
        <img src="/img/product.svg" alt="Product" />
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <div className="add-cart-btn">
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation()
            onAddToCart(product)
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
