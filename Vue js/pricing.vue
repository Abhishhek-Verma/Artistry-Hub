<template>
  <div class="pricing-pricing23 thq-section-padding">
    <div class="pricing-max-width thq-section-max-width">
      <div class="pricing-section-title">
        <span class="pricing-text10 thq-body-small">{{ content1 }}</span>
        <div class="pricing-content">
          <h2 class="pricing-text11 thq-heading-2">{{ heading1 }}</h2>
          <p class="pricing-text12 thq-body-large">{{ content2 }}</p>
        </div>
      </div>
      <div class="pricing-tabs">
        <button
          @click="isMonthly = true"
          v-if="isMonthly"
          class="pricing-button10 thq-button-animated thq-button-filled"
        >
          <span class="thq-body-small">Monthly</span>
        </button>
        <button
          @click="isMonthly = true"
          v-if="!isMonthly"
          class="pricing-button11 thq-button-outline thq-button-animated"
        >
          <span class="thq-body-small">Monthly</span>
        </button>
        <button
          @click="isMonthly = false"
          v-if="!isMonthly"
          class="pricing-button12 thq-button-animated thq-button-filled"
        >
          <span class="thq-body-small">Yearly</span>
        </button>
        <button
          @click="isMonthly = false"
          v-if="isMonthly"
          class="pricing-button13 thq-button-outline thq-button-animated"
        >
          <span class="thq-body-small">Yearly</span>
        </button>
      </div>
      <div v-if="isMonthly" class="pricing-container1">
        <div class="pricing-column1 thq-card">
          <div class="pricing-price10">
            <div class="pricing-price11">
              <p class="pricing-text17 thq-body-large">{{ plan1 }}</p>
              <h3 class="pricing-text18 thq-heading-3">{{ plan1Price }}</h3>
              <p class="thq-body-large">{{ plan1Yearly }}</p>
            </div>
            <div class="pricing-list1">
              <div class="pricing-list-item10">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature1 }}</span>
              </div>
              <div class="pricing-list-item11">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature2 }}</span>
              </div>
              <div class="pricing-list-item12">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature3 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button14 thq-button-outline thq-button-animated">
            <span class="thq-body-small">{{ plan1Action }}</span>
          </button>
        </div>
        <div class="pricing-column2 thq-card">
          <div class="pricing-price12">
            <div class="pricing-price13">
              <p class="pricing-text24 thq-body-large">{{ plan2 }}</p>
              <h3 class="pricing-text25 thq-heading-3">{{ plan2Price }}</h3>
              <p class="thq-body-large">{{ plan2Yearly }}</p>
            </div>
            <div class="pricing-list2">
              <div class="pricing-list-item13">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature1 }}</span>
              </div>
              <div class="pricing-list-item14">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature2 }}</span>
              </div>
              <div class="pricing-list-item15">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature3 }}</span>
              </div>
              <div class="pricing-list-item16">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature4 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button15 thq-button-animated thq-button-filled">
            <span class="thq-body-small">{{ plan2Action }}</span>
          </button>
        </div>
        <div class="pricing-column3 thq-card">
          <div class="pricing-price14">
            <div class="pricing-price15">
              <p class="pricing-text32 thq-body-large">{{ plan3 }}</p>
              <h3 class="pricing-text33 thq-heading-3">{{ plan3Price }}</h3>
              <p class="thq-body-large">{{ plan3Yearly }}</p>
            </div>
            <div class="pricing-list3">
              <div class="pricing-list-item17">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature1 }}</span>
              </div>
              <div class="pricing-list-item18">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature2 }}</span>
              </div>
              <div class="pricing-list-item19">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature3 }}</span>
              </div>
              <div class="pricing-list-item20">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature4 }}</span>
              </div>
              <div class="pricing-list-item21">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature5 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button16 thq-button-animated thq-button-filled">
            <span class="thq-body-small">{{ plan3Action }}</span>
          </button>
        </div>
      </div>
      <div v-if="!isMonthly" class="pricing-container2">
        <div class="pricing-column4 thq-card">
          <div class="pricing-price16">
            <div class="pricing-price17">
              <span class="pricing-text41 thq-body-large">{{ plan11 }}</span>
              <h3 class="pricing-text42 thq-heading-3">{{ plan1Price1 }}</h3>
              <span class="thq-body-large">{{ plan1Yearly1 }}</span>
            </div>
            <div class="pricing-list4">
              <div class="pricing-list-item22">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature11 }}</span>
              </div>
              <div class="pricing-list-item23">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature21 }}</span>
              </div>
              <div class="pricing-list-item24">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan1Feature31 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button17 thq-button-outline thq-button-animated">
            <span class="thq-body-small">{{ plan1Action1 }}</span>
          </button>
        </div>
        <div class="pricing-column5 thq-card">
          <div class="pricing-price18">
            <div class="pricing-price19">
              <span class="pricing-text48 thq-body-large">{{ plan21 }}</span>
              <h3 class="pricing-text49 thq-heading-3">{{ plan2Price1 }}</h3>
              <span class="thq-body-large">{{ plan2Yearly1 }}</span>
            </div>
            <div class="pricing-list5">
              <div class="pricing-list-item25">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature11 }}</span>
              </div>
              <div class="pricing-list-item26">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature21 }}</span>
              </div>
              <div class="pricing-list-item27">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature31 }}</span>
              </div>
              <div class="pricing-list-item28">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan2Feature41 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button18 thq-button-animated thq-button-filled">
            <span class="thq-body-small">{{ plan2Action1 }}</span>
          </button>
        </div>
        <div class="pricing-column6 thq-card">
          <div class="pricing-price20">
            <div class="pricing-price21">
              <span class="pricing-text56 thq-body-large">{{ plan31 }}</span>
              <h3 class="pricing-text57 thq-heading-3">{{ plan3Price1 }}</h3>
              <span class="thq-body-large">{{ plan3Yearly1 }}</span>
            </div>
            <div class="pricing-list6">
              <div class="pricing-list-item29">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature11 }}</span>
              </div>
              <div class="pricing-list-item30">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature21 }}</span>
              </div>
              <div class="pricing-list-item31">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature31 }}</span>
              </div>
              <div class="pricing-list-item32">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature41 }}</span>
              </div>
              <div class="pricing-list-item33">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">{{ plan3Feature51 }}</span>
              </div>
            </div>
          </div>
          <button class="pricing-button19 thq-button-animated thq-button-filled">
            <span class="thq-body-small">{{ plan3Action1 }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  props: {
    plan3Price: {
      type: String,
      default: '$29.99/month',
    },
    plan3Action: {
      type: String,
      default: 'Sign Up',
    },
    plan11: {
      type: String,
      default: 'Basic plan',
    },
    plan1Action: {
      type: String,
      default: 'Sign Up',
    },
    plan31: {
      type: String,
      default: 'Enterprise plan',
    },
    plan3Feature41: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Feature2: {
      type: String,
      default: 'Limited storage space',
    },
    plan2Feature11: {
      type: String,
      default: 'Feature text goes here',
    },
    plan3Feature51: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Feature41: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Feature2: {
      type: String,
      default: 'Increased storage space',
    },
    plan3Feature21: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Feature4: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Yearly: {
      type: String,
      default: 'or $299 yearly',
    },
    plan1Action1: {
      type: String,
      default: 'Get started',
    },
    plan2Action: {
      type: String,
      default: 'Sign Up',
    },
    plan3Feature1: {
      type: String,
      default: 'Access to premium art tools',
    },
    plan2Feature3: {
      type: String,
      default: 'Priority customer support',
    },
    plan1Price1: {
      type: String,
      default: '$200/yr',
    },
    plan2: {
      type: String,
      default: 'Business plan',
    },
    plan2Feature21: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Action1: {
      type: String,
      default: 'Get started',
    },
    plan3Feature2: {
      type: String,
      default: 'Unlimited storage space',
    },
    content1: {
      type: String,
      default: 'Choose the perfect plan for you',
    },
    plan2Feature1: {
      type: String,
      default: 'Access to advanced art tools',
    },
    heading1: {
      type: String,
      default: 'Pricing plan',
    },
    plan3Feature31: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1: {
      type: String,
      default: 'Basic plan',
    },
    plan21: {
      type: String,
      default: 'Business plan',
    },
    plan1Feature11: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Feature21: {
      type: String,
      default: 'Feature text goes here',
    },
    plan3Feature5: {
      type: String,
      default: 'Feature text goes here',
    },
    plan2Yearly1: {
      type: String,
      default: 'or $29 monthly',
    },
    plan2Price: {
      type: String,
      default: '$19.99/month',
    },
    plan3Yearly1: {
      type: String,
      default: 'or $49 monthly',
    },
    plan2Feature31: {
      type: String,
      default: 'Feature text goes here',
    },
    plan3Feature11: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Yearly1: {
      type: String,
      default: 'or $20 monthly',
    },
    plan2Price1: {
      type: String,
      default: '$299/yr',
    },
    plan3Yearly: {
      type: String,
      default: 'or $499 yearly',
    },
    plan3Feature4: {
      type: String,
      default: 'Feature text goes here',
    },
    plan3Price1: {
      type: String,
      default: '$499/yr',
    },
    plan1Feature31: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Feature3: {
      type: String,
      default: 'Feature text goes here',
    },
    plan1Yearly: {
      type: String,
      default: 'or $200 yearly',
    },
    plan1Feature1: {
      type: String,
      default: 'Access to basic art tools',
    },
    plan3Feature3: {
      type: String,
      default: '24/7 dedicated support',
    },
    content2: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    plan3Action1: {
      type: String,
      default: 'Get started',
    },
    plan1Price: {
      type: String,
      default: '$9.99/month',
    },
    plan3: {
      type: String,
      default: 'Enterprise plan',
    },
  },
  data() {
    return {
      isMonthly: true,
    }
  },
}
</script>

<style scoped>
.pricing-pricing23 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.pricing-max-width {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.pricing-section-title {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.pricing-text10 {
  text-align: center;
}
 
.pricing-content {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-text11 {
  text-align: center;
}
 
.pricing-text12 {
  text-align: center;
}
 
.pricing-tabs {
  display: flex;
  align-items: flex-start;
}
 
.pricing-button10 {
  gap: var(--dl-space-space-halfunit);
  color: var(--dl-color-theme-neutral-light);
  width: 120px;
  height: 60px;
  border-top-left-radius: var(--dl-radius-radius-buttonradius);
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
  border-bottom-right-radius: 0;
}
 
.pricing-button11 {
  gap: var(--dl-space-space-halfunit);
  width: 120px;
  height: 60px;
  border-style: solid;
  border-top-left-radius: var(--dl-radius-radius-buttonradius);
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
  border-bottom-right-radius: 0;
}
 
.pricing-button12 {
  gap: var(--dl-space-space-halfunit);
  color: var(--dl-color-theme-neutral-light);
  width: 120px;
  height: 60px;
  border-top-left-radius: 0;
  border-top-right-radius: var(--dl-radius-radius-buttonradius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
}
 
.pricing-button13 {
  gap: var(--dl-space-space-halfunit);
  width: 120px;
  height: 60px;
  border-style: solid;
  border-top-left-radius: 0;
  border-top-right-radius: var(--dl-radius-radius-buttonradius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
}
 
.pricing-container1 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.pricing-column1 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}
 
.pricing-price10 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-price11 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-text17 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing-text18 {
  font-size: 48px;
}
 
.pricing-list1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing-list-item10 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item11 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item12 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-button14 {
  width: 100%;
}
 
.pricing-column2 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent1);
}
 
.pricing-price12 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-price13 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-text24 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing-text25 {
  font-size: 48px;
}
 
.pricing-list2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing-list-item13 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item14 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item15 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item16 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-button15 {
  width: 100%;
}
 
.pricing-column3 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent2);
}
 
.pricing-price14 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-price15 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-text32 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing-text33 {
  font-size: 48px;
}
 
.pricing-list3 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing-list-item17 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item18 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item19 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item20 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item21 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-button16 {
  width: 100%;
}
 
.pricing-container2 {
  gap: 32px;
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.pricing-column4 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}
 
.pricing-price16 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-price17 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-text41 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing-text42 {
  font-size: 48px;
}
 
.pricing-list4 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing-list-item22 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item23 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item24 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-button17 {
  width: 100%;
}
 
.pricing-column5 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent1);
}
 
.pricing-price18 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-price19 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-text48 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing-text49 {
  font-size: 48px;
}
 
.pricing-list5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing-list-item25 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item26 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item27 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item28 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-button18 {
  width: 100%;
}
 
.pricing-column6 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent2);
}
 
.pricing-price20 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-price21 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing-text56 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing-text57 {
  font-size: 48px;
}
 
.pricing-list6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing-list-item29 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item30 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item31 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item32 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-list-item33 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing-button19 {
  width: 100%;
}
 
@media(max-width: 991px) {
  .pricing-container1 {
    flex-direction: column;
  }
  .pricing-column3 {
    width: 100%;
  }
  .pricing-container2 {
    flex-direction: column;
  }
  .pricing-column6 {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .pricing-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
