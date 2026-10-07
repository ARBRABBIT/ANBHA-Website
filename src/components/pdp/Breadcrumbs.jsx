import React from 'react'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs({ items, onNavigateHome, onNavigateCategory }) {
  if (!items || !items.length) return null

  return (
    <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
      <div className="pdp-container">
        <ol className="breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={item.label} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                {isLast ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <>
                    <button
                      type="button"
                      className="breadcrumb-link"
                      onClick={() => {
                        if (index === 0 && onNavigateHome) {
                          onNavigateHome()
                        } else if (item.categorySlug && onNavigateCategory) {
                          onNavigateCategory(item.categorySlug)
                        } else if (['bracelets', 'earrings', 'rings', 'necklaces'].includes(item.label.toLowerCase()) && onNavigateCategory) {
                          onNavigateCategory(item.label.toLowerCase())
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      }}
                    >
                      {item.label}
                    </button>
                    <ChevronRight size={12} strokeWidth={1.5} className="breadcrumb-separator" aria-hidden="true" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
