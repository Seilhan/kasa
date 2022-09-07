import './style.css'

function CoverHome(props) {
  const headerPhStyle = { backgroundImage: `url(${props.img})` }
  return (
    <div className="head-cover" style={headerPhStyle}>
      {props.title}
    </div>
  )
}

export default CoverHome
