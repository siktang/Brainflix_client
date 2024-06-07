import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import Form from "../Form/Form";
import DisplayComments from "../DisplayComments/DisplayComments";

export default function Main( {currentVideo, time} ) {
    return (
        <main>
            <CurrentVideo currentVideo={currentVideo} />
            <VideoInfo currentVideo={currentVideo} time={time} />
            <Form />
            <DisplayComments currentVideo={currentVideo} />
        </main>
    )
}