import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Nav() {
  return (
    <nav className="NavHeader">
      <Link to="/src/Pages/Home.jsx">Acceuil</Link>
      <Link to="/src/Pages/Home.jsx">A Propos</Link>
    </nav>
  )
}

export default Nav
