import { FiArrowUpRight } from "react-icons/fi";
import './Buttons.css';

const Buttons = ({ buttonText }) => { 
    return (
        <>
            <div className="buttons-container">
                <div className='button-container button-text'>{buttonText}</div>
                <div className='button-container center detail-icon-container'>  
                    <FiArrowUpRight />
                </div>
            </div>
        </>
    );
}

export default Buttons;
