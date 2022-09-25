import './style.css'
import Logo from './LogoButton'
import Nav from './Nav'

/**
 * Header est une fonction qui renvoie un div avec un Logo et un Nav.
 * @returns Un div avec le className de Header, qui contient les composants Logo et Nav.
 */
function Header() {
  return (
    <div className="Header">
      <Logo />
      <Nav />
    </div>
  )
}

export default Header
