import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const BankMenu = () => {
    const [banks, setBanks] = useState({})
  
    //let navigate = useNavigate()
  
    useEffect(() => {
      console.log('hello')
      async function getBanks() {
        console.log('hello')
        const res = await axios.get(`/api/banks/`)
        console.log(res)
        setBanks(res.data.bank)
      }
      getBanks()
    }, [])
  
  
    return (
      <div className="bankmenu">
        <div>
          <div>{banks.name}</div>
          <div>{banks.accountTypes} {banks.category}</div>
          <div>{banks.description}</div>
          <img src={banks.image}></img>
        </div>
      </div>
    )
}

export default BankMenu