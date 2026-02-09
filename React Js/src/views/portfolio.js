import React from 'react'
import { Helmet } from 'react-helmet'
import { useUser } from '@clerk/clerk-react'
import { Link, useHistory } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './portfolio.css'

const Portfolio = (props) => {
  const { user, isLoaded } = useUser()
  const history = useHistory()

  // Redirect if not logged in
  React.useEffect(() => {
    if (isLoaded && !user) {
      history.push('/')
    }
  }, [isLoaded, user, history])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }

  // Demo data - in real app, this would come from a database
  const artworks = []

  return (
    <div className="portfolio-container">
      <Helmet>
        <title>My Portfolio - Artistry Hub</title>
      </Helmet>
      <Navbar />
      <div className="portfolio-content thq-section-padding">
        <div className="portfolio-max-width thq-section-max-width">
          <div className="portfolio-header">
            <h1 className="portfolio-title thq-heading-1">
              My Portfolio 🖼️
            </h1>
            <p className="portfolio-subtitle thq-body-large">
              Manage and showcase your artistic creations
            </p>
            <Link to="/upload" className="portfolio-upload-btn thq-button-filled">
              + Upload New Artwork
            </Link>
          </div>

          {artworks.length === 0 ? (
            <div className="portfolio-empty">
              <svg viewBox="0 0 1024 1024" className="portfolio-empty-icon">
                <path d="M832 128h-640c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h640c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM384 256c53.019 0 96 42.981 96 96s-42.981 96-96 96-96-42.981-96-96 42.981-96 96-96zM832 768h-640v-128l192-192 128 128 192-192 128 128v256z"></path>
              </svg>
              <h2 className="thq-heading-2">No artworks yet</h2>
              <p className="thq-body-large">
                Start building your portfolio by uploading your first artwork
              </p>
              <Link to="/upload" className="portfolio-cta-btn thq-button-filled">
                Upload Your First Artwork
              </Link>
            </div>
          ) : (
            <div className="portfolio-grid">
              {artworks.map((artwork, index) => (
                <div key={index} className="portfolio-card">
                  <img src={artwork.image} alt={artwork.title} className="portfolio-image" />
                  <div className="portfolio-card-content">
                    <h3 className="thq-heading-3">{artwork.title}</h3>
                    <p className="thq-body-small">{artwork.category}</p>
                    <div className="portfolio-card-stats">
                      <span className="portfolio-stat">
                        <svg viewBox="0 0 1024 1024" className="portfolio-stat-icon">
                          <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                          <path d="M512 256c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM512 672c-88.365 0-160-71.635-160-160s71.635-160 160-160 160 71.635 160 160-71.635 160-160 160z"></path>
                        </svg>
                        {artwork.views} views
                      </span>
                      <span className="portfolio-stat">
                        <svg viewBox="0 0 1024 1024" className="portfolio-stat-icon">
                          <path d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-269.714 269.714-269.714 61.714 0 120.571 23.429 169.143 67.429l72.571 66.857 72.571-66.857c48.571-44 107.429-67.429 169.143-67.429 167.429 0 269.714 102.286 269.714 269.714 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"></path>
                        </svg>
                        {artwork.likes} likes
                      </span>
                    </div>
                    <div className="portfolio-card-actions">
                      <button className="portfolio-edit-btn thq-button-outline">Edit</button>
                      <button className="portfolio-delete-btn thq-button-outline">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
