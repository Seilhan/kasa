import './style.css'

/**
 * C'est une fonction qui renvoie un div avec une image de fond, une ombre et un texte
 * @returns Un div avec une classe head-cover et un style headerPhStyle.
 */
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
