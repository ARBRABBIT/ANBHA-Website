import React, { useState } from 'react'
import { Plus, Check, ShoppingBag, ArrowRight } from 'lucide-react'
import infinityMain from '../../assets/infinity-bracelet-main.jpg'
import productPendant from '../../assets/product-pendant.jpg'
import productEarrings from '../../assets/product-earrings.jpg'

export function ComboOffer({ onAddToCart, onNotify }) {
  const [selectedIds, setSelectedIds] = useState(['combo-bracelet', 'combo-pendant', 'combo-earrings'])
  const [added, setAdded] = useState(false)

  const comboItems = [
    {
      id: 'combo-bracelet',
      name: 'Silver Infinity Bracelet',
      type: 'Bracelet',
      badge: 'This Item',
      price: 1999,
      mrp: 3099,
      image: infinityMain,
      required: true,
    },
    {
      id: 'combo-pendant',
      name: 'Moon Disc Pendant',
      type: 'Necklace',
      badge: 'Matching Silhouette',
      price: 2699,
      mrp: 3599,
      image: productPendant,
      required: false,
    },
    {
      id: 'combo-earrings',
      name: 'Petal Drop Earrings',
      type: 'Earrings',
      badge: 'Artisan Pair',
      price: 1899,
      mrp: 2499,
      image: productEarrings,
      required: false,
    },
  ]

  const toggleItem = (id) => {
    // Current main product is always kept
    if (id === 'combo-bracelet') return
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id))
      }
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const selectedItems = comboItems.filter((item) => selectedIds.includes(item.id))

  // Bundle bonus savings
  const bundleBonusDiscount = selectedIds.length === 3 ? 800 : selectedIds.length === 2 ? 400 : 0
  const subtotalPrice = selectedItems.reduce((acc, curr) => acc + curr.price, 0)
  const subtotalMrp = selectedItems.reduce((acc, curr) => acc + curr.mrp, 0)
  const finalComboPrice = subtotalPrice - bundleBonusDiscount
  const totalSavings = subtotalMrp - finalComboPrice

  const handleAddCombo = () => {
    if (onAddToCart) {
      selectedItems.forEach((item) => {
        onAddToCart({
          id: item.id,
          name: item.name,
          price: `₹${item.price.toLocaleString('en-IN')}`,
          priceNum: item.price,
          image: item.image,
          quantity: 1,
        })
      })
    }
    setAdded(true)
    if (onNotify) {
      onNotify(`${selectedItems.length} pieces from Combo Offer added to your bag!`)
    }
    setTimeout(() => setAdded(false), 3000)
  }

  return (
    <section className="pdp-combo-section" aria-labelledby="combo-offer-heading">
      <div className="pdp-container">
        <div className="pdp-combo-wrapper">
          {/* Header */}
          <div className="pdp-combo-header">
            <div className="pdp-combo-header-inner">
              <div className="pdp-combo-header-text">
                <h2 id="combo-offer-heading" className="pdp-combo-title">
                  Buy Combo Offer
                </h2>
                <p className="pdp-combo-subtitle">
                  Save more with our combo offer.
                </p>
              </div>
              {bundleBonusDiscount > 0 && (
                <span className="pdp-combo-badge">
                  Save Extra ₹{bundleBonusDiscount} Bundle Privilege
                </span>
              )}
            </div>
          </div>

          {/* Main Grid: Products + Pricing Card */}
          <div className="pdp-combo-content-grid">
            {/* Products Row / Cards */}
            <div className="pdp-combo-items-row">
              {comboItems.map((item, idx) => {
                const isSelected = selectedIds.includes(item.id)
                return (
                  <React.Fragment key={item.id}>
                    {idx > 0 && (
                      <div className="pdp-combo-plus" aria-hidden="true">
                        <Plus size={16} strokeWidth={2} />
                      </div>
                    )}
                    <div
                      className={`pdp-combo-item-card ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => toggleItem(item.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${isSelected ? 'Remove' : 'Add'} ${item.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          toggleItem(item.id)
                        }
                      }}
                    >
                      <div className="pdp-combo-thumb-wrap">
                        <img src={item.image} alt={item.name} />
                        <div
                          className={`pdp-combo-checkbox ${isSelected ? 'checked' : ''}`}
                          aria-hidden="true"
                        >
                          {isSelected && <Check size={11} strokeWidth={3} />}
                        </div>
                        <span className="pdp-combo-item-tag">{item.badge}</span>
                      </div>
                      <div className="pdp-combo-item-info">
                        <h3 className="pdp-combo-item-name">{item.name}</h3>
                        <p className="pdp-combo-item-type">{item.type} · 925 Silver</p>
                        <div className="pdp-combo-item-pricing">
                          <strong className="pdp-combo-item-price">
                            ₹{item.price.toLocaleString('en-IN')}
                          </strong>
                          <span className="pdp-combo-item-mrp">
                            ₹{item.mrp.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
            </div>

            {/* Bundle Checkout Box */}
            <div className="pdp-combo-summary-box">
              <div className="pdp-combo-summary-header">
                <span className="pdp-combo-summary-kicker">Combo Bundle Total</span>
                <span className="pdp-combo-item-count">
                  {selectedItems.length} {selectedItems.length === 1 ? 'piece' : 'pieces'} selected
                </span>
              </div>

              <div className="pdp-combo-summary-pricing">
                <div className="pdp-combo-price-main">
                  <span className="pdp-combo-final-amount">
                    ₹{finalComboPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="pdp-combo-mrp-strike">
                    ₹{subtotalMrp.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="pdp-combo-savings-pill">
                  Total Savings ₹{totalSavings.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="pdp-combo-discount-breakdown">
                <span>Combo Bonus Savings:</span>
                <strong>{bundleBonusDiscount > 0 ? `-₹${bundleBonusDiscount} applied` : '₹0'}</strong>
              </div>

              <button
                type="button"
                className={`pdp-combo-cta-btn ${added ? 'is-added' : ''}`}
                onClick={handleAddCombo}
              >
                {added ? (
                  <>
                    <Check size={15} strokeWidth={2.4} />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={15} strokeWidth={1.8} />
                    <span>Add Combo to Bag</span>
                    <ArrowRight size={14} strokeWidth={1.8} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

