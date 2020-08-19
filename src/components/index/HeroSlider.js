import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { useInterval } from './styles/useInterval'

import Slide from './Slide'
import { SliderWrapper, ButtonWrapper, Button } from './styles/HeroSliderStyles'



const HeroSlider = () => {
  const {
    slides: { edges: slides },
  } = useStaticQuery(graphql`
  query slider {
    slides: allWordpressWpBildspel {
      edges {
        node {
          id
          featured_media {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 4000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              

            }
          }
          acf {
            slider_pre_header
            slider_header
            slider_text
            slider_button_text
            slider_button_link
          }
        }
      }
    }
  }
  
  `)
  console.log(slides)
  

  return ( 
    <div>Hero Slider</div> 
    );
}
 
export default HeroSlider;