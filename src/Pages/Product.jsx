import { useParams } from 'react-router-dom'
import { getIdProduct } from '../api'
import Caroussel from '../Components/Caroussel'
import Tag from '../Components/Tag'
import Rate from '../Components/Rate'
import Host from '../Components/Host'
import Drop from '../Components/Accordion'

function Product() {
  const { id } = useParams()
  const product = getIdProduct(id)

  return (
    <div>
      <Caroussel pictures={product.pictures} />
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
      <div className="product-collapes">
        <Drop title="Description" description={product.description} />
        <Drop
          title="Équipements"
          description={product.equipments.map((eq, index) => (
            <p key={index}>{eq}</p>
          ))}
        />
      </div>
    </div>
  )
}

export default Product
