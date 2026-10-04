import React, { useState } from 'react'
import { Truck, RotateCcw, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react'

const benefitIcons = [Truck, RotateCcw, ShieldCheck, Sparkles]

export function ShippingBenefits({ cards }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleLearnMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  if (!cards || !cards.length) return null

  return (
    <section className="pdp-shipping-section" aria-labelledby="pdp-shipping-title">
      <div className="pdp-container">
        <div className="section-heading centered">
          <p className="eyebrow">Assurances & Service</p>
          <h2 id="pdp-shipping-title">Delivered with complete care.</h2>
        </div>

        <div className="pdp-shipping-grid">
          {cards.map((card, idx) => {
            const Icon = benefitIcons[idx % benefitIcons.length]
            const isExpanded = expandedIndex === idx

            return (
              <div key={card.title} className="pdp-shipping-card">
                <div className="pdp-shipping-header">
                  <div className="pdp-shipping-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.3} />
                  </div>
                  <h3 className="pdp-shipping-card-title">{card.title}</h3>
                </div>

                <p className="pdp-shipping-desc">{card.description}</p>

                {card.learnMore && (
                  <div className="pdp-shipping-more-wrap">
                    <button
                      type="button"
                      className="pdp-shipping-learn-more-btn"
                      onClick={() => toggleLearnMore(idx)}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
                      <ChevronDown
                        size={12}
                        className={`learn-more-icon ${isExpanded ? 'rotated' : ''}`}
                      />
                    </button>

                    {isExpanded && (
                      <p className="pdp-shipping-learn-more-text">
                        {card.learnMore}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
