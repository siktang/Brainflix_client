import './Navbar.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__search'>
                <div className='navbar__search--searchContainer'>
                    <label htmlFor='searchBox'></label>
                    <input type='search' id='searchBox' name='searchBox' placeholder='Search' className='navbar__search--searchBox'/>
                </div>
                <img src={avatar} alt='Avatar-for-mobile' className='navbar__avatar--mobile' />
            </div>
            <button type='button' className='navbar__button'>
                UPLOAD
            </button>
            <img src={avatar} alt='Avatar-for-tablet' className='navbar__avatar--tablet' />
        </div>
    )
}