import React, { useState } from 'react'
import { ShoppingBag, ArrowRight, Heart, Check } from 'lucide-react'

export function PurchaseActions({
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  product
}) {
  const [isAdding, setIsAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  const handleAdd = () => {
    setIsAdding(true)
    onAddToCart(product)
    setTimeout(() => {
      setIsAdding(false)
      setJustAdded(true)
      setTimeout(() => setJustAdded(false), 2200)
    }, 300)
  }

  const handleBuy = () => {
    onBuyNow(product)
  }

  return (
    <div className="pdp-purchase-wrap">
      <div className="pdp-purchase-buttons">
        <button
          type="button"
          className="pdp-add-to-cart-btn primary-button"
          onClick={handleAdd}
          disabled={isAdding}
          aria-label="Add Silver Infinity Bracelet to shopping bag"
        >
          {justAdded ? (
            <>
              <Check size={16} strokeWidth={1.8} />
              <span>Added to Bag</span>
            </>
          ) : (
            <>
              <ShoppingBag size={16} strokeWidth={1.3} />
              <span>Add to Bag</span>
            </>
          )}
        </button>

        <button
          type="button"
          className="pdp-buy-now-btn outline-button"
          onClick={handleBuy}
          aria-label="Buy Silver Infinity Bracelet immediately"
        >
          <span>Buy Now</span>
          <ArrowRight size={15} strokeWidth={1.3} />
        </button>
      </div>

      <div className="pdp-purchase-assurances">
        <span>Complimentary insured shipping</span>
        <span className="dot-sep">·</span>
        <span>15-day doorstep returns</span>
        <span className="dot-sep">·</span>
        <span>Hallmarked 925 silver</span>
      </div>
    </div>
  )
}
