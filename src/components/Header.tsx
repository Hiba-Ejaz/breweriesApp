import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/breweries">BREWERIES BY NAME</Link>
      </li>

    </ul>
  </nav>
  )
}

export default Header