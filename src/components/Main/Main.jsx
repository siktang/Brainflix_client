import CurrentVideo from "../CurrentVideo/CurrentVideo";
import Form from "../Form/Form";

export default function Main( {currentVideo, time} ) {
    return (
        <>
            <CurrentVideo currentVideo={currentVideo} time={time}/>
            <Form />
        </>
    )
}