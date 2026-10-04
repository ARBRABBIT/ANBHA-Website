import React, { useState, useEffect } from 'react'
import { Breadcrumbs } from '../components/pdp/Breadcrumbs'
import { ProductHero } from '../components/pdp/ProductHero'
import { MobileStickyCart } from '../components/pdp/MobileStickyCart'
import { ProductStory } from '../components/pdp/ProductStory'
import { ProductDetailsAccordion } from '../components/pdp/ProductDetailsAccordion'
import { JewelleryCare } from '../components/pdp/JewelleryCare'
import { ShippingBenefits } from '../components/pdp/ShippingBenefits'
import { CustomerReviews } from '../components/pdp/CustomerReviews'
import { ProductRecommendations } from '../components/pdp/ProductRecommendations'
import { RecentlyViewed } from '../components/pdp/RecentlyViewed'
import { SimilarProducts } from '../components/pdp/SimilarProducts'
import { ProductFAQ } from '../components/pdp/ProductFAQ'
import { BrandStatement } from '../components/pdp/BrandStatement'
import { AllOffersModal } from '../components/pdp/AllOffersModal'
import { ImageLightbox } from '../components/pdp/ImageLightbox'

export function ProductDetailPage({
  product,
  onAddToCart,
  onBuyNow,
  favourites,
  onToggleFavourite,
  onNotify,
  onNavigateHome
}) {
  const [isOffersModalOpen, setIsOffersModalOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [isGiftAdded, setIsGiftAdded] = useState(false)
  const [giftMessage, setGiftMessage] = useState('')
  const [hidePrice, setHidePrice] = useState(true)

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  const isWishlisted = favourites.includes(product.name)

  const handleToggleWishlist = () => {
    onToggleFavourite(product.name)
    if (!isWishlisted) {
      onNotify('Saved to your wishlist')
    } else {
      onNotify('Removed from wishlist')
    }
  }

  const handleAddToCartWithGift = (item) => {
    const itemToAdd = {
      ...item,
      giftWrap: isGiftAdded
        ? {
            added: true,
            price: product.giftOptions.price,
            message: giftMessage,
            hidePrice: hidePrice,
          }
        : null,
    }
    onAddToCart(itemToAdd)
    onNotify(`Added ${product.name} to bag`)
  }

  const handleBuyNowWithGift = (item) => {
    const itemToAdd = {
      ...item,
      giftWrap: isGiftAdded
        ? {
            added: true,
            price: product.giftOptions.price,
            message: giftMessage,
            hidePrice: hidePrice,
          }
        : null,
    }
    onBuyNow(itemToAdd)
  }

  // SEO JSON-LD schema injection for pure semantic DOM markup
  useEffect(() => {
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          name: product.name,
          image: product.gallery.map((g) => g.src),
          description: product.shortStory,
          sku: product.id,
          brand: {
            '@type': 'Brand',
            name: 'ANBHA',
          },
          offers: {
            '@type': 'Offer',
            url: window.location.href,
            priceCurrency: 'INR',
            price: product.price,
            priceValidUntil: '2027-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'ANBHA Silver Jewellery',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: product.breadcrumb.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.label,
            item: item.href,
          })),
        },
      ],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schemaData)
    script.id = 'pdp-jsonld-schema'
    document.head.appendChild(script)

    return () => {
      const existing = document.getElementById('pdp-jsonld-schema')
      if (existing) existing.remove()
    }
  }, [product])

  return (
    <article className="pdp-page-root" id="top">
      {/* SECTION 01 — BREADCRUMB */}
      <Breadcrumbs items={product.breadcrumb} onNavigateHome={onNavigateHome} />

      {/* SECTION 02 — PRODUCT HERO (Gallery + Info) */}
      <ProductHero
        product={product}
        onAddToCart={handleAddToCartWithGift}
        onBuyNow={handleBuyNowWithGift}
        isWishlisted={isWishlisted}
        onToggleWishlist={handleToggleWishlist}
        onOpenAllOffers={() => setIsOffersModalOpen(true)}
        onOpenLightbox={(idx) => setLightboxIndex(idx)}
        onNotify={onNotify}
        isGiftAdded={isGiftAdded}
        onToggleGift={setIsGiftAdded}
        giftMessage={giftMessage}
        onGiftMessageChange={setGiftMessage}
        hidePrice={hidePrice}
        onToggleHidePrice={setHidePrice}
      />

      {/* SECTION 03 — PRODUCT STORY */}
      <ProductStory story={product.story} />

      {/* SECTION 04 — PRODUCT DETAILS ACCORDION */}
      <ProductDetailsAccordion items={product.detailsAccordion} />

      {/* SECTION 05 — JEWELLERY CARE */}
      <JewelleryCare instructions={product.careInstructions} />

      {/* SECTION 06 — SHIPPING, RETURN & WARRANTY */}
      <ShippingBenefits cards={product.shippingInfoCards} />

      {/* SECTION 07 — CUSTOMER REVIEWS */}
      <CustomerReviews reviewsData={product.reviewsData} />

      {/* SECTION 08 — YOU MAY ALSO LIKE */}
      <ProductRecommendations
        items={product.recommendations}
        onAddToCart={onAddToCart}
        favourites={favourites}
        onToggleFavourite={onToggleFavourite}
      />

      {/* SECTION 09 — RECENTLY VIEWED */}
      <RecentlyViewed
        items={product.recentlyViewed}
        onAddToCart={onAddToCart}
        favourites={favourites}
        onToggleFavourite={onToggleFavourite}
      />

      {/* SECTION 10 — SIMILAR PRODUCTS (More Pieces To Discover) */}
      <SimilarProducts
        groupings={product.similarGroupings}
        onAddToCart={onAddToCart}
      />

      {/* SECTION 11 — PRODUCT FAQ */}
      <ProductFAQ faqs={product.faqs} />

      {/* SECTION 12 — FINAL BRAND MOMENT */}
      <BrandStatement brandMoment={product.finalBrandMoment} />

      {/* SECTION 16 — MOBILE STICKY CART BAR */}
      <MobileStickyCart
        product={product}
        onAddToCart={handleAddToCartWithGift}
        onBuyNow={handleBuyNowWithGift}
      />

      {/* MODALS */}
      <AllOffersModal
        isOpen={isOffersModalOpen}
        onClose={() => setIsOffersModalOpen(false)}
        offers={product.allOffersList}
        onNotify={onNotify}
      />

      {lightboxIndex !== null && (
        <ImageLightbox
          key={lightboxIndex}
          initialIndex={lightboxIndex}
          images={product.gallery}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </article>
  )
}
