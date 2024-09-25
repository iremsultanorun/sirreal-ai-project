import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
// importing icons
import { CgShapeRhombus } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { closeModal, closeNotificationaModal, openModal, openNotificationaModal } from '../../features/modal/modalsSlice'; // redux import

const Header = () => {
  const dispatch = useDispatch() // defining dispatch
  const isOpenBarModal = useSelector((state) => state.modals.isOpenBarModal) // bar modal and notification selected from slice using useSelector
  const isOpenNotificationModal = useSelector((state) => state.modals.isOpenNotificationModal)

  // Function to toggle Bar modal open/close
  const toggleBar = () => {
    // isOpenBarModal is initially set to false. If false, call the close function; if true, call the open function
    dispatch(isOpenBarModal ? closeModal() : openModal())
  }

  // Function to toggle Notification modal open/close
  const toggleNotification = () => {
    // isOpenNotificationModal is initially set to false. If false, call the close function; if true, call the open function
    dispatch(isOpenNotificationModal ? closeNotificationaModal() : openNotificationaModal())
  }
  
  // State defined for active class. Initial value is false, meaning closed
  const [active, setActive] = useState(false);

  const handleClickSearchToolbar = () => {
    setActive(prevState => !prevState);
  };

  return (
    <header id='header'>
      {/* logo */}
      <div className="logo-container">
        <CgShapeRhombus className='logo-icon' />
      </div>
      <Navbar />
      {/* toolbars */}
      <div className='toolbars'>
        {/* search */}
        <div className='search-container' >
          {/* If active, add 'search-input-width' class. This class makes the input expand */}
          <input type="text" className={`search-input ${active ? 'search-input-width' : ''} `} />
                 {/* If active, add 'toolbar-search-background' class. This class removes the background */}
          <div className={`toolbar toolbar-search ${active ? 'toolbar-search-background' : ''} `} onClick={handleClickSearchToolbar}><FiSearch className='search-icon' /></div>
        </div>
        {/* Notification */}
        <div className="toolbar toolbar-notification" onClick={toggleNotification}><CiBellOn className='notification-icon' /><span className="center notification-dot"></span></div>
        {/* Bar */}
        <div className="toolbar toolbar-bar" onClick={toggleBar}><FaBarsStaggered className='bar-icon' /></div>
      </div>
    </header>
  )
}

export default Header
