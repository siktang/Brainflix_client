import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import Form from "../Form/Form";

export default function Main( {currentVideo, time} ) {
    return (
        <main>
            <CurrentVideo currentVideo={currentVideo} time={time} />
            <VideoInfo currentVideo={currentVideo} time={time} />
            <Form />
        </main>
    )
}