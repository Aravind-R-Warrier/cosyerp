import React from 'react'
import Header from './components/Header'
import Features from './components/Features'
import Scrollable from './components/Scrollable'
import Carousel from './components/Carousel'
import FaqComponent from './components/FaqComponent'

function Home() {
  return (
    <>
      <Header/>
      <Features/>
      <Scrollable/>
      <Carousel/>
      <FaqComponent/>
    </>
  )
}

export default Home
