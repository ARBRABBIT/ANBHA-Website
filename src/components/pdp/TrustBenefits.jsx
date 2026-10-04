import React from 'react'
import { Sparkles, ShieldCheck, Clock, RotateCcw, BadgeCheck } from 'lucide-react'

const benefitIcons = {
  purity: Sparkles,
  plating: ShieldCheck,
  warranty: Clock,
  returns: RotateCcw,
  certified: BadgeCheck,
}

export function TrustBenefits({ benefits }) {
  if (!benefits || !benefits.length) return null

  return (
    <div className="pdp-trust-benefits" aria-label="ANBHA Guarantees & Trust Benefits">
      <div className="pdp-trust-list">
        {benefits.map((item) => {
          const Icon = benefitIcons[item.id] || Sparkles
          return (
            <div key={item.id} className="pdp-trust-item">
              <div className="pdp-trust-icon-box" aria-hidden="true">
                <Icon size={16} strokeWidth={1.3} />
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
