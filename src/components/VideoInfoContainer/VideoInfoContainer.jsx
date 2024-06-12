import "./VideoInfoContainer.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { videoEndpoint } from "../../utils/api-utils";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Form from "../../components/Form/Form";
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import SideBar from "../../components/SideBar/SideBar";

export default function VideoInfoContainer({ videoList, currentVideoId}) {
    const [currentVideo, setCurrentVideo] = useState([]); 

    const getCurrentVideo = async (id) => {
        try{
            const res = await axios.get(videoEndpoint(id));
            setCurrentVideo(res.data);
        }            
        catch(e){
            console.error(e);
        }
    };
    
    useEffect(() => {
        getCurrentVideo(currentVideoId);
    }, [currentVideoId])

    if (currentVideo.length < 1) {
        return <h1>Loading...</h1>;
    };

    console.log(currentVideo);

    const timeUploaded = new Date(currentVideo.timestamp);

    const nextVideos = videoList.filter((video) => 
        video.id !== currentVideoId
    );

    return (
        <div className="videoInfoContainer">
                <div className="videoInfoContainer__details">
                    <VideoInfo currentVideo={currentVideo} timeUploaded={timeUploaded} />
                    <Form />
                    <DisplayComments currentVideo={currentVideo} />
                </div> 
                <SideBar nextVideos={nextVideos}/>
        </div> 
    )
}