import Star from '../Icons/Star'
import './style.css'

/* Une fonction qui prend un accessoire appelé nb et renvoie un div avec 5 étoiles. */
function Rate(props) {
  const nb = props.nb ? props.nb : 1
  return (
    <div className="rate">
      {new Array(5).fill('').map((star, index) => (
        <Star key={index} active={index + 1 <= nb ? true : false} />
      ))}
    </div>
  )
}

export default Rate
