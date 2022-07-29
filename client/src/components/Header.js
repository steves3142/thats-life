import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
          <div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/bankmenu">Banking</NavLink>
              </li>
            </ul>
          </div>
    </header>

  )
}
