import './style.css'

/**
 * Tag est une fonction qui prend un objet props et renvoie un div avec un nom de classe de tag et la
 * propriété label de l'objet props.
 * @returns Un composant React
 */
function Tag(props) {
  return <div className="tag">{props.label}</div>
}

export default Tag
