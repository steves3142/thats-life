import React from 'react'
import { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const BankMenu = () => {
    const [banks, setBanks] = useState([]) //sqaure bracket for more than one bank curly for only one bank
  
    //let navigate = useNavigate()
  
    useEffect(() => {
    console.log('hello')
    async function getBanks() {
      const res = await axios.get(`/api/banks`)
      console.log(res)
      let bankData = await res.data
      console.log(bankData)
      setBanks(bankData.banks)
    }
    getBanks()
    console.log(banks)
  }, [])

    
    return (
      <><div className="bankmenu">
        <div>
          <div className="bank-display-box">
          {banks.map((bank, i) => (
          <div className="bank-info" key={i}>
            <h1>{bank.name}</h1>
            <img src={bank.image} alt="" />
            </div>
          ))}
          </div>
        </div>
        </div></>
    )
}

export default BankMenu