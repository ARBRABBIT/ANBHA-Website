import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { ArrowRight, Camera, Check, ChevronDown, Heart, Leaf, Menu, Quote, Search, ShieldCheck, ShoppingBag, Sparkles, Truck, X } from 'lucide-react'
import heroImage from './assets/anbha-hero.jpg'
import heroNecklaceImage from './assets/anbha-hero-necklace.jpg'
import heroCuffImage from './assets/anbha-hero-cuff.jpg'
import collectionImage from './assets/anbha-collection.jpg'
import artisanImage from './assets/anbha-artisan.jpg'
import earringsImage from './assets/category-earrings.jpg'
import ringsImage from './assets/category-rings.jpg'
import necklacesImage from './assets/category-necklaces.jpg'
import braceletsImage from './assets/category-bracelets.jpg'
import productRingImage from './assets/product-ring.jpg'
import productEarringsImage from './assets/product-earrings.jpg'
import productPendantImage from './assets/product-pendant.jpg'
import productCuffImage from './assets/product-cuff.jpg'
import './App.css'

const heroSlides = [
  { image: heroImage, alt: 'Handcrafted silver necklace and earrings on ivory stone', eyebrow: 'Made slowly. Worn always.', title: 'Silver,', accent: 'made personal.', description: 'Quietly expressive pieces shaped by hand, designed to live with you through every day and occasion.', action: 'Discover the collection' },
  { image: heroNecklaceImage, alt: 'Silver pendant necklace and rings arranged on a limestone arch', eyebrow: 'The everyday edit', title: 'Light to wear,', accent: 'made to remain.', description: 'Considered silver forms that feel effortless today and become more personal with time.', action: 'Shop necklaces' },
  { image: heroCuffImage, alt: 'Hammered silver cuff and drop earrings on ivory linen', eyebrow: 'Touched by hand', title: 'Quiet forms,', accent: 'lasting feeling.', description: 'Small-batch pieces where subtle texture and traditional craft meet a modern point of view.', action: 'Explore new pieces' },
]

const products = [
  { name: 'Riverform Ring', type: 'Hand-finished 925 silver', price: '₹2,490', image: productRingImage },
  { name: 'Petal Drop Earrings', type: 'Hand-finished 925 silver', price: '₹3,290', image: productEarringsImage },
  { name: 'Moon Disc Pendant', type: 'Hand-hammered 925 silver', price: '₹3,790', image: productPendantImage },
  { name: 'Stillwater Cuff', type: 'Hand-hammered 925 silver', price: '₹4,190', image: productCuffImage },
]

const categories = [
  { name: 'Earrings', image: earringsImage },
  { name: 'Rings', image: ringsImage },
  { name: 'Necklaces', image: necklacesImage },
  { name: 'Bracelets', image: braceletsImage },
]

const faqs = [
  ['Is every piece made with real silver?', 'Yes. Every ANBHA piece is crafted in hallmarked 925 sterling silver and arrives with an authenticity card.'],
  ['How should I care for my jewellery?', 'Store it dry in its pouch, avoid perfume and moisture, and restore its glow with the soft polishing cloth included in your order.'],
  ['Do you offer returns or exchanges?', 'We accept unused pieces in their original packaging within 7 days of delivery. Earrings are excluded for hygiene reasons.'],
  ['How long will my order take to arrive?', 'Ready pieces usually ship within 2 business days and reach most Indian cities in 3–6 business days.'],
]

const reviews = [
  { quote: 'The finish is beautiful and the piece feels so considered. It has quietly become the necklace I reach for every morning.', name: 'Meera S.', city: 'Bengaluru' },
  { quote: 'Even the packaging felt special. The earrings are light enough for all day, but still look like a statement.', name: 'Aanya R.', city: 'Mumbai' },
  { quote: 'I bought the cuff as a gift and ended up ordering one for myself. Understated, beautifully made, and very ANBHA.', name: 'Kavya N.', city: 'Hyderabad' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [favourites, setFavourites] = useState([])
  const [openFaq, setOpenFaq] = useState(0)
  const [notice, setNotice] = useState('')
  const [activeHero, setActiveHero] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
    })

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    if (!notice) return undefined
    const timer = setTimeout(() => setNotice(''), 2600)
    return () => clearTimeout(timer)
  }, [notice])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = setInterval(() => setActiveHero((slide) => (slide + 1) % heroSlides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const addToCart = (product) => { setCart((items) => [...items, product]); setNotice(`${product.name} added to your bag`) }
  const toggleFavourite = (name) => setFavourites((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name])
  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!new FormData(event.currentTarget).get('email')) return
    setNotice('Welcome to the ANBHA circle'); event.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <div className="announcement">Complimentary shipping across India on orders over ₹2,500</div>
      <header className="header">
        <button className="icon-button mobile-only" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
        <a className="brand" href="#top" aria-label="ANBHA home">ANBHA<span>fine silver</span></a>
        <nav className="nav-links" aria-label="Main navigation"><a href="#new">New arrivals</a><a href="#categories">Shop</a><a href="#story">Our story</a><a href="#gifting">Gifting</a></nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setSearchOpen(true)} aria-label="Search"><Search size={19} /></button>
          <button className="icon-button bag-button" onClick={() => setCartOpen(true)} aria-label={`Shopping bag with ${cart.length} items`}><ShoppingBag size={19} />{cart.length > 0 && <span>{cart.length}</span>}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-roledescription="carousel" aria-label="Featured ANBHA collections">
          {heroSlides.map((slide, index) => <img className={`hero-slide-image ${activeHero === index ? 'active' : ''}`} src={slide.image} alt={activeHero === index ? slide.alt : ''} aria-hidden={activeHero !== index} key={slide.image} />)}
          <div className="hero-shade" />
          <div className="hero-copy" key={activeHero} aria-live="polite"><p className="eyebrow">{heroSlides[activeHero].eyebrow}</p><h1>{heroSlides[activeHero].title}<br /><em>{heroSlides[activeHero].accent}</em></h1><p className="hero-description">{heroSlides[activeHero].description}</p><a className="primary-button" href="#new">{heroSlides[activeHero].action} <ArrowRight size={17} /></a></div>
          <div className="hero-note">Hallmarked 925 sterling silver</div>
          <div className="hero-pagination" aria-label="Carousel pagination">
            <div className="hero-dots">{heroSlides.map((slide, index) => <button className={activeHero === index ? 'active' : ''} onClick={() => setActiveHero(index)} aria-label={`Show slide ${index + 1}: ${slide.title} ${slide.accent}`} aria-current={activeHero === index ? 'true' : undefined} key={slide.title} />)}</div>
          </div>
        </section>

        <section className="section categories-section" id="categories">
          <div className="section-heading centered"><p className="eyebrow">Find your piece</p><h2>Shop by category</h2></div>
          <div className="category-grid">{categories.map((category) => <a href="#new" className="category-card" key={category.name}><div className="category-image"><img src={category.image} alt={`Handcrafted silver ${category.name.toLowerCase()}`} /></div><span>{category.name}</span><ArrowRight size={15} /></a>)}</div>
        </section>

        <section className="trust-strip" aria-label="Why shop with ANBHA">
          <div><ShieldCheck size={23} strokeWidth={1.4} /><span><strong>Hallmarked 925 silver</strong>Authenticity with every piece</span></div>
          <div><Truck size={23} strokeWidth={1.4} /><span><strong>Thoughtful delivery</strong>Free shipping above ₹2,500</span></div>
          <div><Leaf size={23} strokeWidth={1.4} /><span><strong>Kind to your skin</strong>Nickel-free and hypoallergenic</span></div>
        </section>

        <section className="section products-section" id="new">
          <div className="section-heading split-heading"><div><p className="eyebrow">Curated for you</p><h2>Pieces you may love</h2></div><a className="text-link" href="#categories">View all pieces <ArrowRight size={15} /></a></div>
          <div className="product-grid">{products.map((product, index) => <article className="product-card" key={product.name}><div className="product-image">{index === 0 && <span className="product-tag">Bestseller</span>}{index === 2 && <span className="product-tag">New</span>}<button className={`heart-button ${favourites.includes(product.name) ? 'active' : ''}`} onClick={() => toggleFavourite(product.name)} aria-label={`Save ${product.name}`}><Heart size={18} fill={favourites.includes(product.name) ? 'currentColor' : 'none'} /></button><img src={product.image} alt={product.name} /><button className="quick-add" onClick={() => addToCart(product)}>Quick add</button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.type}</p></div><span>{product.price}</span></div></article>)}</div>
        </section>

        <section className="offer-section" id="gifting"><div className="offer-mark"><Sparkles strokeWidth={1.2} /></div><div><p className="eyebrow">A little something</p><h2>₹500 off your first piece</h2><p>Use code <strong>WELCOME500</strong> on orders above ₹3,500.</p></div><button className="outline-button" onClick={() => { navigator.clipboard?.writeText('WELCOME500'); setNotice('Offer code copied') }}>Copy code</button></section>

        <section className="story-section" id="story">
          <div className="story-image-wrap"><img src={artisanImage} alt="Artisan hand-finishing a silver earring at a workbench" /><div className="story-seal">Made by<br />human hands</div></div>
          <div className="story-copy"><p className="eyebrow">The ANBHA way</p><h2>Jewellery with<br /><em>a memory of touch.</em></h2><p>ANBHA began with a simple belief: the pieces closest to us should carry the warmth of the hands that made them.</p><p>Our silver is shaped in small batches by skilled artisans, bringing traditional techniques into forms that feel effortless today.</p><div className="story-values"><div><strong>925</strong><span>Pure sterling silver</span></div><div><strong>Hand</strong><span>Finished in India</span></div><div><strong>Small</strong><span>Thoughtful batches</span></div></div><a href="#categories" className="text-link">Explore our craft <ArrowRight size={15} /></a></div>
        </section>

        <section className="section reviews-section" aria-labelledby="reviews-title">
          <div className="section-heading centered"><p className="eyebrow">Notes from you</p><h2 id="reviews-title">Loved, then lived in.</h2></div>
          <div className="review-grid">{reviews.map((review, index) => <article className="review-card" key={review.name}><div className="review-number">0{index + 1}</div><Quote size={24} strokeWidth={1.1} /><p>“{review.quote}”</p><div><strong>{review.name}</strong><span>{review.city}</span></div></article>)}</div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="faq-intro"><p className="eyebrow">Good to know</p><h2>Questions,<br /><em>answered.</em></h2><p>Still curious? Write to us at <a href="mailto:care@anbha.com">care@anbha.com</a></p></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={20} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top"><div className="footer-brand"><a className="brand light" href="#top">ANBHA<span>fine silver</span></a><p>Modern heirlooms, made slowly in India.</p><a href="https://instagram.com" aria-label="Instagram"><Camera size={19} /></a></div><div className="footer-links"><div><h3>Shop</h3><a href="#new">New arrivals</a><a href="#categories">Earrings</a><a href="#categories">Rings</a><a href="#gifting">Gifting</a></div><div><h3>Help</h3><a href="#faq">Care guide</a><a href="#faq">Shipping & returns</a><a href="mailto:care@anbha.com">Contact</a><a href="#faq">FAQs</a></div></div><div className="newsletter"><p className="eyebrow">Letters from ANBHA</p><h3>New pieces, quiet stories, and notes from our studio.</h3><form onSubmit={handleSubscribe}><input type="email" name="email" placeholder="Your email address" aria-label="Email address" required /><button aria-label="Subscribe"><ArrowRight size={18} /></button></form></div></div>
        <div className="footer-bottom"><span>© 2026 ANBHA. All rights reserved.</span><div><a href="#top">Privacy</a><a href="#top">Terms</a></div><span>Crafted with care in India</span></div>
      </footer>

      {menuOpen && <div className="mobile-menu panel-overlay"><div className="mobile-panel"><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button><a className="brand" href="#top" onClick={() => setMenuOpen(false)}>ANBHA<span>fine silver</span></a><nav><a href="#new" onClick={() => setMenuOpen(false)}>New arrivals</a><a href="#categories" onClick={() => setMenuOpen(false)}>Shop</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#gifting" onClick={() => setMenuOpen(false)}>Gifting</a></nav></div></div>}
      {searchOpen && <div className="search-overlay"><button className="icon-button" onClick={() => setSearchOpen(false)} aria-label="Close search"><X /></button><form onSubmit={(e) => { e.preventDefault(); setSearchOpen(false); document.querySelector('#new')?.scrollIntoView({ behavior: 'smooth' }) }}><Search /><input autoFocus aria-label="Search products" placeholder="What are you looking for?" /></form><p>Try “silver earrings” or “gifts”</p></div>}
      {cartOpen && <div className="panel-overlay" onClick={() => setCartOpen(false)}><aside className="cart-panel" onClick={(e) => e.stopPropagation()}><div className="cart-header"><h2>Your bag <span>({cart.length})</span></h2><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close bag"><X /></button></div>{cart.length === 0 ? <div className="empty-cart"><ShoppingBag strokeWidth={1.2} size={42} /><h3>Your bag is waiting</h3><p>Discover pieces made to stay with you.</p><button className="primary-button" onClick={() => { setCartOpen(false); document.querySelector('#new')?.scrollIntoView({ behavior: 'smooth' }) }}>Explore pieces</button></div> : <><div className="cart-items">{cart.map((item, index) => <div className="cart-item" key={`${item.name}-${index}`}><img src={item.image} alt={item.name} /><div><h3>{item.name}</h3><p>{item.type}</p><strong>{item.price}</strong></div><button onClick={() => setCart((items) => items.filter((_, i) => i !== index))} aria-label={`Remove ${item.name}`}><X size={16} /></button></div>)}</div><button className="checkout-button" onClick={() => setNotice('Checkout is ready for backend integration')}>Checkout</button></>}</aside></div>}
      {notice && <div className="toast"><Check size={16} />{notice}</div>}
    </div>
  )
}

export default App
