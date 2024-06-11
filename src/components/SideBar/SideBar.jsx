import ListedVideo from "../ListedVideo/ListedVideo"
import "./SideBar.scss"

export default function SideBar({ nextVideos}) {
    return (
        <div className="sideBar">
            <h2 className="section-header">NEXT VIDEOS</h2>

            <section className="sideBar__videoList">
                {nextVideos.map((video) => <ListedVideo 
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    image={video.image}
                    channel={video.channel}
                />)}
            </section>
        </div>
    )
}