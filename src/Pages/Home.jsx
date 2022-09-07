import PhotoHead from '../Components/PhotoHead'
import HomeHeader from '../assets/home-header.jpg'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import { getDatas } from '../api'

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
            url={`/products/${card.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
