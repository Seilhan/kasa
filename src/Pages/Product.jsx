import { useParams } from 'react-router-dom'
import { getIdProduct } from '../api'
import PictureProduct from '../Components/PictureProducts'
import Tag from '../Components/Tag'
import Rate from '../Components/Rate'
import Host from '../Components/Host'

function Product() {
  const { id } = useParams()
  const product = getIdProduct(id)

  console.log(product)

  return (
    <div>
      <PictureProduct pictures={product.pictures} />
      <div className="info-product">
        <div>
          <h1 className="title-product">{product.title}</h1>
          <p className="location-product">{product.location}</p>
          <div className="tagsProduts">
            {product.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>
        <div>
          <Host data={product.host} />
          <Rate nb={product.rating} />
        </div>
      </div>
    </div>
  )
}

export default Product
