import React, { useState } from 'react'
import { MapPin, Truck, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export function DeliveryChecker({ deliveryInfo }) {
  const [pin, setPin] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'checking' | 'success' | 'invalid' | 'unavailable'
  const [resultMessage, setResultMessage] = useState(null)

  const handleCheck = (e) => {
    e.preventDefault()
    const trimmed = pin.trim()

    if (!trimmed || !/^\d{6}$/.test(trimmed)) {
      setStatus('invalid')
      setResultMessage('Please enter a valid 6-digit Indian PIN code.')
      return
    }

    setStatus('checking')
    setResultMessage(null)

    // Simulate realistic PIN code validation lookup
    setTimeout(() => {
      // Demo: PINs starting with '99' simulate unavailable locations
      if (trimmed.startsWith('99')) {
        setStatus('unavailable')
        setResultMessage(`Delivery currently unavailable to PIN ${trimmed}. Please try another address.`)
      } else {
        setStatus('success')
        setResultMessage({
          date: deliveryInfo?.standardEstimate || 'Get it by 8 October',
          shipping: deliveryInfo?.shippingMethod || 'Free Express Shipping',
          pin: trimmed
        })
      }
    }, 450)
  }

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6)
    setPin(val)
    if (status !== 'idle') {
      setStatus('idle')
      setResultMessage(null)
    }
  }

  return (
    <div className="pdp-delivery-checker">
      <div className="pdp-delivery-header">
        <MapPin size={15} strokeWidth={1.3} className="pdp-delivery-icon" />
        <h3 className="pdp-delivery-title">Estimated Delivery</h3>
      </div>

      <form onSubmit={handleCheck} className="pdp-delivery-form">
        <div className="pdp-delivery-input-wrap">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            placeholder="Enter 6-digit PIN code"
            value={pin}
            onChange={handleInputChange}
            aria-label="Delivery PIN code"
            className={`pdp-delivery-input ${status === 'invalid' ? 'error' : ''}`}
          />
          <button
            type="submit"
            className="pdp-delivery-btn"
            disabled={status === 'checking' || pin.length === 0}
          >
            {status === 'checking' ? (
              <Loader2 size={13} className="spin-icon" />
            ) : (
              'Check'
            )}
          </button>
        </div>
      </form>

      {status === 'success' && resultMessage && (
        <div className="pdp-delivery-result success" role="status">
          <div className="pdp-delivery-status-row">
            <CheckCircle2 size={14} className="pdp-delivery-check-icon" />
            <div>
              <strong className="pdp-delivery-date">{resultMessage.date}</strong>
              <span className="pdp-delivery-pin">to {resultMessage.pin}</span>
            </div>
          </div>
          <div className="pdp-delivery-perk">
            <Truck size={13} strokeWidth={1.3} />
            <span>{resultMessage.shipping} · Cash on Delivery available</span>
          </div>
        </div>
      )}

      {status === 'invalid' && (
        <div className="pdp-delivery-result error" role="alert">
          <AlertCircle size={14} />
          <span>{resultMessage}</span>
        </div>
      )}

      {status === 'unavailable' && (
        <div className="pdp-delivery-result unavailable" role="alert">
          <AlertCircle size={14} />
          <span>{resultMessage}</span>
        </div>
      )}

      {status === 'idle' && (
        <p className="pdp-delivery-hint">
          Express dispatch within 24 hours. Free insured delivery across India.
        </p>
      )}
    </div>
  )
}
