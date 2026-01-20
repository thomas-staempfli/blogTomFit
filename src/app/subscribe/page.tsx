'use client'

import Link from 'next/link'
import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  name: string
  email: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  consent?: string
  general?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function SubscribePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to receive emails'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setStatus('submitting')
    setErrors({})

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed')
      }

      setStatus('success')
      setSuccessMessage(data.message || 'Successfully subscribed!')
      setFormData({ name: '', email: '', consent: false })
    } catch (error) {
      setStatus('error')
      setErrors({
        general: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      })
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tomfit-50 via-white to-gray-50 pattern-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-tomfit-950 mb-3">You&apos;re In!</h2>
            <p className="text-gray-600 mb-6">{successMessage}</p>
            <p className="text-sm text-gray-500 mb-6">Check your inbox for a welcome email from us.</p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-tomfit-500 hover:bg-tomfit-600 text-white font-semibold rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-tomfit-50 via-white to-gray-50 pattern-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-tomfit-100 text-tomfit-700 font-semibold text-sm rounded-lg mb-6">Join 10,000+ Subscribers</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-tomfit-950 mb-5">
            Get Weekly <span className="text-gradient">Fitness Insights</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Subscribe to receive our latest articles on workouts, nutrition, and healthy living.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {errors.general && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{errors.general}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-tomfit-950 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe" 
                className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tomfit-500 focus:border-transparent text-tomfit-950 ${
                  errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
                }`}
                disabled={status === 'submitting'}
              />
              {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-tomfit-950 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com" 
                className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tomfit-500 focus:border-transparent text-tomfit-950 ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                }`}
                disabled={status === 'submitting'}
              />
              {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-tomfit-600 border-gray-300 rounded focus:ring-tomfit-500"
                disabled={status === 'submitting'}
              />
              <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                I agree to receive emails from TomFit. Unsubscribe anytime.
              </label>
            </div>
            {errors.consent && <p className="text-sm text-red-500 -mt-2">{errors.consent}</p>}
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-6 py-3.5 bg-tomfit-500 hover:bg-tomfit-600 disabled:bg-tomfit-300 text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                'Subscribe Now'
              )}
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-5">No spam. Unsubscribe anytime.</p>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-xl font-bold text-tomfit-950 text-center mb-8">What You&apos;ll Receive</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '💪', title: 'Workout Tips', desc: 'Weekly training insights and routines' },
              { icon: '🥗', title: 'Nutrition Advice', desc: 'Healthy eating strategies and recipes' },
              { icon: '⭐', title: 'Exclusive Content', desc: 'Subscriber-only articles and resources' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-tomfit-950 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-tomfit-500 hover:text-tomfit-600 font-medium text-sm">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
