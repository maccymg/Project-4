import React from 'react'
import Nav from '../common/Nav'
import { getAllPictures } from '../../lib/api'
import { Link } from 'react-router-dom'
import HeroCarousel from 'react-hero-carousel'
import Header from '../common/Header'
import Footer from '../common/Footer'


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
    for (i = 0; i < picture.types.length;) {
      if (picture.types[i] === 1) {
        return picture
      } else {
        i++
      }
    }
  }) : null

  const carouselPictures = newWork ? newWork.filter(photo => {
    let i
    for (i = 0; i < photo.types.length;) {
      if (photo.types[i] === 5) {
        return photo
      } else {
        i++
      }
    }
  }) : null





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
      <div className="container">
        <div className="main-photo">
          {isClosed ?
            <div className="main-photo-container">
              {carouselPictures && carouselPictures.map(photo => (
                console.log(photo)
              ))}
              {carouselPictures ?
                <HeroCarousel interval={4000}>
                  <img className="carousel-image"
                    src={carouselPictures[0].image}
                  />
                  <img className="carousel-image"
                    src={carouselPictures[1].image}
                  />
                  <img className="carousel-image"
                    src={carouselPictures[2].image}
                  />
                  <img className="carousel-image"
                    src={carouselPictures[3].image}
                  />
                  <img className="carousel-image"
                    src={carouselPictures[4].image}
                  />
                </HeroCarousel>
                :
                <div></div>
              }
            </div>
            :
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
          }
        </div>
        <div className="picture-content">
          <div className="n-w-title">New Work</div>
          <div className="main-picture-content">
            {newWork && filteredPictures.map(picture => (
              <div key={picture.id} className="picture-card-container">
                <Link to={`/pictures/${picture.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="image-container">
                    <img src={picture.image} className="images"></img>
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
        <Footer />
      </div>
    </div>
  )
}

export default NewWork