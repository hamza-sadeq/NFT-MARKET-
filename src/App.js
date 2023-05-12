import React from 'react'
import './App.css'
import Home from './Components/Home'
import CryptoCompany from './Components/CryptoCompany'
import Items from './Components/Items'
import CreateSell from './Components/CreateSell'
import Footer from './Components/Footer'
import CopyRight from './Components/CopyRight'
const App = () => {
  return (
    <>
      <Home />
      <CryptoCompany />
      <Items /> 
      <CreateSell />
      <Footer />
      <CopyRight />
    </>
  )
}

export default App