import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const arr = [1, 2, 3, 4, 5, 6]

const Home = () => {
  const [cards, setCreditCards] = useState({})

  //let navigate = useNavigate()

  useEffect(() => {
    console.log('hello')
    async function getCreditCards() {
      console.log('hello')
      const res = await axios.get(`/api/creditcards/62e0b391406736594b044361`)
      console.log(res)
      setCreditCards(res.data.card)
    }
    getCreditCards()
  }, [])


  return (
    <div className="home">
      <div>
        <div>{cards.name}</div>
        <div>{cards.bank}, {cards.category}</div>
        <div>{cards.description}</div>
        <img src={cards.image}></img>
      </div>
      {/* <div className="theme-box">
        {cards.map((card, i) => (
          <div>
            <h1>{card.name}</h1>
            <img src={card.image} alt="" />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Home
