import logo from './logo.svg'
import './App.css'
import React from 'react'
import Header from './components/Header.js'
import Home from './components/Home.js'


function App() {

  console.log('hello')

  return (
    <div className="App">
      <Home/>
      <main>
      <h2>That's Life</h2>
      </main>
    </div>
  )
}

export default App