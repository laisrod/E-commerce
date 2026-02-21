interface HeaderProps {
  cartCount: number
  onCartClick: () => void
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="prymary-header">
      <div className="navbar">
        <a className="back-btn" href="/">ShopNow</a>
        <button className="cart-btn" type="button" onClick={onCartClick}>
          🛒 My Cart (<span>{cartCount}</span>)
        </button>
      </div>
    </header>
  )
}
