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
    <><div className="home">
      <div>
        <div>{cards.name}</div>
        <div>{cards.bank}, {cards.category}</div>
        <div>{cards.description}</div>
        <img src={cards.image}></img>
        <form>
          <label htmlFor="issueType">Learn About :</label>
          <select id="issueType">
            <option value="outage"></option>
            <option value="billing">Banks</option>
            <option value="cancel">Credit Cards</option>
          </select>
          {/* <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" />
          <label htmlFor="message">Message</label> */}
          {/* <textarea id="message" cols="30" rows="10"></textarea>
          <button type="submit">Send</button> */}
        </form>
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