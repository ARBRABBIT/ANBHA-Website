import React, { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'

export function ImageLightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0)
  const [scale, setScale] = useState(1)

  const numImages = images?.length || 0

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') {
        setScale(1)
        setCurrentIndex((prev) => (prev - 1 + numImages) % numImages)
      }
      if (e.key === 'ArrowRight') {
        setScale(1)
        setCurrentIndex((prev) => (prev + 1) % numImages)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, numImages])

  if (!images || !images.length) return null

  const currentImage = images[currentIndex] || images[0]

  const handlePrev = (e) => {
    if (e) e.stopPropagation()
    setScale(1)
    setCurrentIndex((prev) => (prev - 1 + numImages) % numImages)
  }

  const handleNext = (e) => {
    if (e) e.stopPropagation()
    setScale(1)
    setCurrentIndex((prev) => (prev + 1) % numImages)
  }

  const toggleZoom = (e) => {
    if (e) e.stopPropagation()
    setScale((prev) => (prev > 1 ? 1 : 2))
  }

  return (
    <div
      className="pdp-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Product Image Full-Screen View"
    >
      <div className="pdp-lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
        <span className="pdp-lightbox-counter">
          {currentIndex + 1} / {images.length} — {currentImage.label}
        </span>

        <div className="pdp-lightbox-controls">
          <button
            type="button"
            className="pdp-lightbox-btn"
            onClick={toggleZoom}
            aria-label={scale > 1 ? 'Zoom out' : 'Zoom in'}
          >
            {scale > 1 ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </button>
          <button
            type="button"
            className="pdp-lightbox-btn"
            onClick={onClose}
            aria-label="Close full-screen view"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="pdp-lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="pdp-lightbox-nav prev"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} strokeWidth={1.2} />
        </button>

        <div className="pdp-lightbox-image-wrap" onClick={toggleZoom}>
          <img
            src={currentImage.src}
            alt={currentImage.alt || 'Full-screen product image'}
            className="pdp-lightbox-image"
            style={{
              transform: `scale(${scale})`,
              cursor: scale > 1 ? 'zoom-out' : 'zoom-in',
            }}
          />
        </div>

        <button
          type="button"
          className="pdp-lightbox-nav next"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight size={28} strokeWidth={1.2} />
        </button>
      </div>

      {currentImage.caption && (
        <div className="pdp-lightbox-caption" onClick={(e) => e.stopPropagation()}>
          <p>{currentImage.caption}</p>
        </div>
      )}

      {/* Thumbnails row */}
      <div className="pdp-lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
        {images.map((item, idx) => (
          <button
            key={item.id || idx}
            type="button"
            className={`pdp-lightbox-thumb ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setScale(1)
              setCurrentIndex(idx)
            }}
            aria-label={`Jump to image ${idx + 1}`}
          >
            <img src={item.src} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
