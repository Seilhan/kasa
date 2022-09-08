import './style.css'

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
