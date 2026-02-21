import { useState } from 'react'

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
}

export function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="site-header">
      {/* Barra de anúncio - Frete Grátis */}
      <div className="announcement-bar">
        <span className="announcement-icon">🚚</span>
        <p>
          FALTAM <strong>R$ 450,00</strong> PARA VOCÊ GANHAR FRETE GRÁTIS!
        </p>
      </div>

      {/* Header principal - Search / Logo / Ações */}
      <div className="header-main">
        <div className="header-main-inner">
          {/* Busca */}
          <div className="header-search">
            <button
              className="header-search-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <input
              type="text"
              className={`header-search-input ${searchOpen ? 'open' : ''}`}
              placeholder="O que você está buscando?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Logo */}
          <a href="/" className="header-logo">
            <span className="logo-main">SHOP</span>
            <span className="logo-script">Now</span>
          </a>

          {/* Ações - Login, Usuário, Carrinho */}
          <div className="header-actions">
            <a href="/login" className="header-action-link">
              Login ›
            </a>
            <button className="header-action-btn" aria-label="Minha conta">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="header-action-btn cart-icon-btn" onClick={onCartClick} aria-label="Carrinho">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Navegação */}
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li><a href="/">Início</a></li>
          <li><a href="#grocery">Produtos</a></li>
          <li><a href="#beauty">Coleções</a></li>
          <li><a href="#electronics">Eletrônicos</a></li>
          <li><a href="/checkout">Dúvidas Frequentes</a></li>
          <li><a href="/checkout">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
