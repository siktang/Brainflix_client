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

    if (videoList.length < 1) {
        return <h1>Loading...</h1>;
    };

    const currentVideoId = videoId || videoList[0].id;

    return (
        <main>
            <CurrentVideo currentVideoId={currentVideoId} />
            <VideoInfoContainer videoList={videoList} currentVideoId={currentVideoId}/>
        </main>
    )
}