import React from 'react'

export function ProductStory({ story }) {
  if (!story) return null

  return (
    <section className="pdp-story-section" aria-labelledby="pdp-story-heading">
      <div className="pdp-story-container">
        <p className="eyebrow pdp-story-eyebrow">Notes On Craft</p>
        <h2 id="pdp-story-heading" className="pdp-story-title">{story.title}</h2>

        <blockquote className="pdp-story-quote">
          “{story.quote}”
        </blockquote>

        <div className="pdp-story-copy">
          {story.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="pdp-story-closing">
          <div className="pdp-story-divider" aria-hidden="true" />
          <span className="pdp-story-motto">{story.motto}</span>
        </div>
      </div>
    </section>
  )
}
