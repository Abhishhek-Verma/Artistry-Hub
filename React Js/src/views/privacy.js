import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './privacy.css'

const Privacy = (props) => {
  return (
    <div className="privacy-container">
      <Helmet>
        <title>Privacy Policy - Artistry Hub</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="privacy-content thq-section-padding">
        <div className="privacy-max-width thq-section-max-width">
          <h1 className="thq-heading-1">Privacy Policy</h1>
          <p className="thq-body-large">Last updated: February 9, 2026</p>
          
          <div className="privacy-section">
            <h2 className="thq-heading-2">1. Information We Collect</h2>
            <p className="thq-body-large">
              At Artistry Hub, we collect information that you provide directly to us, including your name, email address, 
              and any artwork or content you upload to our platform.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="thq-heading-2">2. How We Use Your Information</h2>
            <p className="thq-body-large">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, 
              and to showcase your artistic work to the community.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="thq-heading-2">3. Information Sharing</h2>
            <p className="thq-body-large">
              We do not sell or share your personal information with third parties except as necessary to provide our services 
              or as required by law.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="thq-heading-2">4. Data Security</h2>
            <p className="thq-body-large">
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, or destruction.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="thq-heading-2">5. Your Rights</h2>
            <p className="thq-body-large">
              You have the right to access, update, or delete your personal information at any time. Please contact us at 
              abhishekatkiet@gmail.com for any privacy-related requests.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="thq-heading-2">6. Contact Us</h2>
            <p className="thq-body-large">
              If you have any questions about this Privacy Policy, please contact us at:<br/>
              Email: abhishekatkiet@gmail.com<br/>
              Location: Ghaziabad, Delhi NCR, India
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Privacy
