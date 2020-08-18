import React from "react"
import PropTypes from 'prop-types'

import { HamburgerButton } from './styles/HamburgerStyles'
import HamburgerHart from '../images/tango_heart_hamburger.svg'

const Hamburger = ({ handleOverlayMenu }) => (
    <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
        <img src={HamburgerHart} alt="menu img"/>
    </HamburgerButton>
)
 
export default Hamburger;