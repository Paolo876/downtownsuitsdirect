import React from 'react'
import DocumentHead from "../components/DocumentHead"
import Navbar from "../components/Navbar"
import StoreInformation from '../components/StoreInformation'

const Home = () => {
  
  return (
    <>
      <DocumentHead title="Downtown Suits Direct | Home"/>
      <Navbar/>
      <StoreInformation/>
    </>
  )
}

export default Home