import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'

import './navbar.css'

const Navbar = (props) => {
  const { isSignedIn } = useUser()
  
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <Link to="/" className="navbar-logo-link">
          <h2 className="navbar-logo-text">{props.logoText}</h2>
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <Link to="/" className="thq-link thq-body-small">{props.link1}</Link>
            {isSignedIn ? (
              <Link to="/dashboard" className="thq-link thq-body-small">Dashboard</Link>
            ) : (
              <>
                <a href="#features" className="thq-link thq-body-small">{props.link2}</a>
                <a href="#pricing" className="thq-link thq-body-small">{props.link3}</a>
              </>
            )}
            <a href="#testimonials" className="thq-link thq-body-small">{props.link4}</a>
            <a href="#contact" className="thq-link thq-body-small">{props.link5}</a>
          </nav>
          <div className="navbar-buttons1">
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="navbar-action1 thq-button-filled">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
              </SignInButton>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <Link to="/" className="navbar-logo-link">
                <h2 className="navbar-logo-text">{props.logoText}</h2>
              </Link>
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              <Link to="/" className="thq-link thq-body-small">{props.link1}</Link>
              {isSignedIn ? (
                <Link to="/dashboard" className="thq-link thq-body-small">Dashboard</Link>
              ) : (
                <>
                  <a href="#features" className="thq-link thq-body-small">{props.link2}</a>
                  <a href="#pricing" className="thq-link thq-body-small">{props.link3}</a>
                </>
              )}
              <a href="#testimonials" className="thq-link thq-body-small">{props.link4}</a>
              <a href="#contact" className="thq-link thq-body-small">{props.link5}</a>
            </nav>
            <div className="navbar-buttons2">
              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <button className="thq-button-filled">{props.action1}</button>
                </SignInButton>
              ) : (
                <UserButton afterSignOutUrl="/" />
              )}
            </div>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link1: 'Home',
  link2: 'Features',
  link3: 'Pricing',
  link4: 'Testimonials',
  link5: 'Contact',
  logoText: '🎨 Artistry Hub',
  action1: 'Get Started',
}

Navbar.propTypes = {
  link1: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  action1: PropTypes.string,
  link4: PropTypes.string,
}

export default Navbar
