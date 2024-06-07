import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import videoList from '../src/data/video-details.json'
import Main from './components/Main/Main'

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  const time = new Date(currentVideo.timestamp);

  const nextVideos = videoList.filter((video) => (
    video.id !== currentVideo.id
  ) );

  const changeCurrentVideo = (videoId) => {
    const selectedVideo = videoList.find((video) => (
      video.id === videoId
    ));
    setCurrentVideo(selectedVideo);
  }

  return (
    <>
      <Header />
      <Main currentVideo={currentVideo} time={time} nextVideos={nextVideos} changeCurrentVideo={changeCurrentVideo}/>
    </>
  )
}

export default App
