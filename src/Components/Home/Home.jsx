import { useState } from 'react';
import './Home.css';
import sirreal from '../../assets/sirreal.mp4';
import SirrealAiInfo from './Sirreal.ai info section/SirrealAiInfo';
import SirrialAiSlider from './Sirrial.ai slider section/SirrialAiSlider';
import BarModal from '../../Modal/BarModal/BarModal';
import NotificationModal from '../../Modal/NotificationModal/NotificationModal';
import NotificationItemModal from '../../Modal/NotificationModal/Notification modal item/NotificationItemModal';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Home = () => {
    // Selected values from Redux; all initial values are false
    const isOpenBarModal = useSelector((state) => state.modals.isOpenBarModal);
    const isOpenNotificationModal = useSelector((state) => state.modals.isOpenNotificationModal);
    const isOpenNotificationItemModal = useSelector((state) => state.modals.isOpenNotificationItemModal);

    // Selected notification item state
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <main id='home-section'> 
         <Helmet>
                <title>Sirreal.ai</title>
            </Helmet>
            {/* isOpenBarModal value must be true to open the Bar modal */}
            {isOpenBarModal && <BarModal />}
            {/* isOpenNotificationModal value must be true to open the Notification modal, and selectedItem state should be updated */}
            {isOpenNotificationModal && (
                <NotificationModal setSelectedItem={setSelectedItem} />
            )}

            <div className="left-container">
                {/* Video plays automatically, is muted, and loops */}
                <motion.video src={sirreal} autoPlay muted loop playsInline
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: .1,
                        duration: 2
                    }}
                ></motion.video>
                {/* NotificationItemModalrenders if there is a selected item */}
                {isOpenNotificationItemModal && selectedItem && (
                    <NotificationItemModal item={selectedItem.title} text={selectedItem.text} />
                )}
            </div>

            <div className="right-container">
                <SirrealAiInfo />
                <SirrialAiSlider />
            </div>
        </main>
    );
};

export default Home;
