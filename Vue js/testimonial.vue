<template>
  <div class="thq-section-padding">
    <div class="testimonial-max-width thq-section-max-width">
      <div class="testimonial-container10">
        <h2 class="thq-heading-2">{{ heading1 }}</h2>
        <span class="testimonial-text11 thq-body-small">{{ content1 }}</span>
      </div>
      <div class="thq-grid-2">
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card1">
              <div class="testimonial-container12">
                <img
                  :alt="author1Alt"
                  :src="author1Src"
                  class="testimonial-image1"
                />
                <div class="testimonial-container13">
                  <strong class="thq-body-large">{{ author1Name }}</strong>
                  <span class="thq-body-small">{{ author1Position }}</span>
                </div>
              </div>
              <span class="testimonial-text14 thq-body-small">{{ review1 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card2">
              <div class="testimonial-container14">
                <img
                  :alt="author2Alt"
                  :src="author2Src"
                  class="testimonial-image2"
                />
                <div class="testimonial-container15">
                  <strong class="thq-body-large">{{ author2Name }}</strong>
                  <span class="thq-body-small">{{ author2Position }}</span>
                </div>
              </div>
              <span class="testimonial-text17 thq-body-small">{{ review2 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card3">
              <div class="testimonial-container16">
                <img
                  :alt="author3Alt"
                  :src="author3Src"
                  class="testimonial-image3"
                />
                <div class="testimonial-container17">
                  <strong class="thq-body-large">{{ author3Name }}</strong>
                  <span class="thq-body-small">{{ author3Position }}</span>
                </div>
              </div>
              <span class="testimonial-text20 thq-body-small">{{ review3 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card4">
              <div class="testimonial-container18">
                <img
                  :alt="author4Alt"
                  :src="author4Src"
                  class="testimonial-image4"
                />
                <div class="testimonial-container19">
                  <strong class="thq-body-large">{{ author4Name }}</strong>
                  <span class="thq-body-small">{{ author4Position }}</span>
                </div>
              </div>
              <span class="testimonial-text23 thq-body-small">{{ review4 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    author2Position: {
      type: String,
      default: 'Painter',
    },
    author1Position: {
      type: String,
      default: 'Graphic Designer',
    },
    author3Alt: {
      type: String,
      default: 'Image of Emily Chen',
    },
    author1Name: {
      type: String,
      default: 'Samantha Smith',
    },
    author1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1541525897844-9851970da95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author3Name: {
      type: String,
      default: 'Emily Chen',
    },
    review2: {
      type: String,
      default:
        'As a painter, I was looking for a place to share my passion for art. Artistry Hub not only allows me to exhibit my paintings but also provides a space for inspiration and collaboration with other artists.',
    },
    author2Name: {
      type: String,
      default: 'Michael Johnson',
    },
    author4Position: {
      type: String,
      default: 'Illustrator',
    },
    author4Name: {
      type: String,
      default: 'David Rodriguez',
    },
    author4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1690040337678-e868ce9a6748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author1Alt: {
      type: String,
      default: 'Image of Samantha Smith',
    },
    author2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1503443062224-9f77d743cf25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author2Alt: {
      type: String,
      default: 'Image of Michael Johnson',
    },
    author4Alt: {
      type: String,
      default: 'Image of David Rodriguez',
    },
    content1: {
      type: String,
      default:
        'I have found a supportive community of fellow artists on Artistry Hub. The platform has helped me showcase my work and connect with potential clients.',
    },
    author3Position: {
      type: String,
      default: 'Photographer',
    },
    review1: {
      type: String,
      default:
        "Artistry Hub has been a game-changer for me. I've received valuable feedback on my artwork and even landed a few commissions through the platform.",
    },
    heading1: {
      type: String,
      default: 'Testimonials',
    },
    review3: {
      type: String,
      default:
        "Artistry Hub has given me the exposure I needed as a photographer. The community is vibrant, and I've had the opportunity to participate in various exhibitions and projects.",
    },
    review4: {
      type: String,
      default:
        "I can't thank Artistry Hub enough for the support and encouragement I've received here. It's a fantastic platform for artists to grow, learn, and showcase their talents.",
    },
  },
}
</script>

<style scoped>
.testimonial-max-width {
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.testimonial-container10 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: 600px;
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
 
.testimonial-text11 {
  text-align: center;
}
 
.testimonial-container12 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.testimonial-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
 
.testimonial-container13 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial-text14 {
  text-align: left;
}
 
.testimonial-container14 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.testimonial-image2 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
 
.testimonial-container15 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial-text17 {
  text-align: left;
}
 
.testimonial-container16 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.testimonial-image3 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
 
.testimonial-container17 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial-text20 {
  text-align: left;
}
 
.testimonial-container18 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.testimonial-image4 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
 
.testimonial-container19 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial-text23 {
  text-align: left;
}
 
@media(max-width: 991px) {
  .testimonial-container10 {
    margin-bottom: var(--dl-space-space-threeunits);
  }
}
 
@media(max-width: 767px) {
  .testimonial-container10 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .testimonial-card1 {
    width: 100%;
  }
  .testimonial-card2 {
    width: 100%;
  }
  .testimonial-card3 {
    width: 100%;
  }
  .testimonial-card4 {
    width: 100%;
  }
}
</style>
