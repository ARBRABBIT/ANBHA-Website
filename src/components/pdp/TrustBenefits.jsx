import React from 'react'
import { Sparkles, ShieldCheck, Clock, RotateCcw, Truck } from 'lucide-react'

const benefitIcons = {
  purity: Sparkles,
  returns: RotateCcw,
  warranty: Clock,
  shipping: Truck,
}

export function TrustBenefits({ benefits }) {
  if (!benefits || !benefits.length) return null

  return (
    <div className="pdp-trust-benefits" aria-label="Studio Commitments & Guarantees">
      <div className="pdp-trust-grid">
        {benefits.map((item) => {
          const Icon = benefitIcons[item.id] || Sparkles
          return (
            <div key={item.id} className="pdp-trust-item">
              <div className="pdp-trust-icon-box" aria-hidden="true">
                <Icon size={14} strokeWidth={1.3} />
              </div>
              <div className="pdp-trust-copy">
                <strong className="pdp-trust-title">{item.title}</strong>
                <span className="pdp-trust-desc">{item.desc}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
