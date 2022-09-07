import IconLogo from '../Icons/Logo'
import { Link } from 'react-router-dom'

function LogoButton() {
  return (
    <Link to="/" className="header-logo">
      <IconLogo />
    </Link>
  )
}

export default LogoButton
