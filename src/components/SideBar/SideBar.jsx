import ListedVideo from '../ListedVideo/ListedVideo'
import './SideBar.scss'

export default function SideBar({ videoList }) {
    return (
        <div>
            <h2>Next video</h2>

            <section className='videoList'>
                {videoList.map((video) => <ListedVideo 
                    title={video.title}
                    image={video.image}
                    channel={video.channel}
                />)}
            </section>
        </div>
    )
}