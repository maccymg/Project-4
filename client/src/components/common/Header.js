import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className="header">
      <div className="head-s-two">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <p className="title-name">PUFF MORGAN GILES</p>
        </Link>
      </div>
      <div className="head-s-one"></div>
    </div>
  )

}

export default Header