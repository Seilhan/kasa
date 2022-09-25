import { Link } from 'react-router-dom'
import './style.css'

/**
 * Il crée une carte avec une image de fond et un titre.
 * @returns Un composant Link avec un className de Card et un style de bgImage.
 */
function Card(props) {
  const bgImage = {
    backgroundImage: `url(${props.img})`,
  }
  const URL = props.url ? props.url : '#null'
  return (
    <Link to={URL} className="Card" style={bgImage}>
      <div className="card-gradient">{props.title}</div>
    </Link>
  )
}

export default Card
