import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoListEndpoint, videoEndpoint } from "../../utils/api-utils";
import VideoInfoContainer from "../../components/VideoInfoContainer/VideoInfoContainer";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import "./MainPage.scss";


export default function Main() {

    const [videoList, setVideoList] = useState([]);
    const [currentVideo, setCurrentVideo] = useState([]); 
    const [currentVideoId, setCurrentVideoId] = useState(null); 

    const { videoId } = useParams();

    const getVideoList = async () => {
        try{
            let res = await axios.get(videoListEndpoint());
            setVideoList(res.data);
            setCurrentVideoId(videoId || res.data[0].id);
        } catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        getVideoList();
    }, [])


    const getCurrentVideo = async (id) => {
        try{
            const res = await axios.get(videoEndpoint(id));
            setCurrentVideo(res.data);}
        catch(e){
            console.error(e);
        }
    };
    
    useEffect(() => {
        if (currentVideoId) {
            getCurrentVideo(currentVideoId);
        }
    }, [currentVideoId]);

    if (videoList.length < 1) {
        return <h1>Loading...</h1>;
    };

    if (currentVideo.length < 1) {
        return <h1>Loading...</h1>;
    };

    return (
        <main>
            <CurrentVideo currentVideo={currentVideo} />
            <VideoInfoContainer videoList={videoList} currentVideo={currentVideo}/>
        </main>
    )
}