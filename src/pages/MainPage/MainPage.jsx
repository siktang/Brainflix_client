import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoInfoContainer from "../../components/VideoInfoContainer/VideoInfoContainer";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import "./MainPage.scss";

const API_URL = import.meta.env.VITE_API_URL;

export default function Main() {

    const navigate = useNavigate();

    const [videoList, setVideoList] = useState([]);

    const { videoId } = useParams();

    const getVideoList = async () => {
        try{
            let res = await axios.get(API_URL + "/videos");
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

    if (videoId && !videoList.find((video) => video.id === videoId)) {
        navigate("/page-not-found");
    }

    return (
        <main>
            <CurrentVideo currentVideoId={currentVideoId} />
            <VideoInfoContainer videoList={videoList} currentVideoId={currentVideoId}/>
        </main>
    )
}