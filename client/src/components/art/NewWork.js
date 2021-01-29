import React from 'react'
import Nav from '../common/Nav'
import { getAllPictures } from '../../lib/api'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'


function NewWork() {
  const [newWork, setNewWork] = React.useState(null)
  const [isOpen, setIsOpen] = React.useState(false)
  
  const showSettings = (event) => {
    event.preventDefault()
  }
  
  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
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



  
  // <img src={require('../../media/images/IMG_5762.jgp')} />
  return (
    <div className="main">
      <div className="header">
        <div className="head-s-one">
          <div className="fa fa-bars" onClick={handleMenuToggle}></div>
          {isOpen ?
            <Menu>
              <a className="menu-item" href="/new-work">New Work</a>
              <a className="menu-item" href="/portraits">Portraits</a>
              <a className="menu-item" href="/sketches">Sketches</a>
              <a className="menu-item" href="/news-bio">News&Biography</a>
              <a onClick={showSettings} href=""></a>
            </Menu>
            :
            <div></div>
          }
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
        </div>
        <div className="picture-content">
          <div className="p-c-title">New Work</div>
          <div className="main-picture-content">
            {newWork && newWork.map(picture => (
              <div key={picture.id} className="picture-card-container">
                <div className="image-container">
                  <img src={`http://localhost:8000${picture.image}`} className="images"></img>
                </div>
                <div className="picture-card-text">
                  <div className="picture-card-text-name">{picture.name}</div>
                  <div className="picture-card-text-style">{`${picture.style}, ${picture.size}`}</div>
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

export default NewWork