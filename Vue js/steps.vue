<template>
  <div class="steps-container1 thq-section-padding">
    <div class="steps-max-width thq-section-max-width">
      <div class="steps-container2 thq-grid-2">
        <div class="steps-section-header">
          <h2 class="thq-heading-2">Discover the Power of Our Products</h2>
          <p class="thq-body-large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div class="steps-actions">
            <button class="thq-button-animated thq-button-filled steps-button">
              <span class="thq-body-small">Main action</span>
            </button>
          </div>
        </div>
        <div class="steps-container3">
          <div class="steps-container4 thq-card">
            <h2 class="thq-heading-2">{{ step1Title }}</h2>
            <span class="steps-text14 thq-body-small">
              {{ step1Description }}
            </span>
            <label class="steps-text15 thq-heading-3">01</label>
          </div>
          <div class="steps-container5 thq-card">
            <h2 class="thq-heading-2">{{ step2Title }}</h2>
            <span class="steps-text17 thq-body-small">
              {{ step2Description }}
            </span>
            <label class="steps-text18 thq-heading-3">02</label>
          </div>
          <div class="steps-container6 thq-card">
            <h2 class="thq-heading-2">{{ step3Title }}</h2>
            <span class="steps-text20 thq-body-small">
              {{ step3Description }}
            </span>
            <label class="steps-text21 thq-heading-3">03</label>
          </div>
          <div class="steps-container7 thq-card">
            <h2 class="thq-heading-2">{{ step4Title }}</h2>
            <span class="steps-text23 thq-body-small">
              {{ step4Description }}
            </span>
            <label class="steps-text24 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    step1Description: {
      type: String,
      default:
        'Sign up for free and create your personal account to access all the features of our artistry hub.',
    },
    step3Description: {
      type: String,
      default:
        'Engage with talented artists from around the world, follow their work, and build a network within the art community.',
    },
    step2Title: {
      type: String,
      default: 'Explore Art Categories',
    },
    step2Description: {
      type: String,
      default:
        'Discover a wide range of art categories including painting, sculpture, photography, and more to find inspiration.',
    },
    step1Title: {
      type: String,
      default: 'Create Your Account',
    },
    step3Title: {
      type: String,
      default: 'Connect with Artists',
    },
    step4Description: {
      type: String,
      default:
        'Share your own creations with a global audience, receive feedback, and grow as an artist on our platform.',
    },
    step4Title: {
      type: String,
      default: 'Showcase Your Artwork',
    },
  },
}
</script>

<style scoped>
.steps-container1 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
 
.steps-max-width {
  gap: var(--dl-space-space-fourunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
 
.steps-container2 {
  align-items: start;
}
 
.steps-section-header {
  gap: var(--dl-space-space-oneandhalfunits);
  top: 10%;
  display: flex;
  position: sticky;
  align-items: flex-start;
  flex-direction: column;
}
 
.steps-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.steps-container3 {
  grid-area: span 1/span 1/span 1/span 1;
}
 
.steps-container4 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}
 
.steps-text14 {
  text-align: center;
}
 
.steps-text15 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
 
.steps-container5 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent2);
}
 
.steps-text17 {
  text-align: center;
}
 
.steps-text18 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
 
.steps-container6 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}
 
.steps-text20 {
  text-align: center;
}
 
.steps-text21 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
 
.steps-container7 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  background-color: var(--dl-color-theme-accent2);
}
 
.steps-text23 {
  text-align: center;
}
 
.steps-text24 {
  top: var(--dl-space-space-unit);
  right: var(--dl-space-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
 
@media(max-width: 991px) {
  .steps-max-width {
    flex-direction: column;
  }
}
 
@media(max-width: 767px) {
  .steps-section-header {
    position: static;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .steps-actions {
    width: 100%;
    align-self: flex-start;
  }
  .steps-container4 {
    width: 100%;
  }
  .steps-container5 {
    width: 100%;
  }
  .steps-container6 {
    width: 100%;
  }
  .steps-container7 {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .steps-button {
    width: 100%;
  }
}
</style>
