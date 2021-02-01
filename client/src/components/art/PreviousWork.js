import React from 'react'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'
import { getAllPictures } from '../../lib/api'
import Header from '../common/Header'
import Footer from '../common/Footer'

function PreviousWork() {
  const [previousWork, setPreviousWork] = React.useState(null)
  const [isClosed, setIsClosed] = React.useState(true)
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllPictures()
        setPreviousWork(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleMenuToggle = () => {
    setIsClosed(!isClosed)
  }

  const filteredPictures = previousWork ? previousWork.filter(sketch => {
    let i
    for (i = 0; i < sketch.types.length; i++) {
      if (sketch.types[i] === 4) {
        return sketch
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
      <div className="container">
        <div className="picture-content">
          <div className="p-c-title">Past Work</div>
          <div className="main-picture-content">
            {filteredPictures && filteredPictures.map(picture => (
              <div key={picture.id} className="picture-card-container">
                <Link to={`/pictures/${picture.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="image-container">
                    <img src={`http://localhost:8000${picture.image}`} className="images"></img>
                  </div>
                  <div className="picture-card-text">
                    <div className="picture-card-text-name">{picture.name}</div>
                    <div className="picture-card-text-style">{picture.size}</div>
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

export default PreviousWork