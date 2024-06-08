import "./Form.scss"
import avatar from "../../assets/images/Mohan-muruge.jpg"

export default function Form() {
    return (
        <div>
            <section className="formContainer">
                <img src={avatar} alt="avatar" className="formContainer__avatar"/>
                <form className="formContainer__form">
                    <div className="formContainer__form--formBody">
                        <label htmlFor="comment" className="section-header formContainer__form--title">JOIN THE CONVERSATION</label>
                        <textarea name="comment" id="comment" className="formContainer__form--input" placeholder="Add a new comment"></textarea>
                    </div>
                    <button className="formContainer__form--button">Comment</button>
                </form>    
            </section>
            <div className="divider"></div>
        </div>
    )
}