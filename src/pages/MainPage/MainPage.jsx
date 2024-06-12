import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoListEndpoint } from "../../utils/api-utils";
import VideoInfoContainer from "../../components/VideoInfoContainer/VideoInfoContainer";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import "./MainPage.scss";


export default function Main() {

    const [videoList, setVideoList] = useState([]);

    const { videoId } = useParams();

    // retrieving the list of videos
    const getVideoList = async () => {
        try{
            let res = await axios.get(videoListEndpoint());
            console.log(res.data);
            setVideoList(res.data);
            
        } catch(e){
            console.error(e);
        }
    }

    //getVideoList();

    useEffect(() => {
        getVideoList();
    }, [])

    if (videoList.length < 1) {
        return <h1>Loading...</h1>;
    };

    //console.log(videoList);

    // retrieving current video based on route
    const currentVideoId = videoId || videoList[0].id;

    return (
        <main>
            <CurrentVideo currentVideoId={currentVideoId} />
            <VideoInfoContainer videoList={videoList} currentVideoId={currentVideoId}/>
        </main>
    )
}