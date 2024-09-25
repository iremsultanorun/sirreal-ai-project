import React from 'react';
import './Titles.css';

const Titles = ({ titleText }) => { // The title text is passed as a prop to be used in other components.
  return (
    <>
      <div className="title-container">
        <h2>{titleText}</h2>
      </div>
    
      <div className='line-container'></div>
    </>
  );
}

export default Titles;
