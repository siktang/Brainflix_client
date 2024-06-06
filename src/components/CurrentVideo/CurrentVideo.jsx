import './CurrentVideo.scss';
import viewIcon from '../../assets/images/icons/views.svg'
import likeIcon from '../../assets/images/icons/likes.svg'

export default function CurrentVideo({ currentVideo, time }) {
    
    return (
        <>
            <div className='videoContainer'>
                <video className='videoContainer__video' controls poster={currentVideo.image}>
                    <source src={`${currentVideo.video}?api_key=video`} type='video/mp4'/>
                    Your browser does not support this video.
                </video>
                <h1 className='videoContainer__title'>{currentVideo.title}</h1>
                <div className='videoContainer__divider'></div>
                <div className='videoContainer__details'>
                    <h2 className='videoContainer__details--channel'>By {currentVideo.channel}</h2>
                    <h3 className='videoContainer__details--time'>{time.toLocaleDateString('es-pa')}</h3>
                </div>
                <div className='videoContainer__stat'>
                    <img src={viewIcon} alt='icon-for-views' />
                    <h3 className='videoContainer__stat--views'>{currentVideo.views}</h3>
                    <img src={likeIcon} alt='icon-for-likes' />
                    <h3 className='videoContainer__stat--likes'>{currentVideo.likes}</h3>
                </div>
            </div>
            <div className='divider'></div>
        </>
    )
}
