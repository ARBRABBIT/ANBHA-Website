import React, { useState } from 'react'
import { X, Tag, Copy, Check } from 'lucide-react'

export function AllOffersModal({ isOpen, onClose, offers, onNotify }) {
  const [copiedCode, setCopiedCode] = useState('')

  if (!isOpen) return null

  const handleCopy = (code) => {
    if (!code) return
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code)
    }
    setCopiedCode(code)
    if (onNotify) onNotify(`Coupon ${code} copied!`)
    setTimeout(() => setCopiedCode(''), 2200)
  }

  return (
    <div className="panel-overlay pdp-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="all-offers-title">
      <div className="pdp-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="pdp-modal-header">
          <div className="pdp-modal-title-wrap">
            <Tag size={18} strokeWidth={1.3} className="pdp-modal-icon" />
            <h2 id="all-offers-title" className="pdp-modal-title">Available Offers</h2>
          </div>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close offers dialog"
          >
            <X size={20} />
          </button>
        </div>

        <p className="pdp-modal-subtitle">
          Apply any eligible code at checkout for immediate price adjustments.
        </p>

        <div className="pdp-modal-offers-list">
          {offers.map((offer) => {
            const isCopied = copiedCode === offer.code
            return (
              <div key={offer.code} className="pdp-modal-offer-card">
                <div className="pdp-modal-offer-top">
                  <span className="pdp-modal-offer-code">{offer.code}</span>
                  <button
                    type="button"
                    className={`pdp-modal-copy-btn ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopy(offer.code)}
                  >
                    {isCopied ? (
                      <>
                        <Check size={13} />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <strong className="pdp-modal-offer-name">{offer.title}</strong>
                <p className="pdp-modal-offer-desc">{offer.description}</p>
                {offer.terms && (
                  <span className="pdp-modal-offer-terms">T&C: {offer.terms}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
