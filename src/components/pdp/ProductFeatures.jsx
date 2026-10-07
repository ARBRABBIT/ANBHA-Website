import React from 'react'

export function ProductFeatures({ features }) {
  if (!features || !features.length) return null

  return (
    <div className="pdp-specs-strip" aria-label="Key Product Specifications">
      <div className="pdp-specs-grid">
        {features.map((feat) => (
          <div key={feat.label} className="pdp-spec-unit">
            <span className="pdp-spec-tag">{feat.label}</span>
            <span className="pdp-spec-detail">{feat.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
