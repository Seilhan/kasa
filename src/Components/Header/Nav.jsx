import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

/**
 * Il renvoie un élément de navigation avec deux liens, un vers la page d'accueil et un vers la page à
 * propos
 * @returns Un élément de navigation avec deux liens.
 */
function Nav() {
  return (
    <nav className="NavHeader">
      <Link to="/">Acceuil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  )
}

export default Nav
