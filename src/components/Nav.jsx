import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Nav() {
  return (
    <div className="nav-bar">
          <p>PrivateContact</p>
          <div className='Links'>
            <Link to="/">
              Home
            </Link>
            <Link to="/favourite">
              Favourite
            </Link>
          </div>
      </div>
  )
}

export default Nav