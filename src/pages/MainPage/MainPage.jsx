import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoListEndpoint, videoEndpoint } from "../../utils/api-utils";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Form from "../../components/Form/Form";
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import SideBar from "../../components/SideBar/SideBar";
import "./MainPage.scss";


export default function Main() {
    const [videoList, setVideoList] = useState([]);
    const [currentVideo, setCurrentVideo] = useState([]);

    const { videoId } = useParams();

    // retrieving the list of videos
    const getVideoList = async () => {
        try{
            let res = await axios.get(videoListEndpoint());
            setVideoList(res.data);
        } catch(e){
        console.error(e);
        }
    }

    useEffect(() => {
        getVideoList();
    }, [])

    // retrieving current video based on route
    const currentVideoId = videoId || videoList[0].id;

    const getCurrentVideo = async (id) => {
        try{
            const res = await axios.get(videoEndpoint(id));
            setCurrentVideo(res.data);}
        catch(e){
            console.error(e);
        }
    };
    
    useEffect(() => {
        getCurrentVideo(currentVideoId);
    }, [currentVideoId])

    const timeUploaded = new Date(currentVideo.timestamp);

    const nextVideos = videoList.filter((video) => 
        video.id !== currentVideoId
    );

    if (videoList.length < 1) {
        return <h1>Loading...</h1>;
    }

    if (currentVideo.length < 1) {
        return <h1>Loading...</h1>;
    }

    return (
        <main>
            <CurrentVideo currentVideo={currentVideo} />
            <div className="videoInfoContainer">
                <div className="videoInfoContainer__details">
                    <VideoInfo currentVideo={currentVideo} timeUploaded={timeUploaded} />
                    <Form />
                    <DisplayComments currentVideo={currentVideo} />
                </div> 
                <SideBar nextVideos={nextVideos}/>
            </div> 
        </main>
    )
}