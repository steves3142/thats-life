import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
          <div>
              <ul>
                <NavLink to="/">Home</NavLink>
              </ul>
              <ul>
                <NavLink to="/bankmenu">Banking</NavLink>
              </ul>
          </div>
    </header>

  )
}
