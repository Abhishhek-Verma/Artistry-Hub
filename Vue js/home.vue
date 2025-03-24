<template>
  <div class="home-container">
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-features1></app-features1>
    <app-cta></app-cta>
    <app-features2></app-features2>
    <app-pricing></app-pricing>
    <app-steps></app-steps>
    <app-testimonial></app-testimonial>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppHero from '../components/hero'
import AppFeatures1 from '../components/features1'
import AppCta from '../components/cta'
import AppFeatures2 from '../components/features2'
import AppPricing from '../components/pricing'
import AppSteps from '../components/steps'
import AppTestimonial from '../components/testimonial'
import AppContact from '../components/contact'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    AppNavbar,
    AppHero,
    AppFeatures1,
    AppCta,
    AppFeatures2,
    AppPricing,
    AppSteps,
    AppTestimonial,
    AppContact,
    AppFooter,
  },
  metaInfo: {
    title: 'Spotless Hungry Crocodile',
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
