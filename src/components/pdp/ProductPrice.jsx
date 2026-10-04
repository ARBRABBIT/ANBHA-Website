import React from 'react'

export function ProductPrice({ price, mrp, discountPercentage, taxNote }) {
  const formattedPrice = `₹${price.toLocaleString('en-IN')}`
  const formattedMrp = `₹${mrp.toLocaleString('en-IN')}`

  return (
    <div className="pdp-price-wrap">
      <div className="pdp-price-row">
        <span className="pdp-selling-price" aria-label={`Current selling price ${formattedPrice}`}>
          {formattedPrice}
        </span>
        <span className="pdp-mrp" aria-label={`Original price ${formattedMrp}`}>
          {formattedMrp}
        </span>
        <span className="pdp-discount-badge" aria-label={`${discountPercentage}% discount`}>
          {discountPercentage}% OFF
        </span>
      </div>
      <p className="pdp-tax-note">{taxNote || 'MRP inclusive of all taxes'}</p>
    </div>
  )
}
