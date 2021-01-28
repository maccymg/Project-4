import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <div className="nav-bar-main">
      <Link to="/new-work" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="nav-bar-item">NEW WORK</div>
      </Link>
      <Link to="/portraits" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="nav-bar-item">PORTRAITS</div>
      </Link>
      <Link to="/sketches" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="nav-bar-item">SKETCHES</div>
      </Link>
      <Link to="/news-bio" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="last-nav-bar-item">NEWS&BIOGRAPHY</div>
      </Link>
    </div>
  )

}

export default Nav