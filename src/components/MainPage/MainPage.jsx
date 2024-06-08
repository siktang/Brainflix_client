import { useState } from "react";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import Form from "../Form/Form";
import DisplayComments from "../DisplayComments/DisplayComments";
import SideBar from "../SideBar/SideBar";
import videoList from "../../data/video-details.json";
import "./MainPage.scss";

export default function Main() {
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
        <main>
            <CurrentVideo currentVideo={currentVideo} />
            <div className="videoInfoContainer">
                <div className="videoInfoContainer__details">
                    <VideoInfo currentVideo={currentVideo} time={time} />
                    <Form />
                    <DisplayComments currentVideo={currentVideo} />
                </div>
                <SideBar nextVideos={nextVideos} changeCurrentVideo={changeCurrentVideo}/>
            </div>
        </main>
    )
}