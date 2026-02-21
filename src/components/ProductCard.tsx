import { Product } from '../types/Product'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-icon">
        <img src="/img/product.svg" alt="Product" />
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <div className="add-cart-btn">
        <button className="btn" onClick={() => onAddToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  )
}
