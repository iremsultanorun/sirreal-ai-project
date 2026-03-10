import { useState } from 'react';
import './NotificationModal.css';
import { LoremIpsum } from 'lorem-ipsum';
import { useDispatch } from 'react-redux';
import { openModal, setSelectedItem } from '../../redux/modal/modalsSlice';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import NotificationItemModal from './NotificationModalItem/NotificationItemModal';

const NotificationModal = () => {
    const dispatch = useDispatch();
    const selectedItem=useSelector(state=>state.modals.selectedItem)
    const modal = useSelector(state => state.modals.activeModal)
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 60,
            min: 4
        }
    });
    const [readNotification, setReadNotification] = useState([]);
    const [unreadNotification, setUnreadNotification] = useState(() => {
        const random = Math.floor(Math.random() * 15);
        const items = [];
        for (let i = 1; i < random; i++) {
            const title = lorem.generateWords(5);
            const text = lorem.generateSentences(2);
            items.push({ id: i, title, text });
        }

        return items;
    });
    // useEffect(() => {
    //     if (selectedItem) {
    //         dispatch(openModal("notificationItem"))
    //     }
    // }, [selectedItem])
    const handleReadNotification = (index) => {
        const item = unreadNotification[index];
        setReadNotification([...readNotification, item]);
        const updated = [...unreadNotification];
        updated.splice(index, 1);
        setUnreadNotification(updated);
        dispatch(setSelectedItem(item));
        dispatch(openModal("notificationItem"))
    };
    console.log(selectedItem);
    return (
        <div className='notification-modal'>
            {modal === "notificationItem" && selectedItem && (
                <NotificationItemModal
                    item={selectedItem.title}
                    text={selectedItem.text}
                />
            )}
            <Helmet>
                <title>Notification</title>
            </Helmet>
            <div className="subscribe-info">
                <HashLink to='/#subscribe' smooth>
                    <p>Subscribe to receive notifications via email. Click on me to subscribe.</p>
                </HashLink>
            </div>
            {unreadNotification.map((item, index) => (
                <div key={item.id} className="update-container" onClick={() => handleReadNotification(index)}>
                    <div className='update-content'>
                        <h3>{item.title}</h3>
                        <p className='update-content-text'>{item.text}</p>
                    </div>
                    <span></span>
                </div>
            ))}

            {readNotification.map((item) => (
                <div key={item.id} className="read-notification-update-container">
                    <div className='update-content'>
                        <h3>{item.title}</h3>
                        <p className='read-notification-text'>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NotificationModal;
