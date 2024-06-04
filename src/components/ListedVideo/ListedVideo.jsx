import './ListedVideo.scss'

export default function ListedVideo({ title, image, channel}) {
    return (
        <div className='listedVideo'>
            <img src={image} alt='poster' className='listedVideo__poster'/>
            <div className='listedVideo__title'>{title}</div>
            <div className='listedVideo__channel'>{channel}</div>
        </div>
    )
}