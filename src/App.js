import React from 'react'
import './App.css'
import Home from './Components/Home'
import CryptoCompany from './Components/CryptoCompany'
import Items from './Components/Items'
import CreateSell from './Components/CreateSell'

const App = () => {
  return (
    <>
      <Home />
      <CryptoCompany />
      <Items /> 
      <CreateSell />
    </>
  )
}

export default App