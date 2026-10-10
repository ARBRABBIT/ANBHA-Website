import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react'

export function ProductGallery({
  images,
  activeIndex,
  onSelectImage,
  onOpenLightbox,
  isWishlisted,
  onToggleWishlist,
  onNotify
}) {
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' })
  const [isZooming, setIsZooming] = useState(false)
  const imageContainerRef = useRef(null)

  const activeImage = images[activeIndex] || images[0]

  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.85)',
    })
  }

  const handleMouseEnter = () => {
    setIsZooming(true)
  }

  const handleMouseLeave = () => {
    setIsZooming(false)
    setZoomStyle({})
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    onSelectImage((activeIndex - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    onSelectImage((activeIndex + 1) % images.length)
  }

  const handleShare = (e) => {
    e.stopPropagation()
    if (navigator.share) {
      navigator.share({
        title: 'ANBHA Silver Infinity Bracelet',
        text: 'A timeless expression of connection, crafted in pure 925 silver.',
        url: window.location.href,
      }).catch(() => {})
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      if (onNotify) onNotify('Product link copied to clipboard')
    }
  }

  return (
    <div className="pdp-gallery-wrap">
      {/* Thumbnail column for desktop / scrollable row for mobile */}
      <div className="pdp-thumbnails-rail" role="tablist" aria-label="Product thumbnails">
        {images.map((item, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={item.id || index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`View ${item.label || `Image ${index + 1}`}`}
              className={`pdp-thumb-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectImage(index)}
            >
              <img src={item.src} alt={item.alt || `Thumbnail ${index + 1}`} />
              <span className="pdp-thumb-label">{item.label}</span>
            </button>
          )
        })}
      </div>

      {/* Main Feature Image Container */}
      <div className="pdp-main-image-viewport">
        {/* Minimal Floating Controls */}
        <div className="pdp-gallery-floating-actions">
          <button
            type="button"
            className={`pdp-floating-btn ${isWishlisted ? 'active' : ''}`}
            onClick={onToggleWishlist}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
            title={isWishlisted ? 'Saved to Wishlist' : 'Save to Wishlist'}
          >
            <Heart size={16} strokeWidth={1.3} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>

          <button
            type="button"
            className="pdp-floating-btn"
            onClick={handleShare}
            aria-label="Share product"
            title="Share piece"
          >
            <Share2 size={16} strokeWidth={1.3} />
          </button>
        </div>

        {/* Interactive Main Image with Zoom */}
        <div
          ref={imageContainerRef}
          className="pdp-main-image-stage"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={activeImage.src}
            alt={activeImage.alt || 'ANBHA Silver Infinity Bracelet'}
            className="pdp-main-image"
            style={isZooming ? zoomStyle : undefined}
          />

          {/* Microscopic Zoom Guide on Desktop */}
          <span className="pdp-zoom-cue">Hover to inspect details</span>
        </div>

        {/* Gallery Navigation Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="pdp-gallery-nav-btn prev"
              onClick={handlePrev}
              aria-label="Previous product photograph"
            >
              <ChevronLeft size={20} strokeWidth={1.2} />
            </button>
            <button
              type="button"
              className="pdp-gallery-nav-btn next"
              onClick={handleNext}
              aria-label="Next product photograph"
            >
              <ChevronRight size={20} strokeWidth={1.2} />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="pdp-image-counter" aria-live="polite">
          <span>0{activeIndex + 1}</span>
          <span className="counter-sep">/</span>
          <span>0{images.length}</span>
        </div>

        {/* Caption */}
        {activeImage.caption && (
          <p className="pdp-image-caption">{activeImage.caption}</p>
        )}
      </div>
    </div>
  )
}
