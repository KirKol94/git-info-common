import React from 'react'
import '../style/Header.scss'

const Header = ({ searchValue, setSearchValue }) => {
  const onChangeInput = (event) => {
    const { value } = event.target
    setSearchValue(value)
  }

  return (
    <header>
      {!searchValue && <div className="description">
        <h1>Git / Git Hub</h1>
        <ul>
          <li>Справочник по командам Git</li>
          <li>Поиск по командам</li>
        </ul>
      </div>}

      <input
        type="text"
        name='search'
        value={searchValue}
        onChange={onChangeInput}
        placeholder='command'
      />
    </header>
  )
}

export default Header