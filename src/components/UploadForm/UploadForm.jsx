import { useNavigate } from "react-router-dom";
import "./UploadForm.scss"

export default function UploadForm() {

    const navigate = useNavigate();

    const handleClickPublish = (event) => {
        event.preventDefault();
        alert("Upload Successful! You will now be taken to Home Page.");
        navigate("/");
    }

    const handleClickCancel = (event) => {
        event.preventDefault();
        alert("Upload Cancelled. You will now be taken to Home Page.");
        navigate("/");
    }

    return (
        <form className="form">
            <div className="form__fields">
                <label htmlFor="title" className="section-header form__fields--label">TITLE YOUR VIDEO</label>
                <input type="text" name="title" id="title" placeholder="Add a title to your video" className="form__fields--input"/>
                <label htmlFor="description" className="section-header form__fields--label">ADD A VIDEO DESCRIPTION</label>
                <textarea type="text" name="description" id="description" placeholder="Add a description to your video" className="form__fields--textarea"></textarea>
            </div>
            <div className="form__buttons">
                <button className="form__buttons--publish" type="submit" onClick={handleClickPublish}>PUBLISH</button>
                <button className="form__buttons--cancel" onClick={handleClickCancel}>CANCEL</button>            
            </div>
        </form>
    )
}