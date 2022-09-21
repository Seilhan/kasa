import { useState } from 'react'
import ArrowCarousselD from '../Icons/ArrowCarousselD'
import ArrowCarousselL from '../Icons/ArrowCarousselL'
import './style.css'

function Caroussel(props) {
  const URL = props.pictures ? props.pictures : []

  const [image, setImage] = useState(URL[0])

  return (
    <div className="caroussel-container">
      <img className="caroussel-img" src={image} alt="cover" />
      <div className="caroussel-action">
        <div className="caroussel-arrow">
          <ArrowCarousselL />
          <ArrowCarousselD />
        </div>
      </div>
    </div>
  )
}

export default Caroussel
