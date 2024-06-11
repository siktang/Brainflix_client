import { Link } from "react-router-dom";
import "./ListedVideo.scss";

export default function ListedVideo({ id, title, image, channel }) {
    return (
        <Link to={`/videos/${id}`} className="listedVideo__links">
        <div className="listedVideo">
            <div className="listedVideo__poster">
                <img src={image} alt="poster" className="listedVideo__poster--img"/>
            </div>
            <div className="listedVideo__desc">
                <div className="listedVideo__desc--title">{title}</div>
                <div className="listedVideo__desc--channel">{channel}</div>
            </div>
        </div>
        </Link>
    )
}