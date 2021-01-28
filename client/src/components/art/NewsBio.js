import React from 'react'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'

function NewsBio() {
  return (
    <div className="main">
      <div className="header">
        <Link to="/new-work" style={{ textDecoration: 'none', color: 'black' }}>
          <p className="title-name">PUFF MORGAN-GILES</p>
        </Link>
      </div>
      <div className="nav-bar-container">
        <Nav />
      </div>
      <div className="bio-main">
        <div className="bio-photo-container">
          <div className="bio-photo"></div>
        </div>
        <div className="bio-info-container">
          <div className="bio-section-one">
            <div className="p-c-title">News & Biography</div>
            <p></p>
          </div>
          <div className="bio-section-two">
            
          </div>
          <div className="bio-section-three">
            
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-icons">
          <div className="fa fa-facebook icon"></div>
          <div className="fa fa-twitter icon"></div>
          <div className="fa fa-instagram icon"></div>
        </div>
        <div className="footer-copyright">
          <p className="copyright">© Copyright 2021 Puff Morgan-Giles Art. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default NewsBio

