import React from 'react'
import { Star, Heart, ShoppingBag } from 'lucide-react'

export function ProductRecommendations({
  items,
  onAddToCart,
  favourites = [],
  onToggleFavourite,
  onSelectProduct
}) {
  if (!items || !items.length) return null

  return (
    <section className="pdp-recommendations-section" aria-labelledby="pdp-rec-title">
      <div className="pdp-container">
        <div className="pdp-rec-header">
          <div>
            <h2 id="pdp-rec-title" className="pdp-rec-title">You may like this also</h2>
            <p className="pdp-rec-subtitle">
              Hand-finished 925 silver pieces designed to layer with your bracelet.
            </p>
          </div>
        </div>

        <div className="pdp-recommendations-track">
          {items.map((prod) => {
            const isFav = favourites.includes(prod.name)
            return (
              <article key={prod.id || prod.name} className="pdp-rec-card">
                <div className="pdp-rec-image-wrap">
                  <img src={prod.image} alt={prod.name} loading="lazy" />

                  {onToggleFavourite && (
                    <button
                      type="button"
                      className={`pdp-rec-fav-btn ${isFav ? 'active' : ''}`}
                      onClick={() => onToggleFavourite(prod.name)}
                      aria-label={`Save ${prod.name}`}
                    >
                      <Heart size={14} fill={isFav ? '#8b4b45' : 'none'} strokeWidth={1.3} />
                    </button>
                  )}
                </div>

                <div className="pdp-rec-info">
                  <div className="pdp-rec-rating">
                    <Star size={11} fill="currentColor" strokeWidth={0} />
                    <span>{prod.rating}</span>
                    <span className="dot">·</span>
                    <span>{prod.reviewsCount} reviews</span>
                  </div>

                  <h3
                    className="pdp-rec-name"
                    onClick={() => onSelectProduct && onSelectProduct(prod)}
                  >
                    {prod.name}
                  </h3>

                  <div className="pdp-rec-price-row">
                    <strong className="pdp-rec-price">{prod.price}</strong>
                    {prod.mrp && <span className="pdp-rec-mrp">{prod.mrp}</span>}
                    {prod.discount && (
                      <span className="pdp-rec-discount">{prod.discount}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="product-card-cta"
                    onClick={(e) => {
                      e.stopPropagation()
                      onAddToCart(prod)
                    }}
                    aria-label={`Add ${prod.name} to cart`}
                  >
                    <ShoppingBag size={13} strokeWidth={1.5} />
                    <span>Add to cart</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
