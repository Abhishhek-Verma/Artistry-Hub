import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './cookies.css'

const Cookies = (props) => {
  return (
    <div className="cookies-container">
      <Helmet>
        <title>Cookie Policy - Artistry Hub</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="cookies-content thq-section-padding">
        <div className="cookies-max-width thq-section-max-width">
          <h1 className="thq-heading-1">Cookie Policy</h1>
          <p className="thq-body-large">Last updated: February 9, 2026</p>
          
          <div className="cookies-section">
            <h2 className="thq-heading-2">1. What Are Cookies</h2>
            <p className="thq-body-large">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you 
              with a better experience by remembering your preferences and tracking usage patterns.
            </p>
          </div>

          <div className="cookies-section">
            <h2 className="thq-heading-2">2. How We Use Cookies</h2>
            <p className="thq-body-large">
              We use cookies to understand how you use Artistry Hub, to remember your preferences, and to improve your experience. 
              This includes essential cookies for site functionality and analytics cookies to improve our services.
            </p>
          </div>

          <div className="cookies-section">
            <h2 className="thq-heading-2">3. Types of Cookies We Use</h2>
            <p className="thq-body-large">
              <strong>Essential Cookies:</strong> These are necessary for the website to function properly.<br/>
              <strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website.<br/>
              <strong>Preference Cookies:</strong> These remember your settings and preferences.
            </p>
          </div>

          <div className="cookies-section">
            <h2 className="thq-heading-2">4. Managing Cookies</h2>
            <p className="thq-body-large">
              You can control and manage cookies through your browser settings. Please note that removing or blocking cookies 
              may impact your user experience and some features may not function properly.
            </p>
          </div>

          <div className="cookies-section">
            <h2 className="thq-heading-2">5. Third-Party Cookies</h2>
            <p className="thq-body-large">
              We may use third-party services that set their own cookies. These third parties have their own privacy policies 
              and we have no control over their cookies.
            </p>
          </div>

          <div className="cookies-section">
            <h2 className="thq-heading-2">6. Updates to This Policy</h2>
            <p className="thq-body-large">
              We may update this Cookie Policy from time to time. We encourage you to review this page periodically for any changes.
            </p>
          </div>

          <div className="cookies-section">
            <h2 className="thq-heading-2">7. Contact Us</h2>
            <p className="thq-body-large">
              If you have questions about our use of cookies, please contact:<br/>
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

export default Cookies
