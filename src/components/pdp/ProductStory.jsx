import React from 'react'
import artisanImage from '../../assets/anbha-artisan.jpg'

export function ProductStory({ story }) {
  if (!story) return null

  return (
    <section className="pdp-story-section" aria-labelledby="pdp-story-heading">
      <div className="pdp-container">
        <div className="pdp-story-editorial-grid">
          {/* Visual Column: Artisan at work */}
          <div className="pdp-story-visual-wrap">
            <div className="pdp-story-image-card">
              <img
                src={artisanImage}
                alt="Artisan silversmith shaping silver jewellery by hand in Jaipur"
                className="pdp-story-artisan-img"
                loading="lazy"
              />
              <div className="pdp-story-image-badge">
                <span>Jaipur Studio · Generational Craft</span>
              </div>
            </div>
            <p className="pdp-story-image-caption">
              Each piece is cast in small batches, hand-filed, and pavé-set by master silversmiths using ancestral techniques.
            </p>
          </div>

          {/* Editorial Narrative Column */}
          <div className="pdp-story-content-col">
            <p className="eyebrow pdp-story-eyebrow">The Craft Behind The Piece</p>
            <h2 id="pdp-story-heading" className="pdp-story-title">{story.title}</h2>

            <blockquote className="pdp-story-quote">
              “{story.quote}”
            </blockquote>

            <div className="pdp-story-copy">
              {story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pdp-story-pillars">
              <div className="pdp-story-pillar">
                <strong>925 Hallmarked</strong>
                <span>Certified purity</span>
              </div>
              <div className="pdp-story-pillar">
                <strong>Rhodium Dipped</strong>
                <span>Tarnish resistant</span>
              </div>
              <div className="pdp-story-pillar">
                <strong>Hand-Set Pavé</strong>
                <span>Diamond-cut zircon</span>
              </div>
            </div>

            <div className="pdp-story-closing">
              <span className="pdp-story-motto">{story.motto}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
