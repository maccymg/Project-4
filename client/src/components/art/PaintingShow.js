import React from 'react'
import { getSinglePicture } from '../../lib/api'
import { useParams, Link } from 'react-router-dom'
import Nav from '../common/Nav'
import Header from '../common/Header'
import Footer from '../common/Footer'

function PaintingShow() {
  const [painting, setPainting] = React.useState(null)
  const { id } = useParams()
  const [isClosed, setIsClosed] = React.useState(true)
  const [hasPrice, setHasPrice] = React.useState(false)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSinglePicture(id)
        setPainting(data)
        if (data.status.includes('£')) {
          setHasPrice(true)
        } else {
          return
        }
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

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
            {hasPrice ?
              <div className="p-show-section-three">
                <div>{painting.status}</div>
                <Link to="/enquire-form" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="p-show-enquire">Enquire about this work</div>
                </Link>
              </div>
              :
              <div className="no-price"></div>
            }
          </div>
        </div>
        :
        <div>Loading ...</div>
      }
      <Footer />
    </div>
  )
}

export default PaintingShow