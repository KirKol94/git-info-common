import React from 'react'
import '../style/Header.scss'

const Header = () => {
  return (
    <header>
      <div className="description">
        <h1>Git / Git Hub</h1>
        <ul>
          <li>Справочник по командам Git</li>
          <li>Командная разработка с помощью Git Hub</li>
        </ul>
      </div>
      <input type="text" placeholder='command' />
    </header>
  )
}

export default Header