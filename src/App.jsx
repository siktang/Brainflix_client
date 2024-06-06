import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import CurrentVideo from './components/CurrentVideo/CurrentVideo'
import SideBar from './components/SideBar/SideBar'
import videoList from '../src/data/video-details.json'
import Form from './components/Form/Form'
import Main from './components/Main/Main'

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  const time = new Date(currentVideo.timestamp);

  return (
    <>
      <Header />
      <Main currentVideo={currentVideo} time={time} />
      <Form />
      <SideBar videoList={videoList} />
    </>
  )
}

export default App
