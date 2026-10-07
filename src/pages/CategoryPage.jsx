import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Heart, Star } from 'lucide-react'
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
  const [activeFilter, setActiveFilter] = useState('All')
  const [sortBy, setSortBy] = useState('featured') // featured | price-asc | price-desc | rating

  // Scroll to top upon navigating to a new category
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    setActiveFilter('All')
  }, [categorySlug])

  const category = categoriesCatalog[categorySlug] || categoriesCatalog.bracelets

  // Filter products by tag
  let filteredProducts = [...category.products]
  if (activeFilter !== 'All') {
    filteredProducts = filteredProducts.filter(
      (p) => p.categoryTag.toLowerCase() === activeFilter.toLowerCase()
    )
  }

  // Sort products
  if (sortBy === 'price-asc') {
    filteredProducts.sort((a, b) => a.priceNum - b.priceNum)
  } else if (sortBy === 'price-desc') {
    filteredProducts.sort((a, b) => b.priceNum - a.priceNum)
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop by Category', href: '#categories' },
    { label: category.title, href: `#category-${category.slug}` },
  ]

  // Category switch tabs
  const allCategoryKeys = [
    { slug: 'bracelets', label: 'Bracelets' },
    { slug: 'earrings', label: 'Earrings' },
    { slug: 'rings', label: 'Rings' },
    { slug: 'necklaces', label: 'Necklaces' }
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
          <div className="category-header-bar">
            <div>
              <p className="eyebrow">{category.eyebrow}</p>
              <h1 className="category-title">{category.title}</h1>
            </div>

            {/* Sub-navigation tabs for all 4 categories */}
            <div className="category-nav-switcher" role="tablist" aria-label="Browse categories">
              {allCategoryKeys.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  role="tab"
                  aria-selected={categorySlug === cat.slug}
                  className={`category-switch-tab ${categorySlug === cat.slug ? 'active' : ''}`}
                  onClick={() => onNavigateCategory(cat.slug)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Toolbar (Filters & Sorter) */}
      <section className="category-catalog-section">
        <div className="pdp-container">
          <div className="category-toolbar">
            <div className="category-filter-pills" role="tablist" aria-label="Filter category items">
              {category.filterTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`category-filter-pill ${activeFilter === tag ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="category-sort-wrap">
              <label htmlFor="category-sort-select" className="category-sort-label">
                Sort by:
              </label>
              <select
                id="category-sort-select"
                className="category-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured Curations</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="category-count-label">
            Showing {filteredProducts.length} handcrafted {category.title.toLowerCase()}
          </div>

          {/* Catalog Grid */}
          <div className="category-products-grid">
            {filteredProducts.map((prod) => {
              const isFav = favourites.includes(prod.name)

              return (
                <article
                  key={prod.id}
                  className="category-prod-card"
                  onClick={() => {
                    if (prod.isPdp || prod.name.includes('Infinity')) {
                      onNavigatePdp()
                    } else {
                      onNavigatePdp()
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="category-prod-media">
                    {prod.badge && (
                      <span className="category-prod-badge">{prod.badge}</span>
                    )}

                    <button
                      type="button"
                      className={`category-prod-fav ${isFav ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        onToggleFavourite(prod.name)
                      }}
                      aria-label={`Save ${prod.name} to wishlist`}
                    >
                      <Heart
                        size={15}
                        fill={isFav ? 'currentColor' : 'none'}
                        strokeWidth={1.5}
                      />
                    </button>

                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="category-prod-img"
                      loading="lazy"
                    />

                    <div className="category-prod-overlay">
                      <button
                        type="button"
                        className="category-prod-quick-add"
                        onClick={(e) => {
                          e.stopPropagation()
                          onAddToCart({
                            name: prod.name,
                            type: prod.type,
                            price: prod.price,
                            image: prod.image
                          })
                        }}
                      >
                        Quick Add to Bag
                      </button>
                    </div>
                  </div>

                  <div className="category-prod-details">
                    <div className="category-prod-rating">
                      <Star size={11} fill="currentColor" strokeWidth={0} />
                      <span>{prod.rating}</span>
                      <span className="category-prod-rev-count">({prod.reviewsCount})</span>
                    </div>

                    <h3 className="category-prod-name">{prod.name}</h3>
                    <p className="category-prod-spec">{prod.type}</p>

                    <div className="category-prod-pricing">
                      <span className="category-prod-price">{prod.price}</span>
                      <span className="category-prod-mrp">{prod.mrp}</span>
                      <span className="category-prod-discount">{prod.discount}</span>
                    </div>
                  </div>
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
