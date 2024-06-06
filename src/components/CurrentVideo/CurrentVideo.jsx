import './CurrentVideo.scss';
import { useEffect } from 'react';
import viewIcon from '../../assets/images/icons/views.svg'
import likeIcon from '../../assets/images/icons/likes.svg'

export default function CurrentVideo({ currentVideo, time }) {

    return (
        <>
            <div className='videoContainer'>
                <video className='videoContainer__video' controls controlsList='nodownload' poster={currentVideo.image}>
                    <source src={`${currentVideo.video}?api_key=video`} type='video/mp4'/>
                    Your browser does not support this video.
                </video>
            </div>
            <div className='videoInfo'>
                <h1 className='videoInfo__title'>{currentVideo.title}</h1>
                <div className='videoInfo__divider'></div>
                <div className='videoInfo__container'>
                    <div className='videoInfo__details'>
                        <h2 className='videoInfo__details--channel'>By {currentVideo.channel}</h2>
                        <h3 className='videoInfo__details--time'>{time.toLocaleDateString('es-pa')}</h3>
                    </div>
                    <div className='videoInfo__stat'>
                        <div className='videoInfo__stat-boxForViews'>
                            <img src={viewIcon} alt='icon-for-views' />
                            <h3 className='videoInfo__stat--views'>{currentVideo.views}</h3>
                        </div>
                        <div className='videoInfo__stat-boxForLikes'>
                            <img src={likeIcon} alt='icon-for-likes' />
                            <h3 className='videoInfo__stat--likes'>{currentVideo.likes}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <div className='videoDesc'>{currentVideo.description}</div>
        </>
    )
}
