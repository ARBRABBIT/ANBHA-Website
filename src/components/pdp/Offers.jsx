import React, { useState } from 'react'
import { Tag, Copy, Check, ChevronRight } from 'lucide-react'

export function Offers({ offers, onOpenAllOffers, onNotify }) {
  const [copiedCode, setCopiedCode] = useState('')

  const handleCopy = (code, e) => {
    e.stopPropagation()
    if (!code) return
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code)
    }
    setCopiedCode(code)
    if (onNotify) onNotify(`Coupon code ${code} copied to clipboard`)
    setTimeout(() => setCopiedCode(''), 2400)
  }

  if (!offers || !offers.length) return null

  return (
    <div className="pdp-offers-card">
      <div className="pdp-offers-header">
        <div className="pdp-offers-heading">
          <div className="pdp-offers-title-wrap">
            <Tag size={15} strokeWidth={1.3} className="pdp-offers-icon" />
            <h3 className="pdp-offers-title">Offers For You</h3>
          </div>
          <span className="pdp-offers-subtitle">Applicable at checkout</span>
        </div>
        {onOpenAllOffers && (
          <button
            type="button"
            className="pdp-offers-view-all"
            onClick={onOpenAllOffers}
          >
            <span>View All</span>
            <ChevronRight size={13} />
          </button>
        )}
      </div>

      <div className="pdp-offers-list">
        {offers.slice(0, 3).map((offer) => {
          const isCopied = copiedCode === offer.code
          return (
            <div key={offer.id} className="pdp-offer-item">
              <div className="pdp-offer-info">
                <div className="pdp-offer-badge-row">
                  <span className="pdp-offer-code">{offer.code || offer.discount}</span>
                  <strong className="pdp-offer-title">{offer.title}</strong>
                </div>
                <p className="pdp-offer-desc">{offer.description}</p>
              </div>
              {offer.code && (
                <button
                  type="button"
                  className={`pdp-offer-copy-btn ${isCopied ? 'copied' : ''}`}
                  onClick={(e) => handleCopy(offer.code, e)}
                  aria-label={`Copy code ${offer.code}`}
                >
                  {isCopied ? (
                    <>
                      <Check size={12} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
