import React from 'react'
import { getSinglePicture } from '../../lib/api'
import { useParams, Link } from 'react-router-dom'
import Nav from '../common/Nav'

function PaintingShow() {
  const [painting, setPainting] = React.useState(null)
  const { id } = useParams()
  const [isClosed, setIsClosed] = React.useState(true)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSinglePicture(id)
        setPainting(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

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
      {painting ?
        <div className="bio-main">
          <div className="bio-photo-container">
            <div className="bio-photo">
              <img src={`http://localhost:8000${painting.image}`} className="p-show-image"></img>
            </div>
          </div>
          <div className="p-show-info-container">
            <div className="p-show-section-one">
              <div>{painting.name}</div>
            </div>
            <div className="p-show-section-two">
              <div>{painting.style}</div>
              <div>{painting.size}</div>
            </div>
            <div className="p-show-section-three">
              <div>{painting.status}</div>
            </div>
          </div>
        </div>
        :
        <div>Somthing went wrong</div>
      }
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

export default PaintingShow