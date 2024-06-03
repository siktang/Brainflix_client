import './CurrentVideo.scss'

export default function CurrentVideo() {
    return ( 
        <video className='currentVideo' controls poster='https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg'>
            <source src='https://unit-3-project-api-0a5620414506.herokuapp.com/stream?api_key=sd' type='video/mp4'/>
            Your browser does not support this video.
        </video>
    )
}
