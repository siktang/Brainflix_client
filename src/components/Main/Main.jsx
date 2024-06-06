import CurrentVideo from "../CurrentVideo/CurrentVideo";

export default function Main( {currentVideo, time} ) {
    return (
        <>
            <CurrentVideo currentVideo={currentVideo} time={time}/>
        </>
    )
}