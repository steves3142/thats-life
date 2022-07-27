import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1 className="main-h1">THAT'S LIFE!</h1>
      <div>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          {/* <li>
            <NavLink to="/parks" activeClassName="is-active">
              Parks
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
