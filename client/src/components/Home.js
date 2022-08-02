import React from 'react'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  // let navigate = useNavigate()
  
  const [cards, setCreditCards] = useState([])

  const initialCardForm = { 
    name: '', 
    bank: '',
    category: '',
    descripiton: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialCardForm);

  const initialUpdateForm = { 
    name: '', 
    bank: '',
    category: '',
    descripiton: '',
    image: ''
  }

  const[updatedCard, setUpdatedCard] = useState(initialUpdateForm)

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

  const handleChange2 = event => {
    setUpdatedCard({...updatedCard, [event.target.id]: event.target.value }); 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post(`/api/creditcards`, formState)
    console.log('hola')
    console.log(res.data)
    setFormState(initialCardForm)
    getCreditCards()
  };

  const handleDelete = async (_id) => {
    const res = await axios
      .delete(`/api/creditcards/${_id}`)
      .then((_res) => getCreditCards())
      .catch((error) => console.log(error))
  }

  //   const handleUpdate = async (_id) => {
  //     let res = await axios
  //     .put(`/api/creditcards/${_id}`, cards)
  //     .then((res) =>console.log(res.status))
  //     .catch((error) => console.log(error))
  // }

  // const handleUpdate = (card) => {
  //   navigate(`/creditcards/`, {state: {id: card} })
  // }

  //  console.log(handleUpdate)
  // let editForm = (card) => {<form onSubmit={ handleSubmit }>
  //           <label htmlFor="name">Credit Card Name: </label>
  //           <input type="text" id="name" onChange={handleChange2} value={card.name}/>
  //           <label htmlFor="image">Image Link:</label>
  //           <input type="text" id="image" onChange={handleChange2} value={card.image}/>
  //           <button type="submit" onClick={() => handleUpdate(card)}>Edit</button>
  //           </form>
  //           }

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

       <h4>Recommended Credit Cards</h4>
      {/*<form onSubmit={ handleSubmit }>
        <label htmlFor="name">Credit Card Name: </label>
        <input type="text" id="name" onChange={handleChange} value={formState.name}/>
        <button type="submit">Submit</button>
      </form> */}

      <div>
        {/* <form>
          <label htmlFor="issueType">Learn About:</label>
          <select id="issueType">
            <option value="cards">Credit Cards</option>
            <option value="banks">Banks</option>
          </select>
        </form> */}
        <div className="card-display-box">
          {cards.map((card) => (
          <div className="credit-card" key={card._id}>
            <h1>{card.name}</h1>
            <img src={card.image} alt="" />
            <div className="button-div">
              <button className="removebutton" onClick={() => {handleDelete(card._id)}}>Remove</button>
              <div className="edit-options">
                {/* {editForm} */}
                <form>
                  <label htmlFor="name">Credit Card Name: </label>
                  <input type="text" id="name" onChange={handleChange2} value={updatedCard.name}/>
                  <label htmlFor="image">Image Link:</label>
                  <input type="text" id="image" onChange={handleChange2} value={updatedCard.image}/>
                  <button type="submit" onClick={async () => {
                    await axios({
                      method: 'put',
                      url: `/api/creditcards/${card._id}`,
                      data: {
                        name: updatedCard.name,
                        image: updatedCard.image
                      }
                    })
                  }}>Edit</button>
                </form>
              </div>
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