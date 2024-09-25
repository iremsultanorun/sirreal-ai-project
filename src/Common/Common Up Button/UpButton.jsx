import './UpButton.css'; // CSS import
import React, { useState, useEffect } from 'react';
import { IoMdArrowDropup } from 'react-icons/io'; // Icon import
import { HashLink } from 'react-router-hash-link'; // HashLink import

const UpButton = () => {
  // The visibility state of the button. Initially, the button is hidden (false)
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // If the scroll position is greater than the innerHeight of the window, show the button. Otherwise, hide the button. State values are updated.
      if (window.scrollY > window.innerHeight) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };
    // Adding scroll event to the toggleVisibility function. The function will be triggered on scroll.
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      // Removing the scroll event for cleanup.
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {/* When the button is clicked, HashLink scrolls to the section with the header ID. The smooth property adds a scroll animation. */}
      <HashLink to="/#header" smooth>
        {/* If the visibility is false, add the hidden class to hide the button. Otherwise, add the visible class to show it. */}
        <button className={`Up-button ${visibility ? 'hidden' : 'visible'}`}>
          <IoMdArrowDropup className='up-icon' />
        </button>
      </HashLink>
    </div>
  );
};

export default UpButton;
