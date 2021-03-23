import React from 'react'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'
import { getAllPictures } from '../../lib/api'
import Header from '../common/Header'
import Footer from '../common/Footer'

function NewsBio() {
  const [isClosed, setIsClosed] = React.useState(true)
  const [newWork, setNewWork] = React.useState(null)

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

  const bioPictures = newWork ? newWork.filter(picture => {
    let i
    for (i = 0; i < picture.types.length;) {
      if (picture.types[i] === 6) {
        return picture
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
      <div className="nav-bar-container">
        <Nav />
      </div>
      <div className="bio-main">
        {newWork && bioPictures.map(picture => (
          <div key={picture.id} className="bio-photo-container">
            <img className="bio-photo"
              src={picture.image}
            /> 
          </div>
        ))}
        <div className="bio-info-container">
          <div className="bio-section-one">
            <div className="p-c-title">News & Biography</div>
            <p>Puff has painted all her life, she studied at Chelsea School of Art and Winchester School of Art,</p>
            <p>also with Jamie Rowtley and Nicholas Beere.</p>
            <p>She is currently teaching foundation at <a href='https://www.collegearts.co.uk/'>College Arts Hampshire</a>, and divides her time between her teaching and her own work.</p>
          </div>
          <div className="bio-section-two-three">
            <div className="small-title">Biography</div>
            <p>Chelsea School of Art</p>
            <p>Winchester School of Art</p>
            <p>2017 - Present: Teaching Foundation at College Arts, Hampshire</p>
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

