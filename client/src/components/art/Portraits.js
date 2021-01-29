import React from 'react'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'
import { getAllPictures } from '../../lib/api'

function Portraits() {
  const [newPortraits, setNewPortraits] = React.useState(null)
  const [isClosed, setIsClosed] = React.useState(true)
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllPictures()
        setNewPortraits(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleMenuToggle = () => {
    setIsClosed(!isClosed)
  }

  const filteredPictures = newPortraits ? newPortraits.filter(sketch => {
    let i
    for (i = 0; i < sketch.types.length; i++) {
      if (sketch.types[i] === 2) {
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
        <div className="head-s-two">
          <Link to="/new-work" style={{ textDecoration: 'none', color: 'black' }}>
            <p className="title-name">PUFF MORGAN-GILES</p>
          </Link>
        </div>
        <div className="head-s-one"></div>
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
          <div className="p-c-title">Portraits</div>
          <div className="main-picture-content">
            {filteredPictures && filteredPictures.map(picture => (
              <div key={picture.id} className="picture-card-container">
                <div className="image-container">
                  <img src={`http://localhost:8000${picture.image}`} className="images"></img>
                </div>
                <div className="picture-card-text">
                  <div className="picture-card-text-name">{picture.name}</div>
                  <div className="picture-card-text-style">{picture.size}</div>
                  <div className="picture-card-text-price">{picture.status}</div>
                </div>
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

export default Portraits