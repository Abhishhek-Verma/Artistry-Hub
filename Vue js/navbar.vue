<template>
  <header class="navbar-container">
    <header data-thq="thq-navbar" class="navbar-navbar-interactive">
      <img :alt="logoAlt" :src="logoSrc" class="navbar-image1" />
      <div data-thq="thq-navbar-nav" class="navbar-desktop-menu">
        <nav class="navbar-links1">
          <span class="thq-link thq-body-small">{{ link1 }}</span>
          <span class="thq-link thq-body-small">{{ link2 }}</span>
          <span class="thq-link thq-body-small">{{ link3 }}</span>
          <span class="thq-link thq-body-small">{{ link4 }}</span>
          <span class="thq-link thq-body-small">{{ link5 }}</span>
        </nav>
        <div class="navbar-buttons1">
          <button class="navbar-action11 thq-button-animated thq-button-filled">
            <span class="thq-body-small">Action 1</span>
          </button>
          <button class="navbar-action21 thq-button-outline thq-button-animated">
            <span class="thq-body-small">Action 2</span>
          </button>
        </div>
      </div>
      <div data-thq="thq-burger-menu" class="navbar-burger-menu">
        <svg viewBox="0 0 1024 1024" class="navbar-icon1">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="navbar-mobile-menu">
        <div class="navbar-nav">
          <div class="navbar-top">
            <img :alt="logoAlt" :src="logoSrc" class="navbar-logo" />
            <div data-thq="thq-close-menu" class="navbar-close-menu">
              <svg viewBox="0 0 1024 1024" class="navbar-icon3">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="navbar-links2">
            <span class="thq-link thq-body-small">{{ link1 }}</span>
            <span class="thq-link thq-body-small">{{ link2 }}</span>
            <span class="thq-link thq-body-small">{{ link3 }}</span>
            <span class="thq-link thq-body-small">{{ link4 }}</span>
            <span class="thq-link thq-body-small">{{ link5 }}</span>
          </nav>
        </div>
        <div class="navbar-buttons2">
          <button class="thq-button-filled">Login</button>
          <button class="thq-button-outline">Register</button>
        </div>
      </div>
    </header>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    link1: {
      type: String,
      default: 'Home',
    },
    link5: {
      type: String,
      default: 'Contact',
    },
    link2: {
      type: String,
      default: 'Artists',
    },
    logoSrc: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
    },
    action2: {
      type: String,
      default: 'Log In',
    },
    logoAlt: {
      type: String,
      default: 'Artistry Hub Logo',
    },
    link3: {
      type: String,
      default: 'Events',
    },
    action1: {
      type: String,
      default: 'Sign Up',
    },
    link4: {
      type: String,
      default: 'Gallery',
    },
  },
}
</script>

<style scoped>
.navbar-container {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
}
 
.navbar-navbar-interactive {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
 
.navbar-image1 {
  height: 3rem;
}
 
.navbar-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
 
.navbar-links1 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-twounits);
  flex-direction: row;
  justify-content: flex-start;
}
 
.navbar-buttons1 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-twounits);
}
 
.navbar-action11 {
  display: flex;
  flex-direction: row;
}
 
.navbar-action21 {
  display: flex;
  flex-direction: row;
}
 
.navbar-burger-menu {
  display: none;
}
 
.navbar-icon1 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
 
.navbar-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-twounits);
  z-index: 100;
  position: absolute;
  flex-direction: column;
  background-color: var(--dl-color-theme-neutral-light);
}
 
.navbar-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.navbar-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
 
.navbar-logo {
  height: 3rem;
}
 
.navbar-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
 
.navbar-icon3 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
 
.navbar-links2 {
  gap: var(--dl-space-space-unit);
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
 
.navbar-buttons2 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
}
 
@media(max-width: 767px) {
  .navbar-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .navbar-desktop-menu {
    display: none;
  }
  .navbar-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
 
@media(max-width: 479px) {
  .navbar-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .navbar-mobile-menu {
    padding: var(--dl-space-space-unit);
  }
}
</style>
