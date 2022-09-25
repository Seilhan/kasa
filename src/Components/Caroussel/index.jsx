import { useState } from 'react'
import ArrowCarousselR from '../Icons/ArrowCarousselR'
import ArrowCarousselL from '../Icons/ArrowCarousselL'
import './style.css'

function Caroussel(props) {
  const URL = props.pictures ? props.pictures : []

  const [imageIdx, setImageIdx] = useState(0)
  const [image, setImage] = useState(URL[0])

  function setNextImage() {
    setImageIdx(imageIdx + 1)
    setImage(URL[imageIdx])

    let idx = imageIdx + 1
    if (idx >= URL.length) {
      idx = 0
      setImageIdx(idx)
      setImage(URL[imageIdx])
    }
  }

  function setPrevImage() {
    setImageIdx(imageIdx - 1)
    setImage(URL[imageIdx])

    let idx = imageIdx - 1
    if (idx < 0) {
      idx = URL.length - 1
      setImageIdx(idx)
      setImage(URL[imageIdx])
    }
  }

  return (
    <div className="caroussel-container">
      <img className="caroussel-img" src={image} alt="cover" />
      <div className="caroussel-action">
        <div className="caroussel-arrow">
          <button onClick={setPrevImage}>
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
