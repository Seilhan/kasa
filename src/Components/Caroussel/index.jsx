import { useState } from 'react'
import ArrowCarousselR from '../Icons/ArrowCarousselR'
import ArrowCarousselL from '../Icons/ArrowCarousselL'
import './style.css'

function Caroussel(props) {
  const URL = props.pictures ? props.pictures : []

  const [image, setImage] = useState(URL[0])

  function setNextImage() {
    setImage()
  }

  return (
    <div className="caroussel-container">
      <img className="caroussel-img" src={image} alt="cover" />
      <div className="caroussel-action">
        <div className="caroussel-arrow">
          <button onClick={setNextImage}>
            <ArrowCarousselL />
          </button>
          <button onClick={setNextImage}>
            <ArrowCarousselR />
          </button>
        </div>
        <div>
          <p className="counter-nb">1/4</p>
        </div>
      </div>
    </div>
  )
}

export default Caroussel
