import React, { useState } from 'react'
import { ProductGallery } from './ProductGallery'
import { ProductInfo } from './ProductInfo'

export function ProductHero({
  product,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onOpenAllOffers,
  onOpenLightbox,
  onNotify,
  onScrollToReviews,
  isGiftAdded,
  onToggleGift,
  giftMessage,
  onGiftMessageChange,
  hidePrice,
  onToggleHidePrice
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <section className="pdp-hero-section" aria-label="Product Presentation">
      <div className="pdp-container pdp-hero-grid">
        {/* Left Column: 55-60% Gallery */}
        <div className="pdp-hero-gallery-col">
          <ProductGallery
            images={product.gallery}
            activeIndex={activeImageIndex}
            onSelectImage={setActiveImageIndex}
            onOpenLightbox={onOpenLightbox}
            isWishlisted={isWishlisted}
            onToggleWishlist={onToggleWishlist}
            onNotify={onNotify}
          />
        </div>

        {/* Right Column: 40-45% Product Information */}
        <div className="pdp-hero-info-col">
          <ProductInfo
            product={product}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
            isWishlisted={isWishlisted}
            onToggleWishlist={onToggleWishlist}
            onOpenAllOffers={onOpenAllOffers}
            onNotify={onNotify}
            onScrollToReviews={onScrollToReviews}
            isGiftAdded={isGiftAdded}
            onToggleGift={onToggleGift}
            giftMessage={giftMessage}
            onGiftMessageChange={onGiftMessageChange}
            hidePrice={hidePrice}
            onToggleHidePrice={onToggleHidePrice}
          />
        </div>
      </div>
    </section>
  )
}
