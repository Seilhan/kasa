import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Nav() {
  return (
    <nav className="NavHeader">
      <Link to="/">Acceuil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  )
}

export default Nav
