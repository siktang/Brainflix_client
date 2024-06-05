import ListedVideo from '../ListedVideo/ListedVideo'
import './SideBar.scss'

export default function SideBar({ videoList }) {
    return (
        <div className='sideBar'>
            <h2 className='section-header'>NEXT VIDEOS</h2>

            <section className='sideBar__videoList'>
                {videoList.map((video) => <ListedVideo 
                    key={video.id}
                    title={video.title}
                    image={video.image}
                    channel={video.channel}
                />)}
            </section>
        </div>
    )
}