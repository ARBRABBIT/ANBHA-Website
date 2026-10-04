import React from 'react'
import { Star } from 'lucide-react'

export function ProductRating({ rating, reviewCount, onScrollToReviews }) {
  const handleClick = (e) => {
    e.preventDefault()
    if (onScrollToReviews) {
      onScrollToReviews()
      return
    }
    const reviewsEl = document.getElementById('customer-reviews')
    if (reviewsEl) {
      reviewsEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <a
      href="#customer-reviews"
      onClick={handleClick}
      className="pdp-rating-badge"
      aria-label={`Rated ${rating} out of 5 stars based on ${reviewCount} reviews. Click to see reviews.`}
    >
      <span className="pdp-rating-stars">
        <Star size={13} fill="currentColor" strokeWidth={0} />
      </span>
      <span className="pdp-rating-score">{rating.toFixed(1)}</span>
      <span className="pdp-rating-dot" aria-hidden="true">·</span>
      <span className="pdp-rating-count">{reviewCount} Reviews</span>
    </a>
  )
}
