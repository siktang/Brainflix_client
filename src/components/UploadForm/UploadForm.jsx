import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./UploadForm.scss";

//binding Modal to root element for accessibility
Modal.setAppElement("#root");

const API_URL = import.meta.env.VITE_API_URL;

export default function UploadForm() {
    const [isModalOepn, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const navigate = useNavigate();

    const handleClickCancel = (event) => {
        event.preventDefault();
        setModalContent("Upload Cancelled. You will now be taken to Home Page.");
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        navigate("/");
    }

    const handleClickPublish = async (event) => {
        event.preventDefault();
        console.log("You have successfully uploaded!");

        const newVideo = {
            title: event.target.title.value,
            description: event.target.description.value,
            image: `${API_URL}/images/Upload-video-preview.jpg`
        };

        try{
            await axios.post(`${API_URL}/videos`, newVideo);

            setModalContent("Upload Successful! You will now be taken to Home Page.");
            setIsModalOpen(true);

            form.reset();
        }
        catch(e){console.error(e)};
    }

    return (
        <div className="uploadFormContainer">
            <form className="form" id="form" onSubmit={handleClickPublish}>
                <div className="form__fields">
                    <label htmlFor="title" className="section-header form__fields--label">TITLE YOUR VIDEO</label>
                    <input type="text" name="title" id="title" placeholder="Add a title to your video" className="form__fields--input"/>
                    <label htmlFor="description" className="section-header form__fields--label">ADD A VIDEO DESCRIPTION</label>
                    <textarea type="text" name="description" id="description" placeholder="Add a description to your video" className="form__fields--textarea"></textarea>
                </div>
                <div className="form__buttons">
                    <button className="form__buttons--publish" type="submit">PUBLISH</button>
                    <button className="form__buttons--cancel" onClick={handleClickCancel}>CANCEL</button>            
                </div>
            </form>
            <Modal
                isOpen={isModalOepn}
                contentLabel={modalContent}
                className="modal"
                overlayClassName="modal__overlay"
            >
                <div>
                    <p className="modal__content">{modalContent}</p>
                    <button onClick={handleCloseModal} className="modal__button">CLOSE</button>
                </div>
            </Modal>
        </div>
    )
}