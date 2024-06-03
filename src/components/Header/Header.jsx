import './Header.scss'
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='header__navbar'>
                <div className='header__search'>
                    <div>
                        <label htmlFor='searchBox'></label>
                        <input type='search' id='searchBox' name='searchBox' placeholder='Search' className='header__search--searchBox'/>
                    </div>
                    <img src={avatar} alt='Avatar-for-mobile' className='header__avatar--mobile' />
                </div>
                <button type='button' className='header__button'>
                    UPLOAD
                </button>
                <img src={avatar} alt='Avatar-for-tablet' className='header__avatar--tablet' />
            </div>
        </header>
    );
}