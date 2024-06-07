import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import Form from "../Form/Form";
import DisplayComments from "../DisplayComments/DisplayComments";
import SideBar from "../SideBar/SideBar";

export default function Main( {currentVideo, time, nextVideos, changeCurrentVideo} ) {
    return (
        <main>
            <CurrentVideo currentVideo={currentVideo} />
            <VideoInfo currentVideo={currentVideo} time={time} />
            <Form />
            <DisplayComments currentVideo={currentVideo} />
            <SideBar nextVideos={nextVideos} changeCurrentVideo={changeCurrentVideo}/>
        </main>
    )
}