import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer1 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-newsletter">
            <Link to="/" className="footer-logo-link">
              <h2 className="footer-logo-text">{props.logoText}</h2>
            </Link>
            <span className="thq-body-small">
              Artistry Hub - A creative platform for showcasing and exploring artistic works.
            </span>
            <span className="thq-body-small">
              Ghaziabad, Delhi NCR, India
            </span>
          </div>
          <div className="footer-links">
            <div className="footer-column1">
              <strong className="thq-body-large footer-column1-title">
                {props.column1Title}
              </strong>
              <div className="footer-footer-links1">
                <Link to="/" className="thq-body-small">{props.link1}</Link>
                <a href="#features" className="thq-body-small">{props.link2}</a>
                <a href="#pricing" className="thq-body-small">{props.link3}</a>
                <a href="#testimonials" className="thq-body-small">{props.link4}</a>
                <a href="#contact" className="thq-body-small">{props.link5}</a>
              </div>
            </div>
            <div className="footer-column2">
              <strong className="thq-body-large footer-column2-title">
                {props.column2Title}
              </strong>
              <div className="footer-footer-links2">
                <Link to="/privacy" className="thq-body-small">Privacy Policy</Link>
                <Link to="/terms" className="thq-body-small">Terms of Service</Link>
                <Link to="/cookies" className="thq-body-small">Cookie Policy</Link>
                <a href="mailto:abhishekatkiet@gmail.com" className="thq-body-small">Contact</a>
              </div>
            </div>
            <div className="footer-column3">
              <strong className="thq-body-large footer-social-link1-title">
                {props.socialLinkTitleCategory}
              </strong>
              <div className="footer-social-links">
                <a
                  href="https://github.com/Abhishhek-Verma"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link14"
                >
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                  </svg>
                  <span className="thq-body-small">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/Abhishhek-Verma"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link15"
                >
                  <svg viewBox="0 0 877.7142857142857 1024" className="thq-icon-small">
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <span className="thq-body-small">LinkedIn</span>
                </a>
                <a
                  href="mailto:abhishekatkiet@gmail.com"
                  className="footer-link16"
                >
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="thq-body-small">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <span className="thq-body-small">{props.content3}</span>
            <div className="footer-footer-links3">
              <Link to="/privacy" className="thq-body-small">Privacy</Link>
              <Link to="/terms" className="thq-body-small">Terms</Link>
              <Link to="/cookies" className="thq-body-small">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  column2Title: 'Legal',
  column1Title: 'Quick Links',
  link1: 'Home',
  link2: 'Features',
  link3: 'Pricing',
  link4: 'Testimonials',
  link5: 'Contact',
  content3: '© 2026 Artistry Hub by Abhishek Verma',
  logoText: '🎨 Artistry Hub',
  socialLinkTitleCategory: 'Connect With Us',
}

Footer.propTypes = {
  column2Title: PropTypes.string,
  column1Title: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  content3: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  socialLinkTitleCategory: PropTypes.string,
}

export default Footer
