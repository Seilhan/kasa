import './style.css'
import IconLogo from '../Icons/Logo'

/**
 * La fonction Footer renvoie un div avec un className de "Footer" qui contient un div avec un
 * className de "LogoFooter" qui contient la fonction IconLogo, et une balise p avec un className de
 * "TextFooter" qui contient le texte "© 2020 Kasa. Tous droits réservés"
 * @returns Le composant Footer est renvoyé.
 */
function Footer() {
  return (
    <div className="Footer">
      <div className="LogoFooter">
        <IconLogo />
      </div>
      <p className="TextFooter">© 2020 Kasa. Tous droits réservés</p>
    </div>
  )
}

export default Footer
