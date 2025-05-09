import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './utils/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mobile from './pages/Mobile/Mobile'
import About from './pages/About/components/About'
import Desktop from './pages/Desktop/components/Desktop'
import Career from './pages/Careers/components/Career'
import PartnerWithUs from './pages/partnerWithUs/components/PartnerWithUs'
import Login from './pages/Login/components/Login'
import Princing from './pages/pricing/components/Pricing'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/desktop" element={<Desktop/>} />
        <Route path="/careers" element={<Career/>} />
        <Route path="/pricing" element={<Princing/>} />
        <Route path="/partner" element={<PartnerWithUs/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
