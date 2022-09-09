import { useState } from 'react'
import './style.css'

function Caroussel(props) {
  const URL = props.pictures ? props.pictures : []

  const [image, setImage] = useState(URL[0])

  return (
    <div className="caroussel-container">
      <img className="caroussel-img" src={image} alt="" />
      <div className="caroussel-action">
        <div></div>
      </div>
    </div>
  )
}

export default Caroussel
