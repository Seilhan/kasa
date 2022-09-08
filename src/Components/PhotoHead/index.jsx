import './style.css'

function CoverHome(props) {
  const headerPhStyle = { backgroundImage: `url(${props.img})` }
  return (
    <div className="head-cover" style={headerPhStyle}>
      <div className="head-shadow"></div>
      <span className="head-text">{props.title}</span>
    </div>
  )
}

export default CoverHome
