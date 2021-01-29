import React from 'react'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'

function NewsBio() {
  const [isClosed, setIsClosed] = React.useState(true)

  const handleMenuToggle = () => {
    setIsClosed(!isClosed)
    console.log(isClosed)
  }

  return (
    <div className="main">
      <div className="header">
        <div className="head-s-one">
          <div className="fa fa-bars" onClick={handleMenuToggle}></div>
        </div>
        <div className="head-s-two">
          <Link to="/new-work" style={{ textDecoration: 'none', color: 'black' }}>
            <p className="title-name">PUFF MORGAN-GILES</p>
          </Link>
        </div>
        <div className="head-s-one"></div>
      </div>
      {isClosed ?
        <div></div>
        :
        <div className="main-photo-burger">
          <div className="burger-menu">
            <Link onClick={handleMenuToggle} to="/new-work" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="burger-item">NEW WORK</div>
            </Link>
            <Link onClick={handleMenuToggle} to="/portraits" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="burger-item">PORTRAITS</div>
            </Link>
            <Link onClick={handleMenuToggle} to="/sketches" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="burger-item">SKETCHES</div>
            </Link>
            <Link onClick={handleMenuToggle} to="/news-bio" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="burger-item">NEWS&BIOGRAPHY</div>
            </Link>
          </div>
        </div>
      }
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
            <p>If youre visiting this page, youre likely here because youre searching for a random sentence. Sometimes a random word just isnt enough, and that is where the random sentence generator</p>
            <p>If youre visiting this page, youre likely here because youre searching for a random sentence. Sometimes a random word just isnt enough, and that is where the random sentence generator</p>
            <p>If youre visiting this page, youre likely here because youre searching for a random sentence. Sometimes a random word just isnt enough, and that is where the random sentence generator</p>
          </div>
          <div className="bio-section-two-three">
            <div className="small-title">Biography</div>
            <p>If youre visiting this page, youre likely here because</p>
            <p>If youre visiting this page, youre likely here because</p>
            <p>If youre visiting this page, youre likely here because</p>
          </div>
          <div className="bio-section-two-three">
            <div className="small-title">Exhibitions</div>
            <p>If youre visiting this page, youre likely here because</p>
            <p>If youre visiting this page, youre likely here because</p>
            <p>If youre visiting this page, youre likely here because</p>
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

