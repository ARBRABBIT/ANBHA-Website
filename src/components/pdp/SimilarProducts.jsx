import React, { useState } from 'react'
import { Star, Plus } from 'lucide-react'

export function SimilarProducts({ groupings, onAddToCart, onSelectProduct }) {
  const [activeTab, setActiveTab] = useState(0)

  if (!groupings || !groupings.length) return null

  const currentGroup = groupings[activeTab] || groupings[0]

  return (
    <section className="pdp-similar-section" aria-labelledby="pdp-similar-title">
      <div className="pdp-container">
        <div className="section-heading">
          <p className="eyebrow">Discover More</p>
          <h2 id="pdp-similar-title">More pieces to discover.</h2>
        </div>

        {/* Tab Pills */}
        <div className="pdp-similar-tabs" role="tablist" aria-label="Similar collections">
          {groupings.map((group, idx) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={activeTab === idx}
              className={`pdp-similar-tab ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {group.tabLabel}
            </button>
          ))}
        </div>

        {/* Items Grid for Current Tab */}
        <div className="pdp-similar-grid">
          {currentGroup.items.map((prod) => (
            <article key={prod.id || prod.name} className="pdp-similar-card">
              <div className="pdp-similar-img-box">
                <img src={prod.image} alt={prod.name} loading="lazy" />
                <button
                  type="button"
                  className="pdp-similar-quick-add"
                  onClick={() => onAddToCart(prod)}
                  aria-label={`Quick add ${prod.name}`}
                >
                  <Plus size={14} />
                  <span>Quick Add</span>
                </button>
              </div>

              <div className="pdp-similar-meta">
                <div className="pdp-similar-rating">
                  <Star size={11} fill="currentColor" strokeWidth={0} />
                  <span>{prod.rating}</span>
                  <span className="dot">·</span>
                  <span>{prod.reviews}</span>
                </div>

                <h3
                  className="pdp-similar-name"
                  onClick={() => onSelectProduct && onSelectProduct(prod)}
                >
                  {prod.name}
                </h3>

                <div className="pdp-similar-pricing">
                  <strong>{prod.price}</strong>
                  {prod.mrp && <span>{prod.mrp}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
