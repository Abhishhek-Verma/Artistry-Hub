import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features1-container2 thq-section-max-width">
          <div className="features1-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features1-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features1-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features1-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features1-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features1-tab-horizontal1"
            >
              <div className="features1-divider-container1">
                {activeTab === 0 && (
                  <div className="features1-container3"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features1-tab-horizontal2"
            >
              <div className="features1-divider-container2">
                {activeTab === 1 && (
                  <div className="features1-container4"></div>
                )}
              </div>
              <div className="features1-content2">
                <h2 className="thq-heading-2">{props.feature2Title}</h2>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features1-tab-horizontal3"
            >
              <div className="features1-divider-container3">
                {activeTab === 2 && (
                  <div className="features1-container5"></div>
                )}
              </div>
              <div className="features1-content3">
                <h2 className="thq-heading-2">{props.feature3Title}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
          @media (max-width: 991px) {
            .features1-container2 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  feature1ImgAlt: 'Artwork showcasing creativity',
  feature3Description: 'Connect with other artists and collaborate on projects',
  feature3Title: 'Collaboration Opportunities',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1724709166619-53c3a8621487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1701970655370-0d6c1cada73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: 'Discover new techniques and trends in the art world',
  feature1Title: 'Inspiring Artistic Creations',
  feature3ImgAlt: 'Artists collaborating on a project',
  feature1Description:
    'Explore a diverse range of artistic creations from talented individuals',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1663660653588-57dd5d55d155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Artistic tools and materials',
  feature2Title: 'Artistic Trends and Techniques',
}

Features1.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features1
