import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useUser } from '@clerk/clerk-react'
import { useHistory } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './upload.css'

const Upload = (props) => {
  const { user, isLoaded } = useUser()
  const history = useHistory()
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'painting',
    price: '',
    tags: '',
  })
  
  const [previewImage, setPreviewImage] = useState(null)
  const [uploading, setUploading] = useState(false)

  // Redirect if not logged in
  React.useEffect(() => {
    if (isLoaded && !user) {
      history.push('/')
    }
  }, [isLoaded, user, history])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)
    
    // Simulate upload
    setTimeout(() => {
      alert('Artwork uploaded successfully! (Demo mode - not saved)')
      setUploading(false)
      history.push('/portfolio')
    }, 2000)
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="upload-container">
      <Helmet>
        <title>Upload Artwork - Artistry Hub</title>
      </Helmet>
      <Navbar />
      <div className="upload-content thq-section-padding">
        <div className="upload-max-width thq-section-max-width">
          <div className="upload-header">
            <h1 className="upload-title thq-heading-1">Upload Your Artwork 🎨</h1>
            <p className="upload-subtitle thq-body-large">
              Share your creativity with the world
            </p>
          </div>

          <form onSubmit={handleSubmit} className="upload-form">
            <div className="upload-grid">
              <div className="upload-left">
                <div className="upload-image-section">
                  <label className="upload-image-label">
                    {previewImage ? (
                      <img src={previewImage} alt="Preview" className="upload-preview" />
                    ) : (
                      <div className="upload-placeholder">
                        <svg viewBox="0 0 1024 1024" className="upload-icon">
                          <path d="M726 426v-86l-256 256-256-256v86l256 256zM854 854v-598h-142q-18 34-50.5 58t-69.5 24h-170q-38 0-70-24t-50-58h-142v598h684z"></path>
                        </svg>
                        <p className="thq-body-large">Click to upload artwork</p>
                        <p className="thq-body-small">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="upload-file-input"
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="upload-right">
                <div className="upload-field">
                  <label className="upload-label thq-body-large">
                    Artwork Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter artwork title"
                    className="upload-input thq-input"
                    required
                  />
                </div>

                <div className="upload-field">
                  <label className="upload-label thq-body-large">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your artwork..."
                    className="upload-textarea thq-input"
                    rows="5"
                    required
                  />
                </div>

                <div className="upload-field">
                  <label className="upload-label thq-body-large">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="upload-select thq-input"
                    required
                  >
                    <option value="painting">Painting</option>
                    <option value="digital">Digital Art</option>
                    <option value="photography">Photography</option>
                    <option value="sculpture">Sculpture</option>
                    <option value="illustration">Illustration</option>
                    <option value="mixed-media">Mixed Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="upload-field">
                  <label className="upload-label thq-body-large">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Enter price in INR (optional)"
                    className="upload-input thq-input"
                    min="0"
                  />
                </div>

                <div className="upload-field">
                  <label className="upload-label thq-body-large">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="abstract, modern, colorful (comma separated)"
                    className="upload-input thq-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={uploading}
                  className="upload-submit thq-button-filled"
                >
                  {uploading ? 'Uploading...' : 'Upload Artwork'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Upload
