import React, { useState } from 'react';
import CommandList from './components/CommandList';
import Header from './components/Header';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='app-wrapper'>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <CommandList
        searchValue='prefer-single'
      />
    </div>
  );
};

export default App;