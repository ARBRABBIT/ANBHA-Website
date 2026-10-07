import React, { useState } from 'react'
import { Sparkles, Copy, Check, ChevronRight } from 'lucide-react'

export function Offers({ offers, onOpenAllOffers, onNotify }) {
  const [copiedCode, setCopiedCode] = useState('')

  const primaryOffer = offers?.[0] || {
    code: 'ANBHA15',
    title: 'First Order Privilege',
    description: '15% off your first handcrafted silver jewellery order'
  }

  const handleCopy = (code, e) => {
    e.stopPropagation()
    if (!code) return
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code)
    }
    setCopiedCode(code)
    if (onNotify) onNotify(`Privilege code ${code} copied to clipboard`)
    setTimeout(() => setCopiedCode(''), 2400)
  }

  if (!offers || !offers.length) return null

  const isCopied = copiedCode === primaryOffer.code

  return (
    <div className="pdp-studio-offer-bar">
      <div className="pdp-offer-content-left">
        <div className="pdp-offer-icon-badge" aria-hidden="true">
          <Sparkles size={13} strokeWidth={1.3} />
        </div>
        <div className="pdp-offer-text-block">
          <div className="pdp-offer-title-row">
            <span className="pdp-offer-headline">{primaryOffer.title}</span>
            <span className="pdp-offer-code-pill">{primaryOffer.code}</span>
          </div>
          <p className="pdp-offer-micro-desc">{primaryOffer.description}</p>
        </div>
      </div>

      <div className="pdp-offer-actions-right">
        <button
          type="button"
          className={`pdp-offer-inline-copy ${isCopied ? 'copied' : ''}`}
          onClick={(e) => handleCopy(primaryOffer.code, e)}
          aria-label={`Copy code ${primaryOffer.code}`}
        >
          {isCopied ? (
            <>
              <Check size={11} strokeWidth={2} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={11} strokeWidth={1.4} />
              <span>Copy</span>
            </>
          )}
        </button>

        {onOpenAllOffers && (
          <button
            type="button"
            className="pdp-offer-all-trigger"
            onClick={onOpenAllOffers}
            aria-label="View all studio privileges"
          >
            <span>All Privileges</span>
            <ChevronRight size={11} />
          </button>
        )}
      </div>
    </div>
  )
}
