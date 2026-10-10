import React, { useState, useEffect } from 'react'
import { ProductHero } from '../components/pdp/ProductHero'
import { ComboOffer } from '../components/pdp/ComboOffer'
import { MobileStickyCart } from '../components/pdp/MobileStickyCart'
import { CustomerReviews } from '../components/pdp/CustomerReviews'
import { ProductRecommendations } from '../components/pdp/ProductRecommendations'
import { ProductFAQ } from '../components/pdp/ProductFAQ'
import { ImageLightbox } from '../components/pdp/ImageLightbox'

export function ProductDetailPage({
  product,
  onAddToCart,
  onBuyNow,
  favourites,
  onToggleFavourite,
  onNotify,
  onNavigateHome,
  onNavigateCategory
}) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

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

  const handleScrollToReviews = () => {
    const el = document.getElementById('customer-reviews')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAddToCart = (item) => {
    onAddToCart(item)
    onNotify(`Added ${product.name} to bag`)
  }

  const handleBuyNow = (item) => {
    onBuyNow(item)
  }

  // SEO JSON-LD schema injection for semantic DOM markup
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
      {/* SECTION 02 — PRODUCT HERO (Gallery + Thoughtful Information) */}
      <ProductHero
        product={product}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        isWishlisted={isWishlisted}
        onToggleWishlist={handleToggleWishlist}
        onOpenLightbox={(idx) => setLightboxIndex(idx)}
        onNotify={onNotify}
        onScrollToReviews={handleScrollToReviews}
      />

      {/* SECTION 02.5 — CURATED COMBO OFFER */}
      <ComboOffer
        onAddToCart={handleAddToCart}
        onNotify={onNotify}
      />

      {/* SECTION 03 — CUSTOMER STORIES & VERIFIED REVIEWS */}
      <CustomerReviews reviewsData={product.reviewsData} />

      {/* SECTION 06 — CURATED PAIRINGS (Complete Your Set) */}
      <ProductRecommendations
        items={product.recommendations}
        onAddToCart={onAddToCart}
        favourites={favourites}
        onToggleFavourite={onToggleFavourite}
      />

      {/* SECTION 07 — STUDIO CONCIERGE FAQ */}
      <ProductFAQ faqs={product.faqs} />

      {/* MOBILE STICKY CART BAR */}
      <MobileStickyCart
        product={product}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* LIGHTBOX */}
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
