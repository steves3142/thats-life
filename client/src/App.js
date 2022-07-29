import logo from './logo.svg'
import './App.css'
import React from 'react'
import Header from './components/Header.js'
import Home from './components/Home.js'
import BankMenu from './components/BankMenu.js'


function App() {

  console.log('hello')

  return (
    <div className="App">
      <Header/>
      <main>
      <h2>That's Life</h2>
      <Home/>
      </main>
    </div>
  )
}

export default App
