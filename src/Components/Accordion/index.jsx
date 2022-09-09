import { useState } from 'react'
import Arrow from '../Icons/Arrow'
import './style.css'

function Drop(props) {
  const [hide, setHide] = useState(false)
  const styleClass = `collapse-container ${hide ? 'hide' : ''}`

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
