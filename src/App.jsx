import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { ArrowRight, Camera, Check, ChevronDown, Heart, Leaf, Menu, Quote, Search, ShieldCheck, ShoppingBag, Sparkles, Truck, X } from 'lucide-react'
import heroImage from './assets/anbha-hero.jpg'
import heroNecklaceImage from './assets/anbha-hero-necklace.jpg'
import heroCuffImage from './assets/anbha-hero-cuff.jpg'
import artisanImage from './assets/anbha-artisan.jpg'
import earringsImage from './assets/category-earrings.jpg'
import ringsImage from './assets/category-rings.jpg'
import necklacesImage from './assets/category-necklaces.jpg'
import braceletsImage from './assets/category-bracelets.jpg'
import productRingImage from './assets/product-ring.jpg'
import productEarringsImage from './assets/product-earrings.jpg'
import productPendantImage from './assets/product-pendant.jpg'
import reviewNecklaceImage from './assets/customer-review-necklace.jpg'
import reviewEarringsImage from './assets/customer-review-earrings.jpg'
import reviewCuffImage from './assets/customer-review-cuff.jpg'
import navLogo from './assets/6.svg'
import footerLogo from './assets/2.svg'
import { productData } from './data/productData'
import { ProductDetailPage } from './pages/ProductDetailPage'
import './App.css'

const heroSlides = [
  { image: heroImage, alt: 'Handcrafted silver necklace and earrings on ivory stone', eyebrow: 'Made slowly. Worn always.', title: 'Silver,', accent: 'made personal.', description: 'Quietly expressive pieces shaped by hand, designed to live with you through every day and occasion.', action: 'Discover the collection' },
  { image: heroNecklaceImage, alt: 'Silver pendant necklace and rings arranged on a limestone arch', eyebrow: 'The everyday edit', title: 'Light to wear,', accent: 'made to remain.', description: 'Considered silver forms that feel effortless today and become more personal with time.', action: 'Shop necklaces' },
  { image: heroCuffImage, alt: 'Hammered silver cuff and drop earrings on ivory linen', eyebrow: 'Touched by hand', title: 'Quiet forms,', accent: 'lasting feeling.', description: 'Small-batch pieces where subtle texture and traditional craft meet a modern point of view.', action: 'Explore new pieces' },
]

const products = [
  { name: 'ANBHA Silver Infinity Bracelet', type: 'Pure 925 sterling silver', price: '₹1,999', image: braceletsImage },
  { name: 'Riverform Ring', type: 'Hand-finished 925 silver', price: '₹2,490', image: productRingImage },
  { name: 'Petal Drop Earrings', type: 'Hand-finished 925 silver', price: '₹3,290', image: productEarringsImage },
  { name: 'Moon Disc Pendant', type: 'Hand-hammered 925 silver', price: '₹3,790', image: productPendantImage },
]

const searchCatalog = [
  {
    name: 'ANBHA Silver Infinity Bracelet',
    category: 'Bracelets',
    type: 'Pure 925 sterling silver',
    price: '₹1,999',
    image: braceletsImage,
    target: 'pdp',
    badge: 'Bestseller'
  },
  {
    name: 'Riverform Ring',
    category: 'Rings',
    type: 'Hand-finished 925 silver',
    price: '₹2,490',
    image: productRingImage,
    target: 'home',
    section: '#products'
  },
  {
    name: 'Petal Drop Earrings',
    category: 'Earrings',
    type: 'Hand-finished 925 silver',
    price: '₹3,290',
    image: productEarringsImage,
    target: 'home',
    section: '#products'
  },
  {
    name: 'Moon Disc Pendant',
    category: 'Necklaces',
    type: 'Hand-hammered 925 silver',
    price: '₹3,790',
    image: productPendantImage,
    target: 'home',
    section: '#products'
  },
  {
    name: 'Stillwater Silver Cuff',
    category: 'Bracelets',
    type: 'Hand-hammered 925 silver',
    price: '₹2,890',
    image: heroCuffImage,
    target: 'home',
    section: '#products'
  },
]

const categories = [
  { name: 'Bracelets', image: braceletsImage },
  { name: 'Earrings', image: earringsImage },
  { name: 'Rings', image: ringsImage },
  { name: 'Necklaces', image: necklacesImage },
]

const faqs = [
  ['Is every piece made with real silver?', 'Yes. Every ANBHA piece is crafted in hallmarked 925 sterling silver and arrives with an authenticity card.'],
  ['How should I care for my jewellery?', 'Store it dry in its pouch, avoid perfume and moisture, and restore its glow with the soft polishing cloth included in your order.'],
  ['Do you offer returns or exchanges?', 'We accept unused pieces in their original packaging within 15 days of delivery. Earrings are excluded for hygiene reasons.'],
  ['How long will my order take to arrive?', 'Ready pieces usually ship within 24 hours and reach most Indian cities in 2–4 business days.'],
]

const reviews = [
  {
    quote: 'The finish is beautiful and the piece feels so considered. It has quietly become the necklace I reach for every morning.',
    name: 'Meera S.',
    city: 'Bengaluru',
    image: reviewNecklaceImage,
    piece: 'Moon Disc Pendant',
  },
  {
    quote: 'Even the packaging felt special. The earrings are light enough for all day, but still look like a statement.',
    name: 'Aanya R.',
    city: 'Mumbai',
    image: reviewEarringsImage,
    piece: 'Petal Drop Earrings',
  },
  {
    quote: 'I bought the cuff as a gift and ended up ordering one for myself. Understated, beautifully made, and very ANBHA.',
    name: 'Kavya N.',
    city: 'Hyderabad',
    image: reviewCuffImage,
    piece: 'Stillwater Cuff',
  },
]

function App() {
  const [currentView, setCurrentView] = useState('home') // Home page is default; clicking product opens PDP
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [favourites, setFavourites] = useState(['ANBHA Silver Infinity Bracelet'])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [notice, setNotice] = useState('')
  const [activeHero, setActiveHero] = useState(0)

  const searchContainerRef = useRef(null)
  const mobileSearchRef = useRef(null)
  const desktopInputRef = useRef(null)
  const mobileInputRef = useRef(null)

  // Rotating suggestions: slides up from down as a whole word/phrase
  const rotatingSuggestions = [
    'bracelets',
    'rings',
    'necklaces',
    'earrings',
    'silver cuffs',
    'moon pendants',
    'pure 925 silver',
  ]

  const [suggestionIndex, setSuggestionIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSuggestionIndex((prev) => (prev + 1) % rotatingSuggestions.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [rotatingSuggestions.length])

  const searchResults = searchQuery.trim()
    ? searchCatalog.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  useEffect(() => {
    const handleClickOutside = (event) => {
      const inDesktop = searchContainerRef.current && searchContainerRef.current.contains(event.target)
      const inMobile = mobileSearchRef.current && mobileSearchRef.current.contains(event.target)
      if (!inDesktop && !inMobile) {
        setSearchDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSearchDropdownOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
    })
    window.lenis = lenis

    return () => {
      delete window.lenis
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!notice) return undefined
    const timer = setTimeout(() => setNotice(''), 2800)
    return () => clearTimeout(timer)
  }, [notice])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = setInterval(() => setActiveHero((slide) => (slide + 1) % heroSlides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const addToCart = (product) => {
    const itemToAdd = {
      name: product.name,
      type: product.type || (product.features && product.features[0]?.value) || '925 Sterling Silver',
      price: typeof product.price === 'number' ? `₹${product.price.toLocaleString('en-IN')}` : product.price,
      image: product.image || (product.gallery && product.gallery[0]?.src) || braceletsImage,
      giftWrap: product.giftWrap || null
    }
    setCart((items) => [...items, itemToAdd])
    setNotice(`${product.name} added to your bag`)
  }

  const buyNow = (product) => {
    addToCart(product)
    setCartOpen(true)
  }

  const toggleFavourite = (name) => {
    setFavourites((items) => {
      const exists = items.includes(name)
      const next = exists ? items.filter((item) => item !== name) : [...items, name]
      setNotice(exists ? `${name} removed from wishlist` : `${name} saved to wishlist`)
      return next
    })
  }

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!new FormData(event.currentTarget).get('email')) return
    setNotice('Welcome to the ANBHA circle')
    event.currentTarget.reset()
  }

  const navigateToHome = () => {
    setCurrentView('home')
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  const navigateToPdp = () => {
    setCurrentView('pdp')
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  const handleSelectProduct = (product) => {
    setSearchDropdownOpen(false)
    setSearchQuery('')
    if (product.target === 'pdp' || product.name.includes('Infinity')) {
      navigateToPdp()
    } else {
      navigateToHome()
      setTimeout(() => {
        document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
    setNotice(`Viewing ${product.name}`)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    const matches = searchCatalog.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (matches.length > 0) {
      handleSelectProduct(matches[0])
    } else {
      setNotice(`No exact match for "${searchQuery}". Showing featured collection.`)
      navigateToHome()
      setTimeout(() => {
        document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
      setSearchDropdownOpen(false)
    }
  }

  const wishlistItems = favourites.map((favName) => {
    const found = searchCatalog.find((item) => item.name.toLowerCase() === favName.toLowerCase())
    if (found) return found
    return {
      name: favName,
      category: 'Jewellery',
      type: 'Pure 925 sterling silver',
      price: '₹1,999',
      image: braceletsImage,
      target: 'pdp'
    }
  })

  return (
    <div className="site-shell">
      {/* Announcement Bar */}
      <div className="announcement">
        <span>
          {currentView === 'pdp'
            ? 'Complimentary insured shipping across India · 925 Hallmarked pure silver'
            : 'Complimentary shipping across India on orders over ₹2,500'}
        </span>
        {currentView === 'pdp' ? (
          <button
            type="button"
            className="announcement-cta"
            onClick={navigateToHome}
          >
            Explore All
          </button>
        ) : (
          <button
            type="button"
            className="announcement-cta"
            onClick={navigateToPdp}
          >
            Shop now
          </button>
        )}
      </div>

      {/* Main Brand Header */}
      <header className="header">
        <button
          className="icon-button mobile-only"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <a
          className="brand-logo"
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            navigateToHome()
          }}
          aria-label="ANBHA home"
        >
          <img src={navLogo} alt="ANBHA" />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <div className="nav-item has-dropdown">
            <a
              href="#new"
              className="nav-link-anchor"
              onClick={(e) => {
                e.preventDefault()
                navigateToPdp()
              }}
            >
              New arrivals
            </a>
            <div className="category-dropdown" aria-label="New arrivals categories">
              <div className="dropdown-inner">
                <div className="dropdown-header">
                  <span className="dropdown-eyebrow">Available Categories</span>
                  <button
                    type="button"
                    className="dropdown-all-link"
                    onClick={navigateToPdp}
                  >
                    View Infinity Bracelet <ArrowRight size={13} />
                  </button>
                </div>
                <div className="dropdown-grid">
                  {categories.map((category) => (
                    <button
                      type="button"
                      className="dropdown-card"
                      key={category.name}
                      onClick={() => {
                        if (category.name === 'Bracelets') {
                          navigateToPdp()
                        } else {
                          navigateToHome()
                        }
                      }}
                    >
                      <div className="dropdown-thumb">
                        <img src={category.image} alt={category.name} />
                      </div>
                      <span className="dropdown-name">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => {
              setCurrentView('home')
              setTimeout(() => {
                document.querySelector('#new')?.scrollIntoView({ behavior: 'smooth' })
              }, 60)
            }}
          >
            Collections
          </button>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => {
              setCurrentView('home')
              setTimeout(() => {
                document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })
              }, 60)
            }}
          >
            Our story
          </button>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => {
              setCurrentView('home')
              setTimeout(() => {
                document.querySelector('#gifting')?.scrollIntoView({ behavior: 'smooth' })
              }, 60)
            }}
          >
            Gifting
          </button>
        </nav>

        {/* Open Search Bar in Nav Bar */}
        <div className="nav-search-container" ref={searchContainerRef}>
          <form
            className="nav-search-bar"
            onSubmit={handleSearchSubmit}
            role="search"
            onClick={() => desktopInputRef.current?.focus()}
          >
            <Search size={15} className="nav-search-icon" aria-hidden="true" />
            <div className="nav-search-field-wrap">
              <input
                ref={desktopInputRef}
                type="search"
                className="nav-search-input"
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value
                  setSearchQuery(val)
                  setSearchDropdownOpen(val.trim().length > 0)
                }}
                onFocus={() => {
                  if (searchQuery.trim().length > 0) {
                    setSearchDropdownOpen(true)
                  }
                }}
                aria-label="Search silver jewellery"
              />
              {!searchQuery && (
                <div className="animated-placeholder-track" aria-hidden="true">
                  <span className="placeholder-constant">Search</span>
                  <span className="placeholder-rotating-box">
                    <span key={suggestionIndex} className="placeholder-rotating-text">
                      {rotatingSuggestions[suggestionIndex]}
                    </span>
                  </span>
                </div>
              )}
            </div>
            {searchQuery && (
              <button
                type="button"
                className="nav-search-clear"
                onClick={(e) => {
                  e.stopPropagation()
                  setSearchQuery('')
                  setSearchDropdownOpen(false)
                }}
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </form>

          {/* Live Search Suggestions Dropdown - Opens when searching */}
          {searchDropdownOpen && searchQuery.trim() && (
            <div className="nav-search-dropdown" role="region" aria-label="Search suggestions">
              <div className="search-dropdown-section">
                <div className="search-dropdown-header">
                  <span>Categories</span>
                </div>
                <div className="search-category-pills">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      className="search-cat-pill"
                      onClick={() => {
                        setSearchDropdownOpen(false)
                        setSearchQuery('')
                        if (cat.name === 'Bracelets') {
                          navigateToPdp()
                        } else {
                          navigateToHome()
                          setTimeout(() => {
                            document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' })
                          }, 80)
                        }
                        setNotice(`Exploring ${cat.name}`)
                      }}
                    >
                      <Search size={10} /> {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="search-dropdown-header">
                <span>Matching Pieces ({searchResults.length})</span>
              </div>
              {searchResults.length > 0 ? (
                <div className="search-dropdown-results">
                  {searchResults.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      className="search-result-item"
                      onClick={() => handleSelectProduct(item)}
                    >
                      <img src={item.image} alt={item.name} className="search-result-thumb" />
                      <div className="search-result-details">
                        <span className="search-result-title">{item.name}</span>
                        <span className="search-result-type">{item.type}</span>
                        <span className="search-result-price">{item.price}</span>
                      </div>
                      <ArrowRight size={13} className="search-result-arrow" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="search-dropdown-empty">
                  <p>No pieces found matching &ldquo;{searchQuery}&rdquo;</p>
                  <span>Select one of the categories above</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="header-actions">
          <button
            className="icon-button wishlist-button"
            onClick={() => setWishlistOpen(true)}
            aria-label={`Wishlist with ${favourites.length} saved pieces`}
            title="Wishlist"
          >
            <Heart
              size={19}
              className={favourites.length > 0 ? 'heart-active' : ''}
              fill={favourites.length > 0 ? '#8b4b45' : 'none'}
            />
            {favourites.length > 0 && <span>{favourites.length}</span>}
          </button>
          <button
            className="icon-button bag-button"
            onClick={() => setCartOpen(true)}
            aria-label={`Shopping bag with ${cart.length} items`}
            title="Shopping bag"
          >
            <ShoppingBag size={19} />
            {cart.length > 0 && <span>{cart.length}</span>}
          </button>
        </div>
      </header>

      {/* Mobile Open Search Strip */}
      <div className="mobile-search-strip" ref={mobileSearchRef}>
        <form
          className="mobile-search-bar"
          onSubmit={handleSearchSubmit}
          role="search"
          onClick={() => mobileInputRef.current?.focus()}
        >
          <Search size={15} className="nav-search-icon" aria-hidden="true" />
          <div className="nav-search-field-wrap">
            <input
              ref={mobileInputRef}
              type="search"
              className="nav-search-input"
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value
                setSearchQuery(val)
                setSearchDropdownOpen(val.trim().length > 0)
              }}
              onFocus={() => {
                if (searchQuery.trim().length > 0) {
                  setSearchDropdownOpen(true)
                }
              }}
              aria-label="Search silver jewellery"
            />
            {!searchQuery && (
              <div className="animated-placeholder-track" aria-hidden="true">
                <span className="placeholder-constant">Search</span>
                <span className="placeholder-rotating-box">
                  <span key={suggestionIndex} className="placeholder-rotating-text">
                    {rotatingSuggestions[suggestionIndex]}
                  </span>
                </span>
              </div>
            )}
          </div>
          {searchQuery && (
            <button
              type="button"
              className="nav-search-clear"
              onClick={(e) => {
                e.stopPropagation()
                setSearchQuery('')
                setSearchDropdownOpen(false)
              }}
              aria-label="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </form>

        {/* Mobile dropdown - ONLY opens after typing a query */}
        {searchDropdownOpen && searchQuery.trim() && (
          <div className="nav-search-dropdown mobile-dropdown" role="region" aria-label="Search suggestions">
            <div className="search-dropdown-section">
              <div className="search-dropdown-header">
                <span>Categories</span>
              </div>
              <div className="search-category-pills">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    type="button"
                    className="search-cat-pill"
                    onClick={() => {
                      setSearchDropdownOpen(false)
                      setSearchQuery('')
                      if (cat.name === 'Bracelets') {
                        navigateToPdp()
                      } else {
                        navigateToHome()
                        setTimeout(() => {
                          document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' })
                        }, 80)
                      }
                      setNotice(`Exploring ${cat.name}`)
                    }}
                  >
                    <Search size={10} /> {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="search-dropdown-header">
              <span>Matching Pieces ({searchResults.length})</span>
            </div>
            {searchResults.length > 0 ? (
              <div className="search-dropdown-results">
                {searchResults.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    className="search-result-item"
                    onClick={() => handleSelectProduct(item)}
                  >
                    <img src={item.image} alt={item.name} className="search-result-thumb" />
                    <div className="search-result-details">
                      <span className="search-result-title">{item.name}</span>
                      <span className="search-result-type">{item.type}</span>
                      <span className="search-result-price">{item.price}</span>
                    </div>
                    <ArrowRight size={13} className="search-result-arrow" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="search-dropdown-empty">
                <p>No pieces found matching &ldquo;{searchQuery}&rdquo;</p>
                <span>Select one of the categories above</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main View: Product Detail Page (PDP) vs Home Page */}
      {currentView === 'pdp' ? (
        <ProductDetailPage
          product={productData}
          onAddToCart={addToCart}
          onBuyNow={buyNow}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
          onNotify={setNotice}
          onNavigateHome={navigateToHome}
        />
      ) : (
        <main id="top">
          <section className="hero-section" aria-roledescription="carousel" aria-label="Featured ANBHA collections">
            {heroSlides.map((slide, index) => (
              <img
                className={`hero-slide-image ${activeHero === index ? 'active' : ''}`}
                src={slide.image}
                alt={activeHero === index ? slide.alt : ''}
                aria-hidden={activeHero !== index}
                key={slide.image}
              />
            ))}
            <div className="hero-shade" />
            <div className="hero-copy" key={activeHero} aria-live="polite">
              <p className="eyebrow">{heroSlides[activeHero].eyebrow}</p>
              <h1>{heroSlides[activeHero].title}<br /><em>{heroSlides[activeHero].accent}</em></h1>
              <p className="hero-description">{heroSlides[activeHero].description}</p>
              <button
                type="button"
                className="primary-button"
                onClick={navigateToPdp}
              >
                {heroSlides[activeHero].action} <ArrowRight size={17} />
              </button>
            </div>
            <div className="hero-note">Hallmarked 925 sterling silver</div>
            <div className="hero-pagination" aria-label="Carousel pagination">
              <div className="hero-dots">
                {heroSlides.map((slide, index) => (
                  <button
                    className={activeHero === index ? 'active' : ''}
                    onClick={() => setActiveHero(index)}
                    aria-label={`Show slide ${index + 1}: ${slide.title} ${slide.accent}`}
                    aria-current={activeHero === index ? 'true' : undefined}
                    key={slide.title}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="section categories-section" id="categories">
            <div className="section-heading centered">
              <p className="eyebrow">Find your piece</p>
              <h2>Shop by category</h2>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <div
                  className="category-card"
                  key={category.name}
                  onClick={() => {
                    if (category.name === 'Bracelets') navigateToPdp()
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="category-image">
                    <img src={category.image} alt={`Handcrafted silver ${category.name.toLowerCase()}`} />
                  </div>
                  <span>{category.name}</span>
                  <ArrowRight size={15} />
                </div>
              ))}
            </div>
          </section>

          <section className="trust-strip" aria-label="Why shop with ANBHA">
            <div><ShieldCheck size={23} strokeWidth={1.4} /><span><strong>Hallmarked 925 silver</strong>Authenticity with every piece</span></div>
            <div><Truck size={23} strokeWidth={1.4} /><span><strong>Thoughtful delivery</strong>Free shipping above ₹2,500</span></div>
            <div><Leaf size={23} strokeWidth={1.4} /><span><strong>Kind to your skin</strong>Nickel-free and hypoallergenic</span></div>
          </section>

          <section className="section products-section" id="new">
            <div className="section-heading centered">
              <p className="eyebrow">Curated for you</p>
              <h2>Pieces you may love</h2>
            </div>
            <div className="product-grid">
              {products.map((product, index) => (
                <article
                  className="product-card"
                  key={product.name}
                  onClick={() => navigateToPdp()}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-image">
                    {index === 0 && <span className="product-tag">Bestseller</span>}
                    {index === 2 && <span className="product-tag">New</span>}
                    <button
                      className={`heart-button ${favourites.includes(product.name) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavourite(product.name)
                      }}
                      aria-label={`Save ${product.name}`}
                    >
                      <Heart size={18} fill={favourites.includes(product.name) ? 'currentColor' : 'none'} />
                    </button>
                    <img src={product.image} alt={product.name} />
                    <button
                      className="quick-add"
                      onClick={(e) => {
                        e.stopPropagation()
                        addToCart(product)
                      }}
                    >
                      Quick add
                    </button>
                  </div>
                  <div className="product-info">
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.type}</p>
                    </div>
                    <span>{product.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="offer-section" id="gifting">
            <div className="offer-mark"><Sparkles strokeWidth={1.2} /></div>
            <div>
              <p className="eyebrow">A little something</p>
              <h2>₹500 off your first piece</h2>
              <p>Use code <strong>WELCOME500</strong> on orders above ₹3,500.</p>
            </div>
            <button
              className="outline-button"
              onClick={() => {
                navigator.clipboard?.writeText('WELCOME500')
                setNotice('Offer code copied')
              }}
            >
              Copy code
            </button>
          </section>

          <section className="story-section" id="story">
            <div className="story-image-wrap">
              <img src={artisanImage} alt="Artisan hand-finishing a silver earring at a workbench" />
              <div className="story-seal">Made by<br />human hands</div>
            </div>
            <div className="story-copy">
              <p className="eyebrow">The ANBHA way</p>
              <h2>Jewellery with<br /><em>a memory of touch.</em></h2>
              <p>ANBHA began with a simple belief: the pieces closest to us should carry the warmth of the hands that made them.</p>
              <p>Our silver is shaped in small batches by skilled artisans, bringing traditional techniques into forms that feel effortless today.</p>
              <div className="story-values">
                <div><strong>925</strong><span>Pure sterling silver</span></div>
                <div><strong>Hand</strong><span>Finished in India</span></div>
                <div><strong>Small</strong><span>Thoughtful batches</span></div>
              </div>
              <button
                type="button"
                onClick={navigateToPdp}
                className="text-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                Explore our craft <ArrowRight size={15} />
              </button>
            </div>
          </section>

          <section className="section reviews-section" aria-labelledby="reviews-title">
            <div className="section-heading centered">
              <p className="eyebrow">Notes from you</p>
              <h2 id="reviews-title">Loved, then lived in.</h2>
            </div>
            <div className="review-grid">
              {reviews.map((review, index) => (
                <article className="review-card" key={review.name}>
                  <div className="review-card-header">
                    <span className="review-number">0{index + 1}</span>
                    <Quote size={20} strokeWidth={1.1} />
                  </div>
                  <div className="review-photo-wrap">
                    <img src={review.image} alt={`${review.name} wearing ${review.piece}`} />
                    <span className="review-piece-badge">{review.piece}</span>
                  </div>
                  <p>“{review.quote}”</p>
                  <div className="review-author">
                    <strong>{review.name}</strong>
                    <span>{review.city}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section faq-section" id="faq">
            <div className="faq-intro">
              <p className="eyebrow">Good to know</p>
              <h2>Questions,<br /><em>answered.</em></h2>
              <p>Still curious? Write to us at <a href="mailto:care@anbha.com">care@anbha.com</a></p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                    <span>{question}</span>
                    <ChevronDown size={20} />
                  </button>
                  <div className="faq-answer"><p>{answer}</p></div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              className="brand-footer"
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome()
              }}
              aria-label="ANBHA home"
            >
              <img src={footerLogo} alt="ANBHA" className="footer-logo" />
            </a>
            <p>Modern heirlooms, made slowly in India.</p>
            <a href="https://instagram.com" aria-label="Instagram"><Camera size={19} /></a>
          </div>
          <div className="footer-links">
            <div>
              <h3>Shop</h3>
              <button type="button" className="footer-text-btn" onClick={navigateToPdp}>Silver Infinity Bracelet</button>
              <button type="button" className="footer-text-btn" onClick={navigateToHome}>Earrings</button>
              <button type="button" className="footer-text-btn" onClick={navigateToHome}>Rings</button>
              <button type="button" className="footer-text-btn" onClick={navigateToHome}>Gifting</button>
            </div>
            <div>
              <h3>Help</h3>
              <a href="#faq">Care guide</a>
              <a href="#faq">Shipping & returns</a>
              <a href="mailto:care@anbha.com">Contact</a>
              <a href="#faq">FAQs</a>
            </div>
          </div>
          <div className="newsletter">
            <p className="eyebrow">Letters from ANBHA</p>
            <h3>New pieces, quiet stories, and notes from our studio.</h3>
            <form onSubmit={handleSubscribe}>
              <input type="email" name="email" placeholder="Your email address" aria-label="Email address" required />
              <button aria-label="Subscribe"><ArrowRight size={18} /></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ANBHA. All rights reserved.</span>
          <div><a href="#top">Privacy</a><a href="#top">Terms</a></div>
          <span>Crafted with care in India</span>
        </div>
      </footer>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="mobile-menu panel-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
            <button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
            <a
              className="brand-logo mobile-brand"
              href="#top"
              onClick={() => {
                setMenuOpen(false)
                navigateToHome()
              }}
              aria-label="ANBHA home"
            >
              <img src={navLogo} alt="ANBHA" />
            </a>
            <nav>
              <button
                type="button"
                className="mobile-nav-btn"
                onClick={() => {
                  setMenuOpen(false)
                  navigateToHome()
                }}
              >
                Home & Collections
              </button>
              <button
                type="button"
                className="mobile-nav-btn"
                onClick={() => {
                  setMenuOpen(false)
                  navigateToHome()
                  setTimeout(() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' }), 100)
                }}
              >
                Our story
              </button>
              <button
                type="button"
                className="mobile-nav-btn mobile-wishlist-btn"
                onClick={() => {
                  setMenuOpen(false)
                  setWishlistOpen(true)
                }}
              >
                Saved Wishlist ({favourites.length})
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Wishlist Drawer */}
      {wishlistOpen && (
        <div className="panel-overlay" onClick={() => setWishlistOpen(false)}>
          <aside className="cart-panel wishlist-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Your wishlist <span>({favourites.length})</span></h2>
              <button className="icon-button" onClick={() => setWishlistOpen(false)} aria-label="Close wishlist">
                <X />
              </button>
            </div>
            {favourites.length === 0 ? (
              <div className="empty-cart">
                <Heart strokeWidth={1.2} size={42} style={{ color: '#8b4b45' }} />
                <h3>Your wishlist is empty</h3>
                <p>Save pieces you adore to keep track of them anytime.</p>
                <button
                  className="primary-button"
                  onClick={() => {
                    setWishlistOpen(false)
                    navigateToPdp()
                  }}
                >
                  Explore Infinity Bracelet
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {wishlistItems.map((item) => (
                    <div className="cart-item wishlist-item" key={item.name}>
                      <img
                        src={item.image}
                        alt={item.name}
                        onClick={() => {
                          setWishlistOpen(false)
                          if (item.target === 'pdp' || item.name.includes('Infinity')) {
                            navigateToPdp()
                          } else {
                            navigateToHome()
                          }
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                      <div className="wishlist-item-content">
                        <h3
                          onClick={() => {
                            setWishlistOpen(false)
                            if (item.target === 'pdp' || item.name.includes('Infinity')) {
                              navigateToPdp()
                            } else {
                              navigateToHome()
                            }
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          {item.name}
                        </h3>
                        <p>{item.type}</p>
                        <strong>{item.price}</strong>
                        <button
                          type="button"
                          className="wishlist-add-bag-cta"
                          onClick={() => {
                            addToCart(item)
                            setNotice(`${item.name} added to your bag`)
                          }}
                        >
                          <ShoppingBag size={13} /> Add to bag
                        </button>
                      </div>
                      <button
                        onClick={() => toggleFavourite(item.name)}
                        aria-label={`Remove ${item.name} from wishlist`}
                        title="Remove from wishlist"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary-box">
                  <div className="cart-summary-row">
                    <span>Authenticity</span>
                    <strong>925 Hallmarked Silver</strong>
                  </div>
                  <div className="cart-summary-row">
                    <span>Shipping</span>
                    <strong>Free Insured Delivery</strong>
                  </div>
                </div>
                <button
                  className="checkout-button"
                  onClick={() => {
                    wishlistItems.forEach((item) => addToCart(item))
                    setWishlistOpen(false)
                    setCartOpen(true)
                    setNotice('All wishlisted pieces added to your bag')
                  }}
                >
                  Move all to bag
                </button>
              </>
            )}
          </aside>
        </div>
      )}

      {/* Shopping Cart Drawer */}
      {cartOpen && (
        <div className="panel-overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Your bag <span>({cart.length})</span></h2>
              <button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close bag"><X /></button>
            </div>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag strokeWidth={1.2} size={42} />
                <h3>Your bag is waiting</h3>
                <p>Discover pieces made to stay with you.</p>
                <button
                  className="primary-button"
                  onClick={() => {
                    setCartOpen(false)
                    navigateToPdp()
                  }}
                >
                  Explore Infinity Bracelet
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div className="cart-item" key={`${item.name}-${index}`}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.type}</p>
                        {item.giftWrap?.added && (
                          <span className="cart-gift-badge">
                            + Premium Gift Wrap (₹{item.giftWrap.price})
                          </span>
                        )}
                        <strong>{item.price}</strong>
                      </div>
                      <button
                        onClick={() => setCart((items) => items.filter((_, i) => i !== index))}
                        aria-label={`Remove ${item.name}`}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary-box">
                  <div className="cart-summary-row">
                    <span>Shipping</span>
                    <strong>Free Express</strong>
                  </div>
                  <div className="cart-summary-row">
                    <span>Authenticity</span>
                    <strong>925 Hallmarked</strong>
                  </div>
                </div>
                <button
                  className="checkout-button"
                  onClick={() => setNotice('Proceeding to secure checkout...')}
                >
                  Checkout
                </button>
              </>
            )}
          </aside>
        </div>
      )}

      {/* Notification Toast */}
      {notice && (
        <div className="toast" role="status">
          <Check size={16} />
          <span>{notice}</span>
        </div>
      )}
    </div>
  )
}

export default App
