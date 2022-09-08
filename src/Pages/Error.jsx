import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error404">
      <p className="error">404</p>
      <p className="textInfo">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="text">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
