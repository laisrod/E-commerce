import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../types/Product'

interface DetailsCardProps {
  product: Product
  onAddToCart: (product: Product, quantity: number) => void
}

export function DetailsCard({ product, onAddToCart }: DetailsCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const navigate = useNavigate()

  const categoryLabels: Record<string, string> = {
    grocery: 'Grocery',
    beauty: 'Beauty',
    electronics: 'Electronics',
  }

  const handleAdd = () => {
    onAddToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const decrement = () => setQuantity((q) => Math.max(1, q - 1))
  const increment = () => setQuantity((q) => q + 1)

  return (
    <div className="details-card">
      {/* Breadcrumb */}
      <nav className="details-breadcrumb">
        <span className="details-breadcrumb-link" onClick={() => navigate('/')}>
          Página Inicial
        </span>
        <span className="details-breadcrumb-sep">/</span>
        <span className="details-breadcrumb-link" onClick={() => navigate('/')}>
          {categoryLabels[product.type]}
        </span>
        <span className="details-breadcrumb-sep">/</span>
        <span className="details-breadcrumb-current">{product.name}</span>
      </nav>

      <div className="details-content">
        {/* Imagem do produto */}
        <div className="details-image-section">
          <div className="details-image-wrapper">
            <img src="/img/product.svg" alt={product.name} className="details-image" />
          </div>
          <div className="details-thumbnails">
            <div className="details-thumb active">
              <img src="/img/product.svg" alt={product.name} />
            </div>
            <div className="details-thumb">
              <img src="/img/product.svg" alt={product.name} />
            </div>
            <div className="details-thumb">
              <img src="/img/product.svg" alt={product.name} />
            </div>
          </div>
        </div>

        {/* Informações do produto */}
        <div className="details-info-section">
          <span className="details-category-badge">{categoryLabels[product.type]}</span>
          <h1 className="details-product-name">{product.name}</h1>

          <div className="details-rating">
            <span className="details-stars">★★★★★</span>
            <span className="details-review-count">(12 avaliações)</span>
          </div>

          <div className="details-price-box">
            <span className="details-price">R$ {product.price.toFixed(2)}</span>
            <span className="details-installments">
              ou 3x de R$ {(product.price / 3).toFixed(2)} sem juros
            </span>
          </div>

          <p className="details-description">
            Produto de alta qualidade selecionado especialmente para você.
            Aproveite a melhor experiência de compra com a ShopNow.
          </p>

          <div className="details-divider" />

          {/* Seletor de quantidade */}
          <div className="details-quantity-section">
            <label className="details-quantity-label">Quantidade:</label>
            <div className="details-quantity-selector">
              <button className="details-qty-btn" onClick={decrement}>−</button>
              <span className="details-qty-value">{quantity}</span>
              <button className="details-qty-btn" onClick={increment}>+</button>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="details-actions">
            <button
              className={`details-add-btn ${added ? 'added' : ''}`}
              onClick={handleAdd}
            >
              {added ? '✓ Adicionado!' : '🛒 Adicionar ao carrinho'}
            </button>
            <button className="details-buy-btn" onClick={() => {
              handleAdd()
              navigate('/checkout')
            }}>
              Comprar agora
            </button>
          </div>

          <div className="details-divider" />

          {/* Benefícios */}
          <div className="details-benefits">
            <div className="details-benefit">
              <span className="details-benefit-icon">🚚</span>
              <div>
                <strong>Frete Grátis</strong>
                <span>acima de R$ 450,00</span>
              </div>
            </div>
            <div className="details-benefit">
              <span className="details-benefit-icon">↩️</span>
              <div>
                <strong>Troca Grátis</strong>
                <span>em até 30 dias</span>
              </div>
            </div>
            <div className="details-benefit">
              <span className="details-benefit-icon">🔒</span>
              <div>
                <strong>Compra Segura</strong>
                <span>dados protegidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
