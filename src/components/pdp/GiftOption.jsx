import React from 'react'
import { Gift, Check } from 'lucide-react'

export function GiftOption({ giftOptions, isGiftAdded, onToggleGift, giftMessage, onGiftMessageChange, hidePrice, onToggleHidePrice }) {
  const handleToggle = () => {
    onToggleGift(!isGiftAdded)
  }

  return (
    <div className={`pdp-gift-box ${isGiftAdded ? 'active' : ''}`}>
      <div className="pdp-gift-main-row">
        <div className="pdp-gift-left">
          <div className="pdp-gift-icon-wrap" aria-hidden="true">
            <Gift size={16} strokeWidth={1.3} />
          </div>
          <div>
            <div className="pdp-gift-title-row">
              <h3 className="pdp-gift-title">Make It Special</h3>
              <span className="pdp-gift-price">+₹{giftOptions?.price || 50}</span>
            </div>
            <p className="pdp-gift-copy">Turn your ANBHA piece into a beautifully wrapped memory.</p>
          </div>
        </div>

        <button
          type="button"
          className={`pdp-gift-add-btn ${isGiftAdded ? 'added' : ''}`}
          onClick={handleToggle}
          aria-pressed={isGiftAdded}
          aria-label={isGiftAdded ? 'Remove premium gift wrap' : 'Add premium gift wrap for 50 rupees'}
        >
          {isGiftAdded ? (
            <>
              <Check size={12} strokeWidth={2} />
              <span>Added</span>
            </>
          ) : (
            <span>Add</span>
          )}
        </button>
      </div>

      {isGiftAdded && (
        <div className="pdp-gift-expansion">
          <div className="pdp-gift-perks-list">
            <span>• Signature sage textured wrapping & satin ribbon</span>
            <span>• Embossed deckle-edge note card</span>
            <span>• Tamper-proof transit box</span>
          </div>

          <div className="pdp-gift-fields">
            <label className="pdp-gift-message-label" htmlFor="gift-note-input">
              Gift Message (Optional)
            </label>
            <textarea
              id="gift-note-input"
              rows={2}
              maxLength={160}
              placeholder="Write a heartfelt note to accompany this piece..."
              value={giftMessage}
              onChange={(e) => onGiftMessageChange(e.target.value)}
              className="pdp-gift-textarea"
            />

            <label className="pdp-gift-checkbox-row">
              <input
                type="checkbox"
                checked={hidePrice}
                onChange={(e) => onToggleHidePrice(e.target.checked)}
                className="pdp-gift-checkbox"
              />
              <span className="pdp-gift-checkbox-label">
                Hide price invoice inside package (sent via email only)
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
