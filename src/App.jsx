import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import CurrentVideo from './components/CurrentVideo/CurrentVideo'
import SideBar from './components/SideBar/SideBar'
import videoList from '../src/data/video-details.json'

function App() {

  return (
    <>
      <Header />
      <CurrentVideo />
    </>
  )
}

export default App
