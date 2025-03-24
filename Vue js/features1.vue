<template>
  <div class="thq-section-padding">
    <div class="features1-container2 thq-section-max-width">
      <div class="features1-image-container">
        <img
          :alt="feature1ImgAlt"
          :src="feature1ImgSrc"
          v-if="activeTab === 0"
          class="features1-image1 thq-img-ratio-16-9"
        />
        <img
          :alt="feature2ImgAlt"
          :src="feature2ImgSrc"
          v-if="activeTab === 1"
          class="features1-image2 thq-img-ratio-16-9"
        />
        <img
          :alt="feature3ImgAlt"
          :src="feature3ImgSrc"
          v-if="activeTab === 2"
          class="features1-image3 thq-img-ratio-16-9"
        />
      </div>
      <div class="features1-tabs-menu">
        <div @click="activeTab = 0" class="features1-tab-horizontal1">
          <div class="features1-divider-container1">
            <div v-if="activeTab === 0" class="features1-container3"></div>
          </div>
          <div class="features1-content1">
            <h2 class="thq-heading-2">{{ feature1Title }}</h2>
            <span class="thq-body-small">{{ feature1Description }}</span>
          </div>
        </div>
        <div @click="activeTab = 1" class="features1-tab-horizontal2">
          <div class="features1-divider-container2">
            <div v-if="activeTab === 1" class="features1-container4"></div>
          </div>
          <div class="features1-content2">
            <h2 class="thq-heading-2">{{ feature2Title }}</h2>
            <span class="thq-body-small">{{ feature2Description }}</span>
          </div>
        </div>
        <div @click="activeTab = 2" class="features1-tab-horizontal3">
          <div class="features1-divider-container3">
            <div v-if="activeTab === 2" class="features1-container5"></div>
          </div>
          <div class="features1-content3">
            <h2 class="thq-heading-2">{{ feature3Title }}</h2>
            <span class="thq-body-small">{{ feature3Description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features1',
  props: {
    feature1ImgAlt: {
      type: String,
      default: 'Artwork showcasing creativity',
    },
    feature3Description: {
      type: String,
      default: 'Connect with other artists and collaborate on projects',
    },
    feature3Title: {
      type: String,
      default: 'Collaboration Opportunities',
    },
    feature3ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1724709166619-53c3a8621487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature1ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1701970655370-0d6c1cada73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature2Description: {
      type: String,
      default: 'Discover new techniques and trends in the art world',
    },
    feature1Title: {
      type: String,
      default: 'Inspiring Artistic Creations',
    },
    feature3ImgAlt: {
      type: String,
      default: 'Artists collaborating on a project',
    },
    feature1Description: {
      type: String,
      default:
        'Explore a diverse range of artistic creations from talented individuals',
    },
    feature2ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1663660653588-57dd5d55d155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2N3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature2ImgAlt: {
      type: String,
      default: 'Artistic tools and materials',
    },
    feature2Title: {
      type: String,
      default: 'Artistic Trends and Techniques',
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>

<style scoped>
.features1-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}
 
.features1-image-container {
  height: 100%;
  display: flex;
  position: relative;
}
 
.features1-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.features1-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.features1-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.features1-tabs-menu {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.features1-tab-horizontal1 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.features1-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
 
.features1-container3 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.features1-content1 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
 
.features1-tab-horizontal2 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.features1-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
 
.features1-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.features1-content2 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
 
.features1-tab-horizontal3 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.features1-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
 
.features1-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.features1-content3 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
 
@media(max-width: 991px) {
  .features1-container2 {
    grid-gap: var(--dl-space-space-twounits);
    grid-template-columns: 1fr;
  }
}
</style>
