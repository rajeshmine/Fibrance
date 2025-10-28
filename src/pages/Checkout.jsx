import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import './Checkout.css'

function Checkout({ cart, user }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: user?.name || '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India'
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Cart', path: '/cart' },
    { label: 'Checkout' }
  ]

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Redirect if cart is empty
  useEffect(() => {
    if (!cart || cart.length === 0) {
      navigate('/shop')
    }
  }, [cart, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + shipping + tax

  // Convert to INR (assuming USD to INR = 83)
  const totalInINR = Math.round(total * 83 * 100) // Convert to paise

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.firstName || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill in all required fields')
      return
    }

    setIsProcessing(true)

    try {
      // In production, create order on your backend
      // const orderResponse = await fetch('/api/create-razorpay-order', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ amount: totalInINR })
      // })
      // const orderData = await orderResponse.json()

      // For demo purposes, using client-side only
      const options = {
        key: 'rzp_test_miAIXVeH46aVmS', // Replace with your Razorpay Key ID
        amount: totalInINR, // Amount in paise
        currency: 'INR',
        name: 'FLONE Fashion',
        description: 'Purchase from FLONE',
        image: '/logo.png', // Your logo URL
        order_id: '', // Generate from backend in production
        handler: function (response) {
          // Payment successful
          console.log('Payment Success:', response)
          alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id)
          
          // Clear cart and redirect
          navigate('/order-success', { 
            state: { 
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id 
            }
          })
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: formData.address,
          city: formData.city,
          state: formData.state
        },
        theme: {
          color: '#21808D' // Your brand color
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false)
            alert('Payment cancelled')
          }
        }
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
      setIsProcessing(false)

    } catch (error) {
      console.error('Payment Error:', error)
      alert('Payment failed. Please try again.')
      setIsProcessing(false)
    }
  }

  if (!cart || cart.length === 0) {
    return null
  }

  return (
    <div className="shop-container">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="page-title">Checkout</h1>

      <div className="checkout-page">
        {/* Checkout Form */}
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
            {/* Billing Details */}
            <div className="form-section">
              <h2>Billing Details</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="form-control"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="form-control"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-full-width btn-large"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Pay ₹${(totalInINR / 100).toFixed(2)}`}
            </button>
          </form>

          <div className="payment-info">
            <div className="payment-methods">
              <img src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png" alt="Payment Methods" />
            </div>
            <p className="secure-payment">
              🔒 Secure payment powered by Razorpay
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          
          <div className="checkout-items">
            {cart.map(item => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div className="checkout-item-info">
                  <div className="checkout-item-name">{item.name}</div>
                  <div className="checkout-item-qty">Qty: {item.quantity}</div>
                </div>
                <div className="checkout-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total (USD):</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total (INR):</span>
              <span>₹{(totalInINR / 100).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
