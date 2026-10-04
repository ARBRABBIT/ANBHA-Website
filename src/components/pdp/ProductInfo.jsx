import React from 'react'
import { ProductRating } from './ProductRating'
import { ProductPrice } from './ProductPrice'
import { ProductFeatures } from './ProductFeatures'
import { TrustBenefits } from './TrustBenefits'
import { Offers } from './Offers'
import { DeliveryChecker } from './DeliveryChecker'
import { GiftOption } from './GiftOption'
import { PurchaseActions } from './PurchaseActions'

export function ProductInfo({
  product,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onOpenAllOffers,
  onNotify,
  onScrollToReviews,
  isGiftAdded,
  onToggleGift,
  giftMessage,
  onGiftMessageChange,
  hidePrice,
  onToggleHidePrice
}) {
  return (
    <div className="pdp-info-column">
      {/* Category / Collection Eyebrow */}
      <div className="pdp-collection-tag">
        <span className="eyebrow">{product.collection || 'Pure 925 Silver'}</span>
      </div>

      {/* Product Title */}
      <h1 className="pdp-product-title">{product.name}</h1>

      {/* Rating Row */}
      <div className="pdp-rating-row">
        <ProductRating
          rating={product.rating}
          reviewCount={product.reviewCount}
          onScrollToReviews={onScrollToReviews}
        />
        <span className="pdp-stock-status">In Stock · Ready to Ship</span>
      </div>

      {/* Pricing */}
      <ProductPrice
        price={product.price}
        mrp={product.mrp}
        discountPercentage={product.discountPercentage}
        taxNote={product.taxNote}
      />

      {/* Short Emotional Description */}
      {product.shortStory && (
        <p className="pdp-short-story">{product.shortStory}</p>
      )}

      {/* Key Specifications Grid */}
      <ProductFeatures features={product.features} />

      {/* Purchase CTAs */}
      <PurchaseActions
        product={product}
        onAddToCart={onAddToCart}
        onBuyNow={onBuyNow}
        isWishlisted={isWishlisted}
        onToggleWishlist={onToggleWishlist}
      />

      {/* Delivery PIN Code Checker */}
      <DeliveryChecker deliveryInfo={product.delivery} />

      {/* Offers For You */}
      <Offers
        offers={product.offers}
        onOpenAllOffers={onOpenAllOffers}
        onNotify={onNotify}
      />

      {/* Gift Experience */}
      <GiftOption
        giftOptions={product.giftOptions}
        isGiftAdded={isGiftAdded}
        onToggleGift={onToggleGift}
        giftMessage={giftMessage}
        onGiftMessageChange={onGiftMessageChange}
        hidePrice={hidePrice}
        onToggleHidePrice={onToggleHidePrice}
      />

      {/* Trust & Guarantee Strip */}
      <TrustBenefits benefits={product.trustBenefits} />
    </div>
  )
}
