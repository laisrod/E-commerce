import { useState } from 'react'

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
}

export function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      {/* Toolbar */}
      <div className="header-toolbar">
        {/* Hamburger menu */}
        <button
          className="toolbar-btn hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Right actions */}
        <div className="toolbar-actions">
          {/* Grid icon */}
          <button className="toolbar-btn" aria-label="Grid view">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </button>

          {/* Filters */}
          <button className="toolbar-btn toolbar-text-btn" aria-label="Filters">
            FILTERS
          </button>

          {/* Search */}
          <button className="toolbar-btn" aria-label="Buscar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Cart / Bag */}
          <button className="toolbar-btn cart-icon-btn" onClick={onCartClick} aria-label="Carrinho">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li><a href="/">VIEW ALL</a></li>
          <li><a href="#grocery">BLACK</a></li>
          <li><a href="#beauty">SUITS</a></li>
          <li><a href="#electronics">SECOND HAND</a></li>
        </ul>
      </nav>
    </header>
  )
}
