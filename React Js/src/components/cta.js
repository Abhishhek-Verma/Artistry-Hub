import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SignInButton, useUser } from '@clerk/clerk-react'

import './cta.css'

const CTA = (props) => {
  const { isSignedIn } = useUser()
  
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                {!isSignedIn ? (
                  <SignInButton mode="modal">
                    <button type="button" className="thq-button-filled cta-button">
                      {props.action1}
                    </button>
                  </SignInButton>
                ) : (
                  <Link to="/dashboard" className="thq-button-filled cta-button" style={{ textDecoration: 'none' }}>
                    Go to Dashboard
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  heading1: 'Unleash Your Creativity',
  content1:
    'Join our artistry hub and explore a world of endless possibilities.',
  action1: 'Get Started',
}

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA
