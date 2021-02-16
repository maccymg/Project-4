import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import { Link } from 'react-router-dom'


function ThankYou() {

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
      <div className="nav-bar-container">
        <Nav />
      </div>
      {isClosed ?
        <div></div>
        :
        <div className="main-photo-burger">
          <div className="burger-menu">
            <Link onClick={handleMenuToggle} to="/" style={{ textDecoration: 'none', color: 'black' }}>
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
      <div className="thank-you-container">
        <div className="thank-you-message">Thank you for your message,</div>
        <div className="thank-you-message">I will get back to you as soon as possible!</div>
      </div>
      <Footer />
    </div>
  )
}

export default ThankYou