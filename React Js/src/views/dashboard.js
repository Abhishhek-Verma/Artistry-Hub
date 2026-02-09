import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useUser } from '@clerk/clerk-react'
import { Link, useHistory } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './dashboard.css'

const Dashboard = (props) => {
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

  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Artistry Hub</title>
      </Helmet>
      <Navbar />
      <div className="dashboard-content thq-section-padding">
        <div className="dashboard-max-width thq-section-max-width">
          <div className="dashboard-header">
            <h1 className="dashboard-title thq-heading-1">
              Welcome, {user.firstName || user.username}! 👋
            </h1>
            <p className="dashboard-subtitle thq-body-large">
              Manage your artistic portfolio and showcase your work to the world
            </p>
          </div>

          <div className="dashboard-stats">
            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                  <path d="M864 0c88.364 0 160 71.634 160 160 0 36.020-11.91 69.258-32 96l-64 64-224-224 64-64c26.742-20.090 59.978-32 96-32zM64 736l-64 288 288-64 592-592-224-224-592 592zM715.578 363.578l-448 448-55.156-55.156 448-448 55.156 55.156z"></path>
                </svg>
              </div>
              <div className="dashboard-stat-info">
                <h3 className="thq-heading-3">0</h3>
                <p className="thq-body-small">Artworks</p>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                  <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                  <path d="M512 256c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM512 672c-88.365 0-160-71.635-160-160s71.635-160 160-160 160 71.635 160 160-71.635 160-160 160z"></path>
                </svg>
              </div>
              <div className="dashboard-stat-info">
                <h3 className="thq-heading-3">0</h3>
                <p className="thq-body-small">Views</p>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                  <path d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-269.714 269.714-269.714 61.714 0 120.571 23.429 169.143 67.429l72.571 66.857 72.571-66.857c48.571-44 107.429-67.429 169.143-67.429 167.429 0 269.714 102.286 269.714 269.714 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"></path>
                </svg>
              </div>
              <div className="dashboard-stat-info">
                <h3 className="thq-heading-3">0</h3>
                <p className="thq-body-small">Likes</p>
              </div>
            </div>
          </div>

          <div className="dashboard-actions">
            <h2 className="thq-heading-2">Quick Actions</h2>
            <div className="dashboard-action-grid">
              <Link to="/upload" className="dashboard-action-card">
                <div className="dashboard-action-icon">
                  <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                    <path d="M554 128v298h298l-298-298zM854 426v428q0 34-26 60t-60 26h-512q-34 0-60-26t-26-60v-768q0-34 26-60t60-26h298l300 300q26 26 26 60v66z"></path>
                  </svg>
                </div>
                <h3 className="thq-heading-3">Upload Artwork</h3>
                <p className="thq-body-small">
                  Share your latest creation with the community
                </p>
              </Link>

              <Link to="/portfolio" className="dashboard-action-card">
                <div className="dashboard-action-icon">
                  <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                    <path d="M896 256h-896v-128h896v128zM896 426.667h-896v-128h896v128zM896 597.333h-896v-128h896v128zM896 768h-896v-128h896v128z"></path>
                  </svg>
                </div>
                <h3 className="thq-heading-3">My Portfolio</h3>
                <p className="thq-body-small">
                  View and manage all your artworks
                </p>
              </Link>

              <Link to="/analytics" className="dashboard-action-card">
                <div className="dashboard-action-icon">
                  <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                    <path d="M128 896v-768h768v768h-768zM256 832h512v-512h-512v512zM320 704v-320h64v320h-64zM448 704v-192h64v192h-64zM576 704v-128h64v128h-64zM704 704v-256h64v256h-64z"></path>
                  </svg>
                </div>
                <h3 className="thq-heading-3">Analytics</h3>
                <p className="thq-body-small">
                  Track your artwork performance
                </p>
              </Link>

              <Link to="/profile" className="dashboard-action-card">
                <div className="dashboard-action-icon">
                  <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                    <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                  </svg>
                </div>
                <h3 className="thq-heading-3">Profile Settings</h3>
                <p className="thq-body-small">
                  Update your artist profile
                </p>
              </Link>
            </div>
          </div>

          <div className="dashboard-recent">
            <h2 className="thq-heading-2">Recent Activity</h2>
            <div className="dashboard-empty-state">
              <svg viewBox="0 0 1024 1024" className="dashboard-empty-icon">
                <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                <path d="M448 256h128v128h-128zM448 512h128v256h-128z"></path>
              </svg>
              <h3 className="thq-heading-3">No activity yet</h3>
              <p className="thq-body-large">
                Start by uploading your first artwork!
              </p>
              <Link to="/upload" className="dashboard-cta-button thq-button-filled">
                Upload Artwork
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
