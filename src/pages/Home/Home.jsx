import React from 'react'
import Header from './components/Header'
import Features from './components/Features'
import Scrollable from './components/Scrollable'
import Carousel from './components/Carousel'
import FaqComponent from './components/FaqComponent'
import Footer from '../../utils/Footer'

function Home() {
  return (
    <>
      <Header/>
      <Features/>
      <Scrollable/>
      <Carousel/>
      <FaqComponent/>
      <Footer/>
      
    </>
  )
}

export default Home
