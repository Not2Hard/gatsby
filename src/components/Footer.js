import React from "react"
import tangoFB from '../images/tango-facebook-icon.svg'
import tangoIG from '../images/tango-instagram-icon.svg'
import tangoLI from '../images/tango-linkedin-icon.svg'

import { FooterWrapper } from './styles/FooterStyles'

const Footer = () => (
    
    <FooterWrapper>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="whiteText">contacts</h1>

                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h3>Anders</h3>
                    <p className="tango-contact">
                        <a href="mailto: anders@tangobrandalliance.se">
                        anders@tangobrandalliance.se
                        </a>
                    </p>
                    <p className="tango-contact">3333333</p>
                    <span className="social">
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.">
                            <img src={tangoLI} alt="tango-li"/>
                        </a>
                    </span>

                </div>
                <div className="col-md-4">
                    <h3>Anders</h3>
                    <p className="tango-contact">
                        <a href="mailto: anders@tangobrandalliance.se">
                        anders@tangobrandalliance.se
                        </a>
                    </p>
                    <p className="tango-contact">3333333</p>
                    <span className="social">
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.">
                            <img src={tangoFB} alt="tango-li"/>
                        </a>
                    </span>

                </div>
                <div className="col-md-4">
                    <h3>Anders</h3>
                    <p className="tango-contact">
                        <a href="mailto: anders@tangobrandalliance.se">
                        anders@tangobrandalliance.se
                        </a>
                    </p>
                    <p className="tango-contact">3333333</p>
                    <span className="social">
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.">
                            <img src={tangoIG} alt="tango-li"/>
                        </a>
                    </span>

                </div>
            </div>
            
        </div>

    </FooterWrapper>
)

export default Footer;
