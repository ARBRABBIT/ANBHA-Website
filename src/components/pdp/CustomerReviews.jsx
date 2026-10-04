import React, { useState } from 'react'
import { Star, CheckCircle, ThumbsUp } from 'lucide-react'

export function CustomerReviews({ reviewsData }) {
  const [activeFilter, setActiveFilter] = useState('all') // 'all' | 'recent' | 'highest' | 'photos' | 'verified'
  const [helpfulVotes, setHelpfulVotes] = useState({})

  if (!reviewsData) return null

  const { averageRating, totalReviews, distribution, reviews } = reviewsData

  const handleHelpful = (reviewId) => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 0) + 1,
    }))
  }

  // Filter reviews
  let filteredReviews = [...reviews]
  if (activeFilter === 'photos') {
    filteredReviews = filteredReviews.filter((r) => r.image)
  } else if (activeFilter === 'verified') {
    filteredReviews = filteredReviews.filter((r) => r.verified)
  } else if (activeFilter === 'highest') {
    filteredReviews = filteredReviews.filter((r) => r.rating === 5)
  }

  return (
    <section id="customer-reviews" className="pdp-reviews-section" aria-labelledby="pdp-reviews-title">
      <div className="pdp-container">
        <div className="section-heading centered">
          <p className="eyebrow">Notes From You</p>
          <h2 id="pdp-reviews-title">Stories from our customers.</h2>
        </div>

        {/* Rating Overview Summary & Distribution */}
        <div className="pdp-reviews-summary-card">
          <div className="pdp-rating-big-block">
            <span className="pdp-rating-huge">{averageRating.toFixed(1)}</span>
            <div className="pdp-rating-stars-row" aria-label={`Average rating ${averageRating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="pdp-rating-total-label">Based on {totalReviews} Reviews</span>
          </div>

          <div className="pdp-rating-dist-block" aria-label="Rating breakdown">
            {distribution.map((d) => (
              <div key={d.stars} className="pdp-dist-row">
                <span className="pdp-dist-star-label">{d.stars} Stars</span>
                <div className="pdp-dist-bar-track">
                  <div
                    className="pdp-dist-bar-fill"
                    style={{ width: `${d.percentage}%` }}
                    aria-label={`${d.percentage}%`}
                  />
                </div>
                <span className="pdp-dist-count">{d.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="pdp-reviews-filter-bar">
          <div className="pdp-filter-pills" role="tablist" aria-label="Review filters">
            <button
              type="button"
              className={`pdp-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Reviews ({reviews.length})
            </button>
            <button
              type="button"
              className={`pdp-filter-pill ${activeFilter === 'verified' ? 'active' : ''}`}
              onClick={() => setActiveFilter('verified')}
            >
              Verified Buyers
            </button>
            <button
              type="button"
              className={`pdp-filter-pill ${activeFilter === 'photos' ? 'active' : ''}`}
              onClick={() => setActiveFilter('photos')}
            >
              With Photos
            </button>
            <button
              type="button"
              className={`pdp-filter-pill ${activeFilter === 'highest' ? 'active' : ''}`}
              onClick={() => setActiveFilter('highest')}
            >
              5-Star Reviews
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="pdp-reviews-grid">
          {filteredReviews.map((rev) => {
            const addedVotes = helpfulVotes[rev.id] || 0
            const totalHelpful = (rev.helpfulCount || 0) + addedVotes
            const hasVoted = Boolean(helpfulVotes[rev.id])

            return (
              <article key={rev.id} className="pdp-review-card">
                <div className="pdp-review-top">
                  <div className="pdp-review-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="pdp-review-date">{rev.date}</span>
                </div>

                {rev.image && (
                  <div className="pdp-review-photo-wrap">
                    <img src={rev.image} alt={`${rev.name} wearing ${rev.wearing || 'ANBHA jewellery'}`} />
                    {rev.wearing && (
                      <span className="pdp-review-piece-badge">{rev.wearing}</span>
                    )}
                  </div>
                )}

                <blockquote className="pdp-review-quote">
                  “{rev.quote}”
                </blockquote>

                <div className="pdp-review-footer">
                  <div className="pdp-review-author-meta">
                    <strong className="pdp-review-author-name">{rev.name}</strong>
                    {rev.city && <span className="pdp-review-city">{rev.city}</span>}
                    {rev.verified && (
                      <span className="pdp-verified-badge" title="Verified Purchase">
                        <CheckCircle size={11} strokeWidth={2} />
                        <span>Verified Buyer</span>
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className={`pdp-helpful-btn ${hasVoted ? 'voted' : ''}`}
                    onClick={() => handleHelpful(rev.id)}
                    aria-label={`Mark as helpful. Currently ${totalHelpful} found helpful`}
                    disabled={hasVoted}
                  >
                    <ThumbsUp size={12} strokeWidth={1.3} />
                    <span>Helpful ({totalHelpful})</span>
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
