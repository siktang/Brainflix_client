import "./UploadForm.scss"

export default function UploadForm() {
    return (
        <form className="form">
            <div className="form__fields">
                <label htmlFor="title" className="section-header form__fields--label">TITLE YOUR VIDEO</label>
                <input type="text" name="title" id="title" placeholder="Add a title to your video" className="form__fields--input"/>
                <label htmlFor="description" className="section-header form__fields--label">ADD A VIDEO DESCRIPTION</label>
                <textarea type="text" name="description" id="description" placeholder="Add a description to your video" className="form__fields--textarea"></textarea>
            </div>
            <div className="form__buttons">
                <button className="form__buttons--publish">PUBLISH</button>
                <button className="form__buttons--cancel">CANCEL</button>            
            </div>
        </form>
    )
}