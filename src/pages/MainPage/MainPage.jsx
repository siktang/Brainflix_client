import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoListEndpoint } from "../../utils/api-utils";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Form from "../../components/Form/Form";
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import SideBar from "../../components/SideBar/SideBar";
import "./MainPage.scss";


export default function Main() {
    const [videoList, setVideoList] = useState([]);

    const { videoId } = useParams();

    const getVideoList = async () => {
        let res = await axios.get(videoListEndpoint());
        setVideoList(res.data);
    } 

    useEffect(() => {
        getVideoList();
    }, [])

    if (videoList.length < 1) {
        return <h1>Loading...</h1>;
    }

    const currentVideoId = videoId || videoList[0].id;

    // const time = new Date(currentVideo.timestamp);

    const nextVideos = videoList.filter((video) => 
        video.id !== currentVideoId
    );

    // const changeCurrentVideo = (videoId) => {
    //     const selectedVideo = videoList.find((video) => (
    //     video.id === videoId
    //     ));
    //     setCurrentVideo(selectedVideo);
    // }
    
    return (
        <main>
            {/* <CurrentVideo currentVideo={currentVideo} />
            <div className="videoInfoContainer">
                <div className="videoInfoContainer__details">
                    <VideoInfo currentVideo={currentVideo} time={time} />
                    <Form />
                    <DisplayComments currentVideo={currentVideo} />
                </div> */}
                <SideBar nextVideos={nextVideos}/>
            {/* </div> */}
        </main>
    )
}