import PhotoHead from '../Components/PhotoHead'
import HomeHeader from '../assets/home-header.jpg'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import { getDatas } from '../api'

/* Une fonction qui renvoie une div avec un PhotoHead et une div avec une Card. */
function Home() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(getDatas())
  }, [])

  return (
    <div className="home-content">
      <PhotoHead img={HomeHeader} title="Chez vous, partout et ailleurs" />
      <div className="home-cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            img={card.cover}
            url={`/product/${card.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
