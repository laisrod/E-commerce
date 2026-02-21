import { useNavigate } from 'react-router-dom'
import { Product } from '../types/Product'

interface ProductCardProps {
  product: Product
  index: number
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, index, onAddToCart }: ProductCardProps) {
  const navigate = useNavigate()

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Número do produto */}
      <span className="product-index">
        {String(index).padStart(2, '0')}
      </span>

      {/* Imagem */}
      <div className="product-image-wrapper">
        <img src="/img/product.svg" alt={product.name} className="product-img" />
      </div>

      {/* Info do produto */}
      <div className="product-info">
        <div className="product-name-row">
          <span className="product-name">{product.name.toUpperCase()}</span>
          <button
            className="product-add-btn"
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart(product)
            }}
            aria-label="Adicionar ao carrinho"
          >
            +
          </button>
        </div>
        <span className="product-price">{product.price.toFixed(2)} EUR</span>
      </div>
    </div>
  )
}
