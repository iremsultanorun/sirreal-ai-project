import React from 'react';
import './CollectionModal.css';
import { IoClose } from "react-icons/io5";

const CollectionModal = ({ image, title, content, groupName, onClose }) => {
    return (
        <div className='collection-modal'>
            <button onClick={onClose} className="close-button"><IoClose className='close-icon' /></button>
            <div className='modal-content'>
                <div className="collection-left-container">
                    <img className='collection-modal-image' src={image} alt="Selected" />
                </div>
                <div className="collection-right-container">
                    <h3 className="collection-detail-title">{title}</h3>
                    <p className="collection-detail-paragraph">
                        {groupName} - {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CollectionModal;
