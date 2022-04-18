import React, { useState } from 'react'
import Header from './components/Header'
import CommandList from './components/CommandList'

const App = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="app-wrapper">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <CommandList
        searchValue={searchValue}
      />
    </div>
  )
}

export default App