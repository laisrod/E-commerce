import { Product } from '../types/Product'
import { ProductCard } from './ProductCard'

interface ProductSectionProps {
  title: string
  icon: string
  iconAlt: string
  products: Product[]
  onAddToCart: (product: Product) => void
}

export function ProductSection({
  title,
  icon,
  iconAlt,
  products,
  onAddToCart,
}: ProductSectionProps) {
  return (
    <section className="mb-5">
      <div className="text">
        <h2>
          <img src={icon} alt={iconAlt} /> {title}
        </h2>
      </div>
      <div className="products-row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}
