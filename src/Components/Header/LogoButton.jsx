import IconLogo from '../Icons/Logo'
import { Link } from 'react-router-dom'

/**
 * Il renvoie un lien vers la page d'accueil avec l'icône du logo à l'intérieur
 * @returns Un lien vers la page d'accueil avec l'icône du logo.
 */
function LogoButton() {
  return (
    <Link to="/" className="header-logo">
      <IconLogo />
    </Link>
  )
}

export default LogoButton
