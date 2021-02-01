import React from 'react'
import { useHistory } from 'react-router-dom'
import { createForm } from '../../lib/api'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'

function EnquireForm() {
  const history = useHistory()
  const [isClosed, setIsClosed] = React.useState(true)
  // const [isError, setErrors] = React.useState(false)

  const [formdata, setFormdata] = React.useState({
    full_name: '',
    email: '',
    phone_number: '',
    enquiring_about: '',
    message: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await createForm(formdata)
      console.log(data)
      history.push('/new-work/')
    } catch (err) {
      // setErrors(err.response.data.errors)
      console.log(err)
    }
  }

  const handleChange = event => {
    const value = event.target.value
    setFormdata({ ...formdata, [event.target.name]: value })
    // setIsError(false)
  }

  const handleMenuToggle = () => {
    setIsClosed(!isClosed)
  }


  return (
    <section className="base-container">
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
        <div className="main-photo-burger-form">
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
      <div className="form-header">Enquirey Form</div>
      <div className="form-content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Full Name"
                onChange={handleChange}
                name="full_name"
                value={formdata.full_name}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formdata.email}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Phone Number"
                onChange={handleChange}
                name="phone_number"
                value={formdata.phone_number}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Enquiring About"
                onChange={handleChange}
                name="enquiring_about"
                value={formdata.enquiring_about}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              <textarea
                className="text-area"
                placeholder="Message"
                onChange={handleChange}
                name="message"
                value={formdata.message}
              />
            </label>
          </div>
          <div className="form-footer">
            <button type="submit" className="button">Send Form</button>
          </div>
        </form>
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
    </section>
  )
}

export default EnquireForm