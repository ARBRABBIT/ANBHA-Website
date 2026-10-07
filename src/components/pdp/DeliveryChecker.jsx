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

    setTimeout(() => {
      if (trimmed.startsWith('99')) {
        setStatus('unavailable')
        setResultMessage(`Express delivery currently unavailable to PIN ${trimmed}. Please try another location.`)
      } else {
        setStatus('success')
        setResultMessage({
          date: deliveryInfo?.standardEstimate || 'Get it by 8 October',
          shipping: deliveryInfo?.shippingMethod || 'Complimentary Express Air Shipping',
          pin: trimmed
        })
      }
    }, 400)
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
    <div className="pdp-delivery-box">
      <div className="pdp-delivery-header-line">
        <MapPin size={13} strokeWidth={1.4} className="pdp-delivery-pin-icon" />
        <span className="pdp-delivery-title">Estimated Studio Delivery</span>
      </div>

      <form onSubmit={handleCheck} className="pdp-delivery-form-inline">
        <div className="pdp-delivery-field-group">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            placeholder="Enter 6-digit PIN code"
            value={pin}
            onChange={handleInputChange}
            aria-label="Delivery PIN code"
            className={`pdp-delivery-input-clean ${status === 'invalid' ? 'error' : ''}`}
          />
          <button
            type="submit"
            className="pdp-delivery-submit-clean"
            disabled={status === 'checking' || pin.length === 0}
          >
            {status === 'checking' ? (
              <Loader2 size={12} className="spin-icon" />
            ) : (
              'Check'
            )}
          </button>
        </div>
      </form>

      {status === 'success' && resultMessage && (
        <div className="pdp-delivery-result-clean success" role="status">
          <div className="pdp-delivery-success-head">
            <CheckCircle2 size={13} className="pdp-delivery-check-icon" />
            <span className="pdp-delivery-date-highlight">{resultMessage.date}</span>
            <span className="pdp-delivery-to-pin">to {resultMessage.pin}</span>
          </div>
          <p className="pdp-delivery-method-note">
            <Truck size={12} strokeWidth={1.3} />
            <span>{resultMessage.shipping} · Cash on Delivery available</span>
          </p>
        </div>
      )}

      {status === 'invalid' && (
        <div className="pdp-delivery-result-clean error" role="alert">
          <AlertCircle size={13} />
          <span>{resultMessage}</span>
        </div>
      )}

      {status === 'unavailable' && (
        <div className="pdp-delivery-result-clean unavailable" role="alert">
          <AlertCircle size={13} />
          <span>{resultMessage}</span>
        </div>
      )}

      {status === 'idle' && (
        <p className="pdp-delivery-sub-hint">
          Dispatched within 24 hours · Complimentary insured air transit across India.
        </p>
      )}
    </div>
  )
}
