import React from 'react'
import { ShoppingBag, ArrowRight } from 'lucide-react'

export function MobileStickyCart({ product, onAddToCart, onBuyNow }) {
  const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`
  const formattedMrp = `₹${product.mrp.toLocaleString('en-IN')}`

  return (
    <aside className="pdp-mobile-sticky-bar" aria-label="Quick purchase actions">
      <div className="pdp-mobile-sticky-inner">
        <div className="pdp-mobile-sticky-pricing">
          <strong className="pdp-sticky-price">{formattedPrice}</strong>
          <span className="pdp-sticky-mrp">{formattedMrp}</span>
        </div>

        <div className="pdp-mobile-sticky-actions">
          <button
            type="button"
            className="pdp-sticky-cart-btn"
            onClick={() => onAddToCart(product)}
            aria-label="Add to bag"
          >
            <ShoppingBag size={15} strokeWidth={1.3} />
            <span>Bag</span>
          </button>

          <button
            type="button"
            className="pdp-sticky-buy-btn"
            onClick={() => onBuyNow(product)}
            aria-label="Buy now"
          >
            <span>Buy Now</span>
            <ArrowRight size={14} strokeWidth={1.3} />
          </button>
        </div>
      </div>
    </aside>
  )
}
