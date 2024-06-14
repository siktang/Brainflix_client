import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import "./UploadForm.scss";

export default function UploadForm() {
    const [isModalOepn, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const navigate = useNavigate();

    const handleClickPublish = (event) => {
        event.preventDefault();
        setModalContent("Upload Successful! You will now be taken to Home Page.");
        setIsModalOpen(true);
    }

    const handleClickCancel = (event) => {
        event.preventDefault();
        setModalContent("Upload Cancelled. You will now be taken to Home Page.");
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        navigate("/");
    }

    return (
        <div>
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