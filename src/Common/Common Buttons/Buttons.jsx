import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import './Buttons.css';

const Buttons = ({ buttonText }) => { // Props passed to change the button text in other components
    return (
        <>
            <div className="buttons-container">
                <div className='button-container button-text'>{buttonText}</div>
                <div className='button-container center detail-icon-container'>   {/* 'center' is defined in index.css; it's used as a shorthand for centering content both horizontally and vertically in the display */}
                    <FiArrowUpRight />
                </div>
            </div>
        </>
    );
}

export default Buttons;
