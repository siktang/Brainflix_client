import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg"

export default function UploadPage() {
    return (
        <main>
            <div className="divider"></div>
            <div className="uploadPageContainer">
                <h1 className="uploadPageContainer__header page-header">Upload Video</h1>
                <div className="uploadDetails">
                    <div className="uploadDetails__thumbnail">
                        <h3 className="uploadDetails__thumbnail--title section-header">VIDEO THUMBNAIL</h3>
                        <div className="uploadDetails__thumbnail--imgContainer">
                            <img src={videoThumbnail} alt="video thumbnail" className="uploadDetails__thumbnail--image"/>
                        </div>
                    </div>
                    <UploadForm />
                </div>
            </div>
        </main>
    )
}