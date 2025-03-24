<template>
  <div class="thq-section-padding">
    <div class="thq-section-max-width">
      <div class="cta-accent2-bg">
        <div class="cta-accent1-bg">
          <div class="cta-container2">
            <div class="cta-content">
              <span class="thq-heading-2">{{ heading1 }}</span>
              <p class="thq-body-large">{{ content1 }}</p>
            </div>
            <div class="cta-actions">
              <button type="button" class="thq-button-filled cta-button">
                {{ action1 }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    heading1: {
      type: String,
      default: 'Unleash Your Creativity',
    },
    content1: {
      type: String,
      default:
        'Join our artistry hub and explore a world of endless possibilities.',
    },
    action1: {
      type: String,
      default: 'Get Started',
    },
  },
}
</script>

<style scoped>
.cta-accent2-bg {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-radius-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent2);
}
 
.cta-accent2-bg:hover {
  transform: scale3d(1.1,1.1,1.1);
}
 
.cta-accent1-bg {
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
  align-items: center;
  border-radius: var(--dl-radius-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent1);
}
 
.cta-container2 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-fourunits);
  border-radius: var(--dl-radius-radius-cardradius);
  padding-right: var(--dl-space-space-fourunits);
  padding-bottom: var(--dl-space-space-sixunits);
}
 
.cta-container2:hover {
  color: var(--dl-color-theme-neutral-light);
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.cta-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta-actions {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
@media(max-width: 767px) {
  .cta-container2 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    justify-content: flex-start;
  }
}
 
@media(max-width: 479px) {
  .cta-actions {
    flex-wrap: wrap;
    align-self: stretch;
    justify-content: center;
  }
  .cta-button {
    flex: 1;
  }
}
</style>
