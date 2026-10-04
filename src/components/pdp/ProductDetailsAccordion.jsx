import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function ProductDetailsAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0) // Default first item open

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  if (!items || !items.length) return null

  return (
    <section className="pdp-details-section" aria-labelledby="pdp-details-title">
      <div className="pdp-container">
        <div className="section-heading centered">
          <p className="eyebrow">Specifications & Contents</p>
          <h2 id="pdp-details-title">Designed with intention.</h2>
        </div>

        <div className="pdp-accordion-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            const accordionId = `accordion-content-${item.id || index}`
            const headerId = `accordion-header-${item.id || index}`

            return (
              <div
                key={item.id || index}
                className={`pdp-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  id={headerId}
                  className="pdp-accordion-btn"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={accordionId}
                >
                  <span className="pdp-accordion-title">{item.title}</span>
                  <span className="pdp-accordion-icon" aria-hidden="true">
                    <ChevronDown size={18} strokeWidth={1.4} />
                  </span>
                </button>

                <div
                  id={accordionId}
                  role="region"
                  aria-labelledby={headerId}
                  className="pdp-accordion-panel"
                  style={{
                    display: isOpen ? 'block' : 'none'
                  }}
                >
                  <ul className="pdp-accordion-bullets">
                    {item.items.map((bullet, bIdx) => (
                      <li key={bIdx} className="pdp-accordion-bullet-item">
                        <span className="pdp-bullet-marker" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
