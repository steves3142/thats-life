import React from 'react'
import { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const BankMenu = () => {
    const [banks, setBanks] = useState([]) //sqaure bracket for more than one bank curly for only one bank


    const initialBankForm = { 
      name: '', 
      accountTypes: '',
      image: ''
    }

    const [formState, setFormState] = useState(initialBankForm);

    const initialUpdateForm = { 
      name: '', 
      accountTypes: '',
      image: ''
    }
  
    const[updatedBank, setUpdatedBank] = useState(initialUpdateForm)

    async function getBanks() {
      const res = await axios.get(`/api/banks`)
      console.log(res)
      let bankData = await res.data
      console.log(bankData)
      setBanks(bankData.banks)
    }

    useEffect(() => {
    getBanks()
  }, [])

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleChange2 = event => {
    setUpdatedBank({...updatedBank, [event.target.id]: event.target.value }); 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post(`/api/banks`, formState)
    console.log('hola')
    console.log(res.data)
    setFormState(initialBankForm)
    getBanks()
  };

  const handleDelete = async (_id) => {
    const res = await axios
      .delete(`/api/banks/${_id}`)
      .then((_res) => getBanks())
      .catch((error) => console.log(error))
  }

    return (
      <><div className="bankmenu">
        <h4>Add Your Bank</h4>

        <form onSubmit={ handleSubmit }>
  
          <label htmlFor="name">Bank Name: </label>
          <input type="text" id="name" onChange={handleChange} value={formState.name}/>
  
          <label htmlFor="accountTypes">Category: </label>
          <input type="text" id="accountTypes" onChange={handleChange} value={formState.accountTypes}/>
  
          <label htmlFor="image">Image Link:</label>
          <input type="text" id="image" onChange={handleChange} value={formState.image}/>

          <button type="submit">Submit</button>
        </form>
  
         <h4>Recommended Banks</h4>
        <div>
          <div className="bank-display-box">
          {banks.map((bank) => (
          <div className="bank-info" key={bank._id}>
            <h1>{bank.name}</h1>
            <img src={bank.image} alt="" />
            <div className="button-div">
              <button className="removebutton" onClick={() => {handleDelete(bank._id)}}>Remove</button>
              <div className="edit-options">
                <form>
                  <label htmlFor="name">Bank Name: </label>
                  <input type="text" id="name" onChange={handleChange2} value={updatedBank.name}/>
                  <label htmlFor="image">Image Link:</label>
                    <input type="text" id="image" onChange={handleChange2} value={updatedBank.image}/>
                    <button type="submit" onClick={async () => {
                      await axios({
                        method: 'put',
                        url: `/api/banks/${bank._id}`,
                        data: {
                          name: updatedBank.name,
                          accountTypes: updatedBank.accountTypes,
                          image: updatedBank.image
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

export default BankMenu