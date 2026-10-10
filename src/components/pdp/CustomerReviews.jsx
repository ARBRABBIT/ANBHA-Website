import React, { useRef, useState, useEffect } from 'react'
import { Star, CheckCircle, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

export function CustomerReviews({ reviewsData }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  if (!reviewsData || !reviewsData.reviews || !reviewsData.reviews.length) return null

  const { averageRating = 4.9, totalReviews = 142, reviews } = reviewsData

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true })
      window.addEventListener('resize', checkScroll)
      return () => {
        el.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [reviews])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="customer-reviews" className="pdp-reviews-section" aria-labelledby="pdp-reviews-title">
      <div className="pdp-container">
        {/* Section Header */}
        <div className="pdp-reviews-header">
          <div>
            <h2 id="pdp-reviews-title" className="pdp-reviews-main-title">
              Stories from our customers.
            </h2>
          </div>

          {/* Right-aligned Stats & Navigation Controls */}
          <div className="pdp-reviews-header-right">
            <span className="pdp-reviews-rating-pill" aria-label={`Rated ${averageRating} out of 5 based on ${totalReviews} verified reviews`}>
              <Star size={12} fill="#f59e0b" stroke="#f59e0b" strokeWidth={0} />
              <strong className="pdp-reviews-pill-score">{averageRating}</strong>
              <span className="dot">·</span>
              <span>{totalReviews} Verified Reviews</span>
            </span>

            <div className="pdp-reviews-nav">
              <button
                type="button"
                className={`pdp-reviews-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous customer review"
              >
                <ChevronLeft size={18} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                className={`pdp-reviews-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next customer review"
              >
                <ChevronRight size={18} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel with Edge Fade Effect */}
        <div className="pdp-reviews-fade-wrapper">
          <div
            className={`pdp-reviews-fade-edge pdp-reviews-fade-left ${canScrollLeft ? 'visible' : ''}`}
            aria-hidden="true"
          />
          <div
            className={`pdp-reviews-fade-edge pdp-reviews-fade-right ${canScrollRight ? 'visible' : ''}`}
            aria-hidden="true"
          />

          <div className="pdp-reviews-horizontal-track" ref={scrollRef}>
            {reviews.map((rev) => (
              <article key={rev.id || rev.name} className="pdp-ugc-card">
                {/* Product Image */}
                <div className="pdp-ugc-image-wrap">
                  <img
                    src={rev.image}
                    alt={`${rev.name}'s review of ANBHA Silver Infinity Bracelet`}
                    loading="lazy"
                  />
                  {rev.photoCount && (
                    <span className="pdp-ugc-photo-pill" title={`${rev.photoCount} photos`}>
                      <ImageIcon size={11} strokeWidth={2} />
                      <span>{rev.photoCount}</span>
                    </span>
                  )}
                </div>

                {/* Review Content */}
                <div className="pdp-ugc-body">
                  <div className="pdp-ugc-author-row">
                    <strong className="pdp-ugc-name">{rev.name}</strong>
                    {rev.verified && (
                      <span className="pdp-ugc-verified-icon" title="Verified Buyer">
                        <CheckCircle size={14} fill="#193b32" stroke="#ffffff" strokeWidth={1.5} />
                      </span>
                    )}
                  </div>

                  <span className="pdp-ugc-date">{rev.date}</span>

                  <div className="pdp-ugc-stars" aria-label={`${rev.rating} out of 5 stars`}>
                    {[...Array(rev.rating || 5)].map((_, i) => (
                      <Star key={i} size={13} fill="#f59e0b" stroke="#f59e0b" strokeWidth={0} />
                    ))}
                  </div>

                  <p className="pdp-ugc-quote">{rev.quote}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
