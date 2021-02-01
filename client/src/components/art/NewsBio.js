import React from 'react'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'

function NewsBio() {
  const [isClosed, setIsClosed] = React.useState(true)

  const handleMenuToggle = () => {
    setIsClosed(!isClosed)
  }

  return (
    <div className="main">
      <div className="header">
        <div className="head-s-one">
          <div className="fa fa-bars" onClick={handleMenuToggle}></div>
        </div>
        <Header />
      </div>
      {isClosed ?
        <div></div>
        :
        <div className="main-photo-burger">
          <div className="burger-menu">
            <Link onClick={handleMenuToggle} to="/new-work" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="burger-item">NEW WORK</div>
            </Link>
            <Link onClick={handleMenuToggle} to="/previous-work" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="burger-item">PAST WORK</div>
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
          <img className="bio-photo"
            src="http://localhost:8000/media/images/Bio-image.jpg"
          />
        </div>
        <div className="bio-info-container">
          <div className="bio-section-one">
            <div className="p-c-title">News & Biography</div>
            <p>Puff has painted all her life, she studied at Chelsea School of Art and Winchester School of Art.</p>
            <p>More recently she has done a class with Jamie Rowtley and Nicholas Beere working with oils at Sarum Studio.</p>
            <p>She is currently working as a teacher giving online classes for ??????? and splits her time between her teaching and her own work.</p>
          </div>
          <div className="bio-section-two-three">
            <div className="small-title">Biography</div>
            <p>Chelsea School of Art</p>
            <p>Winchester School of Art</p>
            <p>Blazingrad degree</p>
          </div>
          <div className="bio-section-two-three">
            <div className="small-title">Exhibitions</div>
            <p>Josie Eastwood Fine Art</p>
            <p>Private Exhibitions</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NewsBio

