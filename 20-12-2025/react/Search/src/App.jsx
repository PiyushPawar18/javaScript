import React from 'react'
import SearchBar from './components/SearchBar'
import ResultBox from './components/ResultBox'
import { useState } from 'react'
import DeleteUser from './components/DeleteUser'
import Categories from './components/Categories'

const App = () => {
  const [input ,setInput] = useState("")
  console.log(input)
  return (
    <div className='main-container'>
      {/* <SearchBar input={input} setInput={setInput}/>
      <ResultBox input={input} setInput={setInput}/> */}
      {/* <DeleteUser/> */}
      <Categories/>
    </div>
  )
}

export default App
