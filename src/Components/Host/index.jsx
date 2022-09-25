import './style.css'

/**
 * Il prend un accessoire appelé data, qui est un objet avec deux propriétés : name et picture. Il
 * divise ensuite le nom en un tableau de deux chaînes et renvoie un div avec un paragraphe et une
 * image
 * @returns Un div avec un p et un img
 */
function Host(props) {
  const { name, picture } = props.data
  const fullname = name.split(' ')
  return (
    <div className="host-container">
      <p className="host-name">
        {fullname[0]}
        <br />
        {fullname[1]}
      </p>
      <img className="hots-picture" src={picture} alt="" />
    </div>
  )
}

export default Host
