import Navbar from '../Navbar/Navbar'
import './Header.css'
import { CgShapeRhombus } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import { toggleModal } from './../../redux/modal/modalsSlice';
import PageLinks from '../../Common/Common PageLinks/PageLinks';
import NotificationModal from "../../Modal/NotificationModal/NotificationModal"
import NotificationModalItem from "../../Modal/NotificationModal/NotificationModalItem/NotificationItemModal"
const Header = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false);
  const modal = useSelector((state) => state.modals.activeModal)
  const selectedItem = useSelector((state) => state.modals.selectedItem)
  const isModalBar = modal === "bar"
  const isModalNotification = modal === "notification"
  const isModalNotificationItem = modal === "notificationItem"
  const toggleBar = () => dispatch(toggleModal("bar"))
  const toggleNotification = () => dispatch(toggleModal("notification"))

  return (
    <header id='header'>
      <div className="logo-container">
        <CgShapeRhombus className='logo-icon' />
      </div>
      <Navbar />
      <div className='toolbars'>
        <div className='search-container' >
          <input type="text" className={`search-input ${active && 'search-input-width'} `} />
          <div className={`toolbar toolbar-search ${active && 'toolbar-search-background'} `} onClick={() => setActive(prevState => !prevState)}><FiSearch className='search-icon' /></div>
        </div>

        <div className="toolbar toolbar-notification" onClick={toggleNotification}><CiBellOn className='notification-icon' /><span className="center notification-dot"></span></div>
      
        <div className="toolbar toolbar-bar" onClick={toggleBar}><FaBarsStaggered className='bar-icon' /></div>
      
      </div>
      {isModalNotification && <NotificationModal/>} 
      {isModalNotificationItem && <NotificationModalItem item={selectedItem.item} text={selectedItem.text} />} 
      {isModalBar && <div className='bar-modal'><PageLinks/></div>} 
    </header>
  )
}

export default Header
