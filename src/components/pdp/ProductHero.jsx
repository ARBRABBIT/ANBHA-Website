import React, { useState } from 'react'
import { ProductGallery } from './ProductGallery'
import { ProductInfo } from './ProductInfo'

export function ProductHero({
  product,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onOpenLightbox,
  onNotify,
  onScrollToReviews
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <section className="pdp-hero-section" aria-label="Product Presentation">
      <div className="pdp-container pdp-hero-grid">
        {/* Left Column: Gallery */}
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

        {/* Right Column: Product Information */}
        <div className="pdp-hero-info-col">
          <ProductInfo
            product={product}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
            isWishlisted={isWishlisted}
            onToggleWishlist={onToggleWishlist}
            onNotify={onNotify}
            onScrollToReviews={onScrollToReviews}
          />
        </div>
      </div>
    </section>
  )
}
