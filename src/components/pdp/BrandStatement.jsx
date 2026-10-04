import React from 'react'

export function BrandStatement({ brandMoment }) {
  if (!brandMoment) return null

  return (
    <section className="pdp-brand-moment" aria-label="Brand Philosophy">
      <div className="pdp-container">
        <p className="eyebrow">{brandMoment.eyebrow || 'ANBHA Studio'}</p>
        <blockquote className="pdp-brand-moment-quote">
          “{brandMoment.quote}”
        </blockquote>
        <div className="pdp-brand-moment-seal">
          <span className="pdp-brand-name">{brandMoment.brand || 'ANBHA'}</span>
          <span className="pdp-brand-tagline">{brandMoment.motto || 'Pure Silver. Endless Stories.'}</span>
        </div>
      </div>
    </section>
  )
}
