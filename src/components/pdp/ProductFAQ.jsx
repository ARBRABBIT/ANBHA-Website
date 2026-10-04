import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function ProductFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  if (!faqs || !faqs.length) return null

  return (
    <section className="section faq-section pdp-faq-section" id="pdp-faq" aria-labelledby="pdp-faq-heading">
      <div className="faq-intro">
        <p className="eyebrow">Good to know</p>
        <h2 id="pdp-faq-heading">
          Frequently<br /><em>asked questions.</em>
        </h2>
        <p>
          Need specific guidance? Write to our care concierge at{' '}
          <a href="mailto:care@anbha.com">care@anbha.com</a>
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <ChevronDown size={20} />
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
