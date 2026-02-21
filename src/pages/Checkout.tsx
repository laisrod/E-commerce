import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  address: string
  phone: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  address?: string
  phone?: string
}

export function Checkout() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleBlur = (field: keyof FormData) => {
    if (!formData[field].trim()) {
      setErrors((prev) => ({ ...prev, [field]: 'Field is mandatory' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    const fields: {
      key: keyof FormData
      label: string
      validator: (v: string) => boolean
      errorMsg: string
    }[] = [
      {
        key: 'firstName',
        label: 'First Name',
        validator: (v) => /^[A-Za-zÀ-ÿ\s]+$/.test(v),
        errorMsg: 'First name must contain only letters',
      },
      {
        key: 'lastName',
        label: 'Last Name',
        validator: (v) => /^[A-Za-zÀ-ÿ\s]+$/.test(v),
        errorMsg: 'Last name must contain only letters',
      },
      {
        key: 'email',
        label: 'Email',
        validator: (v) => v.includes('@') && v.includes('.'),
        errorMsg: 'Invalid email format',
      },
      {
        key: 'password',
        label: 'Password',
        validator: (v) => /[A-Za-z]/.test(v) && /\d/.test(v),
        errorMsg: 'Password must contain letters and numbers',
      },
      {
        key: 'address',
        label: 'Address',
        validator: () => true,
        errorMsg: '',
      },
      {
        key: 'phone',
        label: 'Phone',
        validator: (v) => /^\d+$/.test(v),
        errorMsg: 'Phone must contain only numbers',
      },
    ]

    fields.forEach((field) => {
      const value = formData[field.key].trim()
      if (!value) {
        newErrors[field.key] = `${field.label} is mandatory`
        isValid = false
      } else if (value.length < 3) {
        newErrors[field.key] = `${field.label} must have at least 3 characters`
        isValid = false
      } else if (!field.validator(value)) {
        newErrors[field.key] = field.errorMsg
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      alert('Valid form! Request processed successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
      })
      setErrors({})
    }
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div
          className="checkout-logo"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          ShopNow
        </div>
        <div className="checkout-cart-icon">
          <span>Cart (0)</span>
          <div className="checkout-menu-icon">☰</div>
        </div>
      </div>

      <div className="checkout-main-content">
        <h1 className="checkout-title">Checkout Page</h1>

        <div className="checkout-features">
          <div className="checkout-feature-box">
            <div>$ Cash on Delivery</div>
          </div>
          <div className="checkout-feature-box">
            <div>↔ 100% Return</div>
          </div>
          <div className="checkout-feature-box">
            <div>👍 Quality Assured</div>
          </div>
          <div className="checkout-feature-box">
            <div>🕒 Delivery on time</div>
          </div>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-form-row">
            <div className="checkout-form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className={errors.firstName ? 'error' : ''}
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                onBlur={() => handleBlur('firstName')}
              />
              {errors.firstName && (
                <div className="checkout-error active">{errors.firstName}</div>
              )}
            </div>
            <div className="checkout-form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className={errors.lastName ? 'error' : ''}
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                onBlur={() => handleBlur('lastName')}
              />
              {errors.lastName && (
                <div className="checkout-error active">{errors.lastName}</div>
              )}
            </div>
          </div>

          <div className="checkout-form-row">
            <div className="checkout-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={errors.email ? 'error' : ''}
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
              />
              {errors.email && (
                <div className="checkout-error active">{errors.email}</div>
              )}
            </div>
            <div className="checkout-form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className={errors.password ? 'error' : ''}
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                onBlur={() => handleBlur('password')}
              />
              {errors.password && (
                <div className="checkout-error active">{errors.password}</div>
              )}
            </div>
          </div>

          <div className="checkout-form-row">
            <div className="checkout-form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                className={errors.address ? 'error' : ''}
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                onBlur={() => handleBlur('address')}
              />
              {errors.address && (
                <div className="checkout-error active">{errors.address}</div>
              )}
            </div>
            <div className="checkout-form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone"
                className={errors.phone ? 'error' : ''}
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
              />
              {errors.phone && (
                <div className="checkout-error active">{errors.phone}</div>
              )}
            </div>
          </div>

          <button type="submit" className="checkout-save-btn">
            🛒 Save
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
