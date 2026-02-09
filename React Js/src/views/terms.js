import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './terms.css'

const Terms = (props) => {
  return (
    <div className="terms-container">
      <Helmet>
        <title>Terms of Service - Artistry Hub</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="terms-content thq-section-padding">
        <div className="terms-max-width thq-section-max-width">
          <h1 className="thq-heading-1">Terms of Service</h1>
          <p className="thq-body-large">Last updated: February 9, 2026</p>
          
          <div className="terms-section">
            <h2 className="thq-heading-2">1. Acceptance of Terms</h2>
            <p className="thq-body-large">
              By accessing and using Artistry Hub, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="thq-heading-2">2. Use License</h2>
            <p className="thq-body-large">
              Permission is granted to temporarily access the materials on Artistry Hub for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="thq-heading-2">3. User Content</h2>
            <p className="thq-body-large">
              You retain all rights to any content you submit, post or display on or through the service. By submitting content, 
              you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="thq-heading-2">4. Prohibited Uses</h2>
            <p className="thq-body-large">
              You may not use Artistry Hub for any illegal or unauthorized purpose. You must not violate any laws in your jurisdiction, 
              including but not limited to copyright laws.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="thq-heading-2">5. Disclaimer</h2>
            <p className="thq-body-large">
              The materials on Artistry Hub are provided on an 'as is' basis. We make no warranties, expressed or implied, 
              and hereby disclaim all warranties.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="thq-heading-2">6. Limitations</h2>
            <p className="thq-body-large">
              In no event shall Artistry Hub or its suppliers be liable for any damages arising out of the use or inability 
              to use the materials on our platform.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="thq-heading-2">7. Contact Information</h2>
            <p className="thq-body-large">
              For questions about these Terms of Service, please contact:<br/>
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

export default Terms
