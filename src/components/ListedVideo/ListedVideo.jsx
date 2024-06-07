import './ListedVideo.scss'

export default function ListedVideo({ id, title, image, channel, changeCurrentVideo }) {
    return (
        <div className='listedVideo'>
            <div className='listedVideo__poster'>
                <img src={image} alt='poster' className='listedVideo__poster--img' onClick={() => changeCurrentVideo(id)}/>
            </div>
            <div className='listedVideo__desc'>
                <div className='listedVideo__desc--title' onClick={() => changeCurrentVideo(id)}>{title}</div>
                <div className='listedVideo__desc--channel' onClick={() => changeCurrentVideo(id)}>{channel}</div>
            </div>
        </div>
    )
}