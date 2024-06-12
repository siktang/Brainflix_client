import { useEffect, useState } from "react";
import axios from "axios";

import "./CurrentVideo.scss";

export default function CurrentVideo({ currentVideo }) {
    return (
            <div className="videoContainer">
                <video className="videoContainer__video" controls poster={currentVideo.image}>
                    <source src={`${currentVideo.video}?api_key=video`} type="video/mp4"/>
                    Your browser does not support this video.
                </video>
            </div>
    )
}
