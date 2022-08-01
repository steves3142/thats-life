import React from 'react'
import { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const [cards, setCreditCards] = useState([])

  const initialCardForm = { 
    name: '', 
    bank: '',
    category: '',
    descripiton: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialCardForm);

  // useEffect(() => {
  //   console.log('ciao')
  //   const getIssues = async () => {
  //     try{ 
  //       let res = await axios.get('/api/creditcards')
  //       console.log(res.data)
  //       setIssues(res.data)
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   getIssues();
  // }, [])

  async function getCreditCards() {
    const res = await axios.get(`/api/creditcards`)
    console.log(res)
    let cardsData = await res.data
    console.log(cardsData)
    setCreditCards(cardsData.cards)
  }

  useEffect(() => {
    getCreditCards()
  }, [])

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post(`/api/creditcards`, formState)
    console.log('hola')
    console.log(res.data)
    setFormState(initialCardForm)
  };

  const handleDelete = async (_id) => {
    const res = await axios
      .delete(`/api/creditcards/${_id}`)
      .then((_res) => getCreditCards())
      .catch((error) => console.log(error))
  }
  
  return (
    <><div className="home">
      <h4>Add Your Credit Card</h4>
      <form onSubmit={ handleSubmit }>

        <label htmlFor="name">Credit Card Name: </label>
        <input type="text" id="name" onChange={handleChange} value={formState.name}/>

        <label htmlFor="bank">Bank: </label>
        <input type="text" id="bank" onChange={handleChange} value={formState.bank}/>

        <label htmlFor="category">Category: </label>
        <input type="text" id="category" onChange={handleChange} value={formState.category}/>

        <label htmlFor="image">Image Link:</label>
        <input type="text" id="image" onChange={handleChange} value={formState.image}/>

        <label htmlFor="description">Description: </label>
        <textarea id="description" cols="15" rows="3" onChange={handleChange} value={ formState.description }></textarea>
        <button type="submit">Submit</button>

      </form>
      <h4>Delete A Card</h4>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Credit Card Name: </label>
        <input type="text" id="name" onChange={handleChange} value={formState.name}/>
        <button type="submit">Submit</button>
      </form>

      <div>
        {/* <form>
          <label htmlFor="issueType">Learn About:</label>
          <select id="issueType">
            <option value="cards">Credit Cards</option>
            <option value="banks">Banks</option>
          </select>
        </form> */}
        <div className="card-display-box">
          {cards.map((card, i) => (
          <div className="credit-card" key={i}>
            <h1>{card.name}</h1>
            <img src={card.image} alt="" />
            <div className="button-div">
              <button className="removebutton" onClick={() => {handleDelete(card._id)}}>Remove</button>
              <button className="editbutton">Edit</button>
            </div>
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

        //let navigate = useNavigate()
  // const showCard = (card) => {
  //   Navigate(`/creditcards/${card._id}`)
  // }