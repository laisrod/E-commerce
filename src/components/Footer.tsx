import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="site-footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <h3 className="footer-newsletter-title">NEWSLETTER</h3>
        <p className="footer-newsletter-text">
          Receba novidades e ofertas exclusivas diretamente no seu e-mail.
        </p>
        <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="footer-newsletter-input"
          />
          <button type="submit" className="footer-newsletter-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
      </div>

      {/* Colunas */}
      <div className="footer-columns">
        <div className="footer-col">
          <h4 className="footer-col-title">SHOP</h4>
          <ul className="footer-col-list">
            <li><a href="/">View All</a></li>
            <li><a href="#grocery">Grocery</a></li>
            <li><a href="#beauty">Beauty</a></li>
            <li><a href="#electronics">Electronics</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">HELP</h4>
          <ul className="footer-col-list">
            <li><a href="/checkout">Shipping & Returns</a></li>
            <li><a href="/checkout">FAQ</a></li>
            <li><a href="/checkout">Contact Us</a></li>
            <li><a href="/checkout">Size Guide</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">ABOUT</h4>
          <ul className="footer-col-list">
            <li><a href="/">Our Story</a></li>
            <li><a href="/">Sustainability</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Press</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">FOLLOW US</h4>
          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                <path d="M8 11v5" />
                <path d="M12 8v8" />
                <path d="M16 14v2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>&copy; 2026 ShopNow. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
