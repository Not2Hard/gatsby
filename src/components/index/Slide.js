import React from "react"
import { Link } from './node_modules/gatsby-image'

import { StyleImg, WbnSlide, SliderWrapper } from './styles/HeroSliderStyles'

const Slide = ({ slide, active }) => (
    <WbnSlide className={active ? 'active' : ''}>
        <StyleImg fluid={slide.featured_media.localFile.chilsImageSharp.fluid}/>
        <div className="wbn-overlay-text">
            <h1 className="wbn-header">{slide.acf.slider_header}</h1>
            <p className="wbn-text">{slide.acf.slider_text}</p>
            <Link to={slide.acf.slider_button_link}>
                <button type="button">{slide.acf.slider_button_text}</button>
            </Link>
        </div>
    </WbnSlide>
)
export default Slide;