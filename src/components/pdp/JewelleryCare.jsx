import React from 'react'
import { Sparkles, Droplets, Box, Sun, Shield } from 'lucide-react'

const careIcons = [Box, Droplets, Sun, Sparkles, Shield]

export function JewelleryCare({ instructions }) {
  if (!instructions || !instructions.length) return null

  return (
    <section className="pdp-care-section" aria-labelledby="pdp-care-title">
      <div className="pdp-container">
        <div className="section-heading">
          <p className="eyebrow">Longevity & Preservation</p>
          <h2 id="pdp-care-title">Care for your ANBHA.</h2>
          <p className="pdp-care-subtitle">
            Crafted in 925 sterling silver to last for generations with thoughtful handling.
          </p>
        </div>

        <div className="pdp-care-grid">
          {instructions.map((text, idx) => {
            const Icon = careIcons[idx % careIcons.length]
            return (
              <div key={idx} className="pdp-care-card">
                <div className="pdp-care-icon-wrap" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.2} />
                </div>
                <p className="pdp-care-text">{text}</p>
                <span className="pdp-care-step">0{idx + 1}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
