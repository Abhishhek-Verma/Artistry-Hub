<template>
  <div class="hero-header78">
    <div class="hero-column thq-section-padding thq-section-max-width">
      <div class="hero-content1">
        <h1 class="hero-text1 thq-heading-1">{{ heading1 }}</h1>
        <p class="hero-text2 thq-body-large">{{ content1 }}</p>
      </div>
      <div class="hero-actions">
        <button class="thq-button-filled hero-button1">
          <span class="thq-body-small">{{ action1 }}</span>
        </button>
        <button class="thq-button-outline hero-button2">
          <span class="thq-body-small">{{ action2 }}</span>
        </button>
      </div>
    </div>
    <div class="hero-content2">
      <div
        class="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal"
      >
        <div class="thq-animated-group-horizontal">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image4Alt"
            :src="image4Src"
            class="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image5Alt"
            :src="image5Src"
            class="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image6Alt"
            :src="image6Src"
            class="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
        <div class="thq-animated-group-horizontal">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image4Alt"
            :src="image4Src"
            class="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image5Alt"
            :src="image5Src"
            class="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
            class="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
      </div>
      <div
        class="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal"
      >
        <div class="thq-animated-group-horizontal-reverse">
          <img
            :alt="image7Alt"
            :src="image7Src"
            class="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image8Alt"
            :src="image8Src"
            class="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image9Alt"
            :src="image9Src"
            class="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image10Alt"
            :src="image10Src"
            class="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image11Alt"
            :src="image11Src"
            class="hero-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image12Alt"
            :src="image12Src"
            class="hero-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
        <div class="thq-animated-group-horizontal-reverse">
          <img
            :alt="image7Alt"
            :src="image7Src"
            class="hero-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image8Alt"
            :src="image8Src"
            class="hero-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image9Alt"
            :src="image9Src"
            class="hero-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image10Alt"
            :src="image10Src"
            class="hero-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image11Alt"
            :src="image11Src"
            class="hero-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            class="hero-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="hero-container2">
        <DangerousHTML
          html="<style>
    @keyframes scroll-x {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - 16px));
      }
    }
  
    @keyframes scroll-y {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(calc(-100% - 16px));
      }
    }
  </style>
  "
        ></DangerousHTML>
      </div>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

export default {
  name: 'Hero',
  props: {
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1639968685023-22db974d0b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image8Alt: {
      type: String,
      default: 'Art workshop',
    },
    image2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1649976107060-1772de64a55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image6Alt: {
      type: String,
      default: 'Handcrafted jewelry',
    },
    image11Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1646724684583-764bb3f47c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2N3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image5Alt: {
      type: String,
      default: 'Digital art creation',
    },
    image1Alt: {
      type: String,
      default: 'Artistic painting',
    },
    image7Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1628697550216-c4b824f3e22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image7Alt: {
      type: String,
      default: 'Art supplies',
    },
    image12Alt: {
      type: String,
      default: 'Artistic tools',
    },
    image2Alt: {
      type: String,
      default: 'Sculpture artwork',
    },
    image6Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1676496220303-3d98c6077710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image12Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1649899996753-9fc737c99ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Alt: {
      type: String,
      default: 'Abstract art piece',
    },
    image9Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1712843703345-cfaa1c68d157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image11Alt: {
      type: String,
      default: 'Artistic community event',
    },
    action2: {
      type: String,
      default: 'Learn More',
    },
    action1: {
      type: String,
      default: 'Explore Artworks',
    },
    image8Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1605008584735-f0ae2bec5a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image5Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1676496220303-3d98c6077710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU3MHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1727124442484-0f0aa8366046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU3MHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image10Alt: {
      type: String,
      default: 'Creative studio space',
    },
    image4Alt: {
      type: String,
      default: 'Photography collection',
    },
    heading1: {
      type: String,
      default: 'Unleash Your Creativity with Artistry Hub',
    },
    content1: {
      type: String,
      default:
        'Discover a world of artistic inspiration and creativity at Artistry Hub. Explore a diverse range of artworks, connect with talented artists, and find the perfect piece to enhance your space.',
    },
    image10Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1547146680-006a0ef94b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU3MHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image9Alt: {
      type: String,
      default: 'Art gallery exhibition',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1561138328-cb6032563277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.hero-header78 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero-column {
  gap: var(--dl-space-space-oneandhalfunits);
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
 
.hero-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.hero-text1 {
  text-align: center;
}
 
.hero-text2 {
  text-align: center;
}
 
.hero-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
}
 
.hero-content2 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
 
.hero-row-container1 {
  width: 100%;
}
 
.hero-placeholder-image10 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image11 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image12 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image13 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image14 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image15 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image16 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image17 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image18 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image19 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image20 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image21 {
  width: 400px;
  height: 400px;
}
 
.hero-row-container2 {
  width: 100%;
}
 
.hero-placeholder-image22 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image23 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image24 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image25 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image26 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image27 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image28 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image29 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image30 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image31 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image32 {
  width: 400px;
  height: 400px;
}
 
.hero-placeholder-image33 {
  width: 400px;
  height: 400px;
}
 
.hero-container2 {
  display: contents;
}
 
@media(max-width: 767px) {
  .hero-content2 {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .hero-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero-button1 {
    width: 100%;
  }
  .hero-button2 {
    width: 100%;
  }
}
</style>
