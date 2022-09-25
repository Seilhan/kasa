import { useState } from 'react'
import ArrowCarousselR from '../Icons/ArrowCarousselR'
import ArrowCarousselL from '../Icons/ArrowCarousselL'
import './style.css'

/**
 * Il affiche une image, et lorsque vous cliquez sur la flèche gauche ou droite, il affiche l'image
 * précédente ou suivante dans le tableau d'images
 * @returns Un composant qui affiche une image et deux boutons pour naviguer dans les images.
 */
function Caroussel(props) {
  const URL = props.pictures ? props.pictures : []

  const [imageIdx, setImageIdx] = useState(0)
  const [image, setImage] = useState(URL[0])

  /**
   * La fonction définit l'image suivante dans le tableau d'images à afficher
   */
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

  /**
   * La fonction définit l'index d'image sur l'index d'image précédent, puis définit l'image sur l'URL
   * de l'index d'image
   */
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

  /* Renvoi d'un élément JSX. */
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
          <p className="counter-nb">
            {imageIdx}/{URL.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Caroussel
