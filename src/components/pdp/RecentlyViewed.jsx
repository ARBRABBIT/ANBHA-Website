import React from 'react'
import { Star, Heart, Plus } from 'lucide-react'

export function RecentlyViewed({
  items,
  onAddToCart,
  favourites,
  onToggleFavourite,
  onSelectProduct
}) {
  if (!items || !items.length) return null

  return (
    <section className="pdp-recently-viewed-section" aria-labelledby="pdp-rv-title">
      <div className="pdp-container">
        <div className="pdp-rv-header">
          <p className="eyebrow">Your Journey</p>
          <h2 id="pdp-rv-title" className="pdp-rv-title">Recently Viewed</h2>
        </div>

        <div className="pdp-rv-grid">
          {items.map((prod) => {
            const isFav = favourites.includes(prod.name)
            return (
              <article key={prod.id || prod.name} className="pdp-rv-card">
                <div className="pdp-rv-image-wrap">
                  <img src={prod.image} alt={prod.name} loading="lazy" />

                  <button
                    type="button"
                    className={`pdp-rv-fav-btn ${isFav ? 'active' : ''}`}
                    onClick={() => onToggleFavourite(prod.name)}
                    aria-label={`Save ${prod.name}`}
                  >
                    <Heart size={14} fill={isFav ? 'currentColor' : 'none'} strokeWidth={1.3} />
                  </button>

                  <button
                    type="button"
                    className="pdp-rv-quick-add"
                    onClick={() => onAddToCart(prod)}
                    aria-label={`Add ${prod.name} to bag`}
                  >
                    <Plus size={13} />
                    <span>Add</span>
                  </button>
                </div>

                <div className="pdp-rv-info">
                  <div className="pdp-rv-rating">
                    <Star size={11} fill="currentColor" strokeWidth={0} />
                    <span>{prod.rating}</span>
                  </div>

                  <h3
                    className="pdp-rv-name"
                    onClick={() => onSelectProduct && onSelectProduct(prod)}
                  >
                    {prod.name}
                  </h3>

                  <div className="pdp-rv-price-row">
                    <strong className="pdp-rv-price">{prod.price}</strong>
                    {prod.mrp && <span className="pdp-rv-mrp">{prod.mrp}</span>}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
