import Navbar from '../Navbar/Navbar'
import './Header.css'

import { CgShapeRhombus } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { closeModal, closeNotificationaModal, openModal, openNotificationaModal } from './../../redux/modal/modalsSlice';

const Header = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false);
  const isOpenBarModal = useSelector((state) => state.modals.isOpenBarModal)
  const isOpenNotificationModal = useSelector((state) => state.modals.isOpenNotificationModal)

  const toggleBar = () => {
    dispatch(isOpenBarModal ? closeModal() : openModal())
  }

  const toggleNotification = () => {
    dispatch(isOpenNotificationModal ? closeNotificationaModal() : openNotificationaModal())
  }

  const handleClickSearchToolbar = () => {
    setActive(prevState => !prevState);
  };

  return (
    <header id='header'>
      <div className="logo-container">
        <CgShapeRhombus className='logo-icon' />
      </div>
      <Navbar />
      <div className='toolbars'>
        <div className='search-container' >
          <input type="text" className={`search-input ${active ? 'search-input-width' : ''} `} />
          <div className={`toolbar toolbar-search ${active ? 'toolbar-search-background' : ''} `} onClick={handleClickSearchToolbar}><FiSearch className='search-icon' /></div>
        </div>
        <div className="toolbar toolbar-notification" onClick={toggleNotification}><CiBellOn className='notification-icon' /><span className="center notification-dot"></span></div>
        <div className="toolbar toolbar-bar" onClick={toggleBar}><FaBarsStaggered className='bar-icon' /></div>
      </div>
    </header>
  )
}

export default Header
