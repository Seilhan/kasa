import Drop from '../Components/Accordion'
import PhotoHead from '../Components/PhotoHead'
import AboutCover from '../assets/about-cover.jpg'

function About() {
  return (
    <div>
      <PhotoHead img={AboutCover} />
      <Drop title="Fiabilité" />
      <Drop title="Respect" />
      <Drop title="Service" />
      <Drop title="Responsabilité" />
    </div>
  )
}

export default About
