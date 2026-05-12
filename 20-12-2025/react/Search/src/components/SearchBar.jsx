import React from 'react'
import { useState } from 'react'

const SearchBar = ({input,setInput}) => {
  return (
    <div className='searchBar'>
      <input type="text" placeholder='Enter your name' value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default SearchBar
