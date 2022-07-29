import React from 'react'
import { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

//const arr = [1, 2, 3, 4, 5, 6]

const Home = () => {
  const [cards, setCreditCards] = useState({})

  //let navigate = useNavigate()

  useEffect(() => {
    console.log('hello')
    async function getCreditCards() {
      // console.log('hello')
      const res = await axios.get(`/api/creditcards`)
      console.log(res)
      setCreditCards(res.data.cards)
    }
    getCreditCards()
  }, [])

  // const showCard = (card) => {
  //   Navigate(`/creditcards/${card._id}`)
  // }

  return (
    <><div className="home">
      <div>
        {/* <div>{cards[0].name}</div>
        <div>{cards[0].bank}, {cards[0].category}</div>
        <div>{cards[0].description}</div>
        <img src={cards[0].image}></img> */}
        <form>
          <label htmlFor="issueType">Learn About:</label>
          <select id="issueType">
            <option value="blank"></option>
            <option value="banks">Banks</option>
            <option value="cards">Credit Cards</option>
          </select>
          {/* <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" />
          <label htmlFor="message">Message</label> */}
          {/* <textarea id="message" cols="30" rows="10"></textarea>
          <button type="submit">Send</button> */}
        </form>
        <div className="card-display-box">
          {cards.map((card, i) => (
          <div className="credit-card" key={i}>
            <h1>{card.name}</h1>
            <img src={card.image} alt="" />
            </div>
          ))}
          </div>
          </div>
      </div></>
  )
}

export default Home


      {/* <div className="theme-box">
      {cards.map((card, i) => (
        <div>
          <h1>{card.name}</h1>
          <img src={card.image} alt="" />
        </div>
      ))}
    </div> */}