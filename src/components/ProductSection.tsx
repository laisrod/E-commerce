import { Product } from '../types/Product'
import { ProductCard } from './ProductCard'

interface ProductSectionProps {
  title: string
  subtitle?: string
  icon: string
  iconAlt: string
  products: Product[]
  startIndex?: number
  onAddToCart: (product: Product) => void
}

export function ProductSection({
  title,
  subtitle,
  products,
  startIndex = 1,
  onAddToCart,
}: ProductSectionProps) {
  return (
    <section className="product-section">
      <div className="section-header">
        <h2 className="section-title">
          {title.toUpperCase()}
          {subtitle && <span className="section-subtitle">{subtitle}</span>}
        </h2>
        <div className="section-line" />
      </div>
      <div className="products-row">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={startIndex + i}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}
