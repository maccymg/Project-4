import React from 'react'
import { useHistory } from 'react-router-dom'
import { createForm } from '../../lib/api'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'

function EnquireForm() {
  const history = useHistory()
  const [isClosed, setIsClosed] = React.useState(true)

  const [formdata, setFormdata] = React.useState({
    full_name: '',
    email: '',
    phone_number: '',
    enquiring_about: '',
    message: ''
  })

  const [errordata, setErrordata] = React.useState({
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
      history.push('/thank-you')
    } catch (err) {
      setErrordata(err.response.data)
    }
  }

  const handleChange = event => {
    const value = event.target.value
    setFormdata({ ...formdata, [event.target.name]: value })
    setErrordata('')
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
        <Header />
      </div>
      <div className="nav-bar-container">
        <Nav />
      </div>
      {isClosed ?
        <div></div>
        :
        <div className="main-photo-burger-form">
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
      <div className="form-header">Enquirey Form</div>
      <div className="form-content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Full name"
                onChange={handleChange}
                name="full_name"
                value={formdata.full_name}
              />
            </label>
            {errordata.full_name ?
              <div className="error-message">{`*${errordata.full_name}`}</div>
              :
              <div className="error-message"></div>
            }
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
            {errordata.email ?
              <div className="error-message">*{errordata.email}</div>
              :
              <div className="error-message"></div>
            }
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Phone number"
                onChange={handleChange}
                name="phone_number"
                value={formdata.phone_number}
              />
            </label>
            {errordata.phone_number ?
              <div className="error-message">*{errordata.phone_number}</div>
              :
              <div className="error-message"></div>
            }
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Enquiring about"
                onChange={handleChange}
                name="enquiring_about"
                value={formdata.enquiring_about}
              />
            </label>
            {errordata.enquiring_about ?
              <div className="error-message">*{errordata.enquiring_about}</div>
              :
              <div className="error-message"></div>
            }
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
            {errordata.message ?
              <div className="error-message">*{errordata.message}</div>
              :
              <div className="error-message"></div>
            }
          </div>
          <div className="form-footer">
            <button type="submit" className="button">Send Form</button>
          </div>
        </form>
        <Footer />
      </div>
    </section>
  )
}

export default EnquireForm