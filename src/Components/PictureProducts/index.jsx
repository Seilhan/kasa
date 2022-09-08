import './style.css'

function PictureProduct(props) {
  const URL = props.pictures ? props.pictures : []

  return (
    <div className="cover-product">
      {URL.map((img, index) => (
        <img key={index} className="cover-img" src={img} alt="" />
      ))}
    </div>
  )
}

export default PictureProduct
