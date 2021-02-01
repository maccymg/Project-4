import React from 'react'
import Nav from '../common/Nav'
import { getAllPictures } from '../../lib/api'
import { Link } from 'react-router-dom'
import HeroCarousel from 'react-hero-carousel'


function NewWork() {
  const [newWork, setNewWork] = React.useState(null)
  const [isClosed, setIsClosed] = React.useState(true)
  
  
  const handleMenuToggle = () => {
    setIsClosed(!isClosed)
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllPictures()
        setNewWork(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

  }, [])

  const filteredPictures = newWork ? newWork.filter(picture => {
    let i
    for (i = 0; i < picture.types.length; i++) {
      if (picture.types[i] === 1) {
        return picture
      } else {
        return
      }
    }
  }) : null



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
        <div className="head-s-one">
        </div>
      </div>
      <div className="nav-bar-container">
        <Nav />
      </div>
      <div className="container">
        <div className="main-photo">
          {isClosed ?
            <div className="main-photo-container">
              <HeroCarousel interval={4000}>
                <img className="carousel-image"
                  src="http://localhost:8000/media/images/IMG_1810.jpg"
                />
                <img className="carousel-image"
                  src="http://localhost:8000/media/images/IMG_8148.jpg"
                />
                <img className="carousel-image"
                  src="http://localhost:8000/media/images/IMG_8471.jpg"
                />
                <img className="carousel-image"
                  src="http://localhost:8000/media/images/IMG_8558.jpg"
                />
              </HeroCarousel>
            </div>
            :
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
          }
        </div>
        <div className="picture-content">
          <div className="n-w-title">New Work</div>
          <div className="main-picture-content">
            {filteredPictures && filteredPictures.map(picture => (
              <div key={picture.id} className="picture-card-container">
                <Link to={`/pictures/${picture.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="image-container">
                    <img src={`http://localhost:8000${picture.image}`} className="images"></img>
                  </div>
                  <div className="picture-card-text">
                    <div className="picture-card-text-name">{picture.name}</div>
                    <div className="picture-card-text-style">{`${picture.style}, ${picture.size}`}</div>
                    <div className="picture-card-text-price">{picture.status}</div>
                  </div>
                </Link>
              </div>
            ))}
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
    </div>
  )
}

export default NewWork