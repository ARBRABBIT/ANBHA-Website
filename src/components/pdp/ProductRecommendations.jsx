import React, { useRef } from 'react'
import { Star, Heart, ChevronLeft, ChevronRight, Plus } from 'lucide-react'

export function ProductRecommendations({
  items,
  onAddToCart,
  favourites,
  onToggleFavourite,
  onSelectProduct
}) {
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    if (!scrollRef.current) return
    const offset = direction === 'left' ? -340 : 340
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  if (!items || !items.length) return null

  return (
    <section className="pdp-recommendations-section" aria-labelledby="pdp-rec-title">
      <div className="pdp-container">
        <div className="pdp-rec-header">
          <div>
            <p className="eyebrow">Curated Combinations</p>
            <h2 id="pdp-rec-title" className="pdp-rec-title">You May Also Like</h2>
          </div>

          <div className="pdp-carousel-nav" aria-label="Carousel navigation">
            <button
              type="button"
              className="pdp-carousel-btn"
              onClick={() => handleScroll('left')}
              aria-label="Scroll recommendations left"
            >
              <ChevronLeft size={18} strokeWidth={1.3} />
            </button>
            <button
              type="button"
              className="pdp-carousel-btn"
              onClick={() => handleScroll('right')}
              aria-label="Scroll recommendations right"
            >
              <ChevronRight size={18} strokeWidth={1.3} />
            </button>
          </div>
        </div>

        <div className="pdp-recommendations-track" ref={scrollRef}>
          {items.map((prod) => {
            const isFav = favourites.includes(prod.name)
            return (
              <article key={prod.id || prod.name} className="pdp-rec-card">
                <div className="pdp-rec-image-wrap">
                  <img src={prod.image} alt={prod.name} loading="lazy" />

                  <button
                    type="button"
                    className={`pdp-rec-fav-btn ${isFav ? 'active' : ''}`}
                    onClick={() => onToggleFavourite(prod.name)}
                    aria-label={`Save ${prod.name}`}
                  >
                    <Heart size={15} fill={isFav ? 'currentColor' : 'none'} strokeWidth={1.3} />
                  </button>

                  <button
                    type="button"
                    className="pdp-rec-quick-add"
                    onClick={() => onAddToCart(prod)}
                    aria-label={`Quick add ${prod.name} to bag`}
                  >
                    <Plus size={14} />
                    <span>Quick Add</span>
                  </button>
                </div>

                <div className="pdp-rec-info">
                  <div className="pdp-rec-rating">
                    <Star size={12} fill="currentColor" strokeWidth={0} />
                    <span>{prod.rating}</span>
                    <span className="dot">·</span>
                    <span>{prod.reviewsCount}</span>
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
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
