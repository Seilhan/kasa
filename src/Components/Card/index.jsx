import { Link } from 'react-router-dom'
import './style.css'

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
