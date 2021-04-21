import React from 'react'
import infoHero from '../../images/InfoSite/hero1.png'
import chevronDown from '../../images/icons/chevron-down.png'

const InfoSite = props => {
  const handleHover = e => {
    e.preventDefault()

    e.currentTarget.firstElementChild.classList.add('hovered-link-icon')
  }

  const handleUnhover = e => {
    e.preventDefault()

    e.currentTarget.firstElementChild.classList.remove('hovered-link-icon')
  }

  return (
    <div className="info-site">
      <div className="hero-container">
        <img src={infoHero} alt="animation of cityscape" className="hero-image" id="info-site-hero"/>
      </div>
      <h1 id="main-header">
        Invest in the future.<br/>
        <a
          href="#"
          id="down-arrow"
          onMouseEnter={e => handleHover(e)}
          onMouseLeave={e => handleUnhover(e)}
        >
          <img className="link-icon" src={chevronDown} alt="down icon"/>
        </a>
      </h1>
    </div>
  )
}

export default InfoSite