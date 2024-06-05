import './Form.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'

export default function Form() {
    return (
        <div>
            <section className='form-container'>
                <img src={avatar} alt='avatar' className='form-container__avatar'/>
                <form className='form-container__form'>
                    <div className='form-container__form--form-body'>
                        <label htmlFor='comment' className='section-header form-container__form--title'>JOIN THE CONVERSATION</label>
                        <textarea name='comment' id='comment' className='form-container__form--input' placeholder='Add a new comment'></textarea>
                    </div>
                    <button className='form-container__form--button'>Comment</button>
                </form>    
            </section>
            <div className='divider'></div>
        </div>
    )
}