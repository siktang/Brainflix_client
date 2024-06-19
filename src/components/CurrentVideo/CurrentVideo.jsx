import { useEffect, useState } from "react";
import { videoEndpoint } from "../../utils/api-utils";
import axios from "axios";
import "./CurrentVideo.scss";

const API_URL = import.meta.env.VITE_API_URL;

export default function CurrentVideo({ currentVideoId }) {

    const [currentVideo, setCurrentVideo] = useState([]); 

    const getCurrentVideo = async (id) => {
        try{
            const res = await axios.get(API_URL + "/videos/" + id);
            setCurrentVideo(res.data);}
        catch(e){
            console.error(e);
        }
    };

    useEffect(() => {
        getCurrentVideo(currentVideoId);
    }, [currentVideoId]);

    if (currentVideo.length < 1) {
        return <h1>Loading...</h1>;
    };
    
    return (
            <div className="videoContainer">
                <video className="videoContainer__video" controls poster={currentVideo.image}>
                    <source src={`${currentVideo.video}?api_key=video`} type="video/mp4"/>
                    Your browser does not support this video.
                </video>
            </div>
    )
}
