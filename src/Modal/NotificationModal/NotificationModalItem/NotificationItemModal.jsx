import './NotificationItemModal.css'
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalsSlice';


const NotificationItemModal = ({item,text}) => {
  const dispatch=useDispatch()
  console.log(item,text)
  return (
     <div className='notification-item-modal'>
      <div className="close-icon-container"onClick={()=> {dispatch(closeModal())}} ><IoClose className='close-icon' /></div>
      <h3>{item}</h3>
      <p>{text}</p>
     </div>
  )
}

export default NotificationItemModal