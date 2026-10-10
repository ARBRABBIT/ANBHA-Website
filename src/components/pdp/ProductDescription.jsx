import React, { useState } from 'react'
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react'

export function ProductDescription({ descriptionData }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!descriptionData) return null

  const {
    hook,
    theDesign,
    specifications = [],
    stylingTip
  } = descriptionData

  return (
    <div className="pdp-quick-desc-card">
      <div className="pdp-quick-desc-header">
        <Sparkles size={13} strokeWidth={1.4} className="pdp-quick-desc-icon" />
        <span className="pdp-quick-desc-title">Product Description</span>
      </div>

      {hook && <p className="pdp-quick-desc-hook">{hook}</p>}

      {theDesign && (
        <div className="pdp-quick-desc-section">
          <span className="pdp-quick-desc-subheading">The Design:</span>
          <p className="pdp-quick-desc-body">{theDesign}</p>
        </div>
      )}

      {isExpanded && (
        <div className="pdp-quick-desc-collapsible">
          {specifications.length > 0 && (
            <ul className="pdp-quick-desc-spec-list">
              {specifications.map((item, idx) => (
                <li key={idx} className="pdp-quick-desc-spec-item">
                  <span className="pdp-quick-desc-bullet" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {stylingTip && (
            <div className="pdp-quick-desc-styling-wrap">
              <span className="pdp-quick-desc-subheading">Styling Tip:</span>
              <p className="pdp-quick-desc-body">{stylingTip}</p>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        className="pdp-quick-desc-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
        {isExpanded ? (
          <ChevronUp size={13} strokeWidth={1.6} />
        ) : (
          <ChevronDown size={13} strokeWidth={1.6} />
        )}
      </button>
    </div>
  )
}
