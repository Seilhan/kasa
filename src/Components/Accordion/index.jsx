import { useState } from 'react'
import Arrow from '../Icons/Arrow'
import './style.css'

/**
 * La fonction prend un titre et une description comme accessoires, et renvoie un bouton avec le titre
 * et une description qui est masqué jusqu'à ce que le bouton soit cliqué
 * @returns Un composant React qui rend un bouton et un div.
 */
function Drop(props) {
  const [hide, setHide] = useState(false)
  const styleClass = `collapse-container ${hide ? 'hide' : ''}`

  /**
   * Il bascule l'état de masquage.
   */
  function togleCollapse() {
    setHide(!hide)
  }

  return (
    <div className={styleClass}>
      <button onClick={togleCollapse} className="collapse-button">
        <span>{props.title}</span>
        <span className="collapse-arrow">
          <Arrow />
        </span>
      </button>
      <div className="collapse-description">{props.description}</div>
    </div>
  )
}

export default Drop
