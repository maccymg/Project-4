import React from 'react'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'
import { getAllPictures } from '../../lib/api'
import Header from '../common/Header'
import Footer from '../common/Footer'

function Sketches() {
  const [newSketches, setNewSketches] = React.useState(null)
  const [isClosed, setIsClosed] = React.useState(true)
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllPictures()
        setNewSketches(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const filteredPictures = newSketches ? newSketches.filter(sketch => {
    let i
    for (i = 0; i < sketch.types.length;) {
      if (sketch.types[i] === 3) {
        return sketch
      } else {
        i++
      }
    }
  }) : null


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
      <div className="container">
        <div className="picture-content">
          <div className="p-c-title">Sketches</div>
          <div className="main-picture-content">
            {filteredPictures && filteredPictures.map(picture => (
              <div key={picture.id} className="picture-card-container">
                <div className="image-container">
                  <img src={picture.image} className="images"></img>
                </div>
                <div className="picture-card-text">
                  <div className="picture-card-text-name">{picture.name}</div>
                  <div className="picture-card-text-style">{picture.style}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Sketches