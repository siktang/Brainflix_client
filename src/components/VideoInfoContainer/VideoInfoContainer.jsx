import "./VideoInfoContainer.scss";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Form from "../../components/Form/Form";
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import SideBar from "../../components/SideBar/SideBar";

export default function VideoInfoContainer({ videoList, currentVideo}) {
   
    const timeUploaded = new Date(currentVideo.timestamp);

    const nextVideos = videoList.filter((video) => 
        video.id !== currentVideo.id
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