import React from 'react'
import Nav from '../common/Nav'
import { getAllPictures } from '../../lib/api'
import { Link } from 'react-router-dom'


function NewWork() {
  const [newWork, setNewWork] = React.useState(null)
  

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
        <Link to="/new-work" style={{ textDecoration: 'none', color: 'black' }}>
          <p>PUFF MORGAN-GILES</p>
        </Link>
      </div>
      <div className="nav-bar-container">
        <Nav />
      </div>
      <div className="container">
        <div className="main-photo">
        </div>
        <div className="picture-content">
          <div className="p-c-title"></div>
          <div className="main-picture-content">
            {newWork && newWork.map(picture => (
              <div key={picture.id} className="picture-card-container">
                <div className="image-container">
                  <img src={`http://localhost:8000${picture.image}`} className="images"></img>
                </div>
                <div className="picture-card-text">
                  <div className="picture-card-text-item">{picture.name}</div>
                  <div className="picture-card-text-item">{picture.size}</div>
                  <div className="picture-card-text-item">{picture.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewWork