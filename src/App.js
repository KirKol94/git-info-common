import React from 'react'
import Header from './components/Header'
import CommandList from './components/CommandList'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <CommandList />
    </div>
  )
}

export default App