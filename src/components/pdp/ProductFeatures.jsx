import React from 'react'

export function ProductFeatures({ features }) {
  if (!features || !features.length) return null

  return (
    <div className="pdp-features-wrap" aria-label="Key Product Specifications">
      <div className="pdp-features-grid">
        {features.map((feat) => (
          <div key={feat.label} className="pdp-feature-item">
            <span className="pdp-feature-label">{feat.label}</span>
            <span className="pdp-feature-value">{feat.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
