import React, { useEffect } from 'react'
import { ArrowLeft, ArrowRight, Heart, Star, ShoppingBag } from 'lucide-react'
import { Breadcrumbs } from '../components/pdp/Breadcrumbs'
import { categoriesCatalog } from '../data/categoriesData'

export function CategoryPage({
  categorySlug,
  onNavigateHome,
  onNavigateCategory,
  onNavigatePdp,
  onAddToCart,
  favourites,
  onToggleFavourite,
  onNotify
}) {
  // Scroll to top upon navigating to a new category
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [categorySlug])

  const category = categoriesCatalog[categorySlug] || categoriesCatalog.bracelets
  const filteredProducts = category.products || []

  const handleNavigateToCategories = () => {
    if (onNavigateHome) {
      onNavigateHome()
      setTimeout(() => {
        const el = document.getElementById('categories') || document.querySelector('.categories-section')
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -80, duration: 1.1 })
          } else {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }, 120)
    }
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/', onClick: onNavigateHome },
    { label: 'Shop by category', href: '#categories', onClick: handleNavigateToCategories },
    { label: category.title, href: `#category-${category.slug}` },
  ]

  return (
    <article className="category-page" aria-label={`${category.title} collection page`}>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={breadcrumbItems}
        onNavigateHome={onNavigateHome}
        onNavigateCategory={onNavigateCategory}
      />

      {/* Category Header */}
      <section className="category-header-section">
        <div className="pdp-container">
          <h1 className="category-title">{category.title}</h1>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="category-catalog-section">
        <div className="pdp-container">
          <div className="product-grid">
            {filteredProducts.map((prod) => {
              const isFav = favourites.includes(prod.name)

              return (
                <article
                  key={prod.id || prod.name}
                  className="product-card"
                  onClick={() => onNavigatePdp()}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-image">
                    {prod.badge && (
                      <span className="product-tag">{prod.badge}</span>
                    )}

                    <button
                      type="button"
                      className={`heart-button ${isFav ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        onToggleFavourite(prod.name)
                      }}
                      aria-label={`Save ${prod.name}`}
                    >
                      <Heart
                        size={18}
                        fill={isFav ? 'currentColor' : 'none'}
                        strokeWidth={1.5}
                      />
                    </button>

                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                    <div className="product-rating-badge">
                      <Star size={10} fill="currentColor" strokeWidth={0} />
                      <span>{prod.rating}</span>
                      <span className="product-rating-count">({prod.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="product-info">
                    <div>
                      <h3>{prod.name}</h3>
                      <p>{prod.type}</p>
                    </div>
                    <span>{prod.price}</span>
                  </div>

                  <button
                    type="button"
                    className="product-card-cta"
                    onClick={(e) => {
                      e.stopPropagation()
                      onAddToCart({
                        name: prod.name,
                        type: prod.type,
                        price: prod.price,
                        image: prod.image
                      })
                    }}
                    aria-label={`Add ${prod.name} to bag`}
                  >
                    <ShoppingBag size={13} strokeWidth={1.5} />
                    <span>Add to bag</span>
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Category Footnote / Quiet Storytelling */}
      <section className="category-story-band">
        <div className="pdp-container">
          <div className="category-story-box">
            <span className="eyebrow">The ANBHA Standard</span>
            <h2>Small batches. Generational hands.</h2>
            <p>
              Every {category.title.toLowerCase().replace('& cuffs', '').replace('& pendants', '').trim()} is
              fashioned from recycled, ethically sourced 925 sterling silver in our Jaipur studio. We make in
              limited editions to ensure uncompromising balance, gentle contours, and lasting strength.
            </p>
            <button
              type="button"
              className="category-story-home-btn"
              onClick={onNavigateHome}
            >
              <ArrowLeft size={14} /> Return to Home
            </button>
          </div>
        </div>
      </section>
    </article>
  )
}
