import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import CurrentVideo from './components/CurrentVideo/CurrentVideo'
import SideBar from './components/SideBar/SideBar'
import videoList from '../src/data/video-details.json'
import Form from './components/Form/Form'

function App() {

  return (
    <>
      <Header />
      <CurrentVideo />
      <Form />
      <SideBar videoList={videoList} />
    </>
  )
}

export default App
