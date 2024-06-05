import './ListedVideo.scss'

export default function ListedVideo({ title, image, channel}) {
    return (
        <div className='listedVideo'>
            <div className='listedVideo__poster'>
                <img src={image} alt='poster' className='listedVideo__poster--img'/>
            </div>
            <div className='listedVideo__desc'>
                <div className='listedVideo__desc--title'>{title}</div>
                <div className='listedVideo__desc--channel'>{channel}</div>
            </div>
        </div>
    )
}