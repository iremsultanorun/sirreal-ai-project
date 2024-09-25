import React, { useState } from 'react';
import './NotificationModal.css';
import { LoremIpsum } from 'lorem-ipsum';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalsSlice'; // Modal redux import
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

const NotificationModal = ({ setSelectedItem }) => {
    const dispatch = useDispatch();
    // Random sentences are generated using the Lorem Ipsum library
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

    const [readNotification, setReadNotification] = useState([]); // Defined for read notifications
    const [unreadNotification, setUnreadNotification] = useState(() => { // Defined for unread notifications
        const random = Math.floor(Math.random() * 15); // Generate a random number between 1 and 15 and assign it to the random variable
        const items = []; // Holds all notifications, both read and unread
        for (let i = 1; i < random; i++) { // Start from 1 and generate notifications up to the random number
            // Create random titles and paragraphs using the lorem ipsum library and store them in title and text variables
            const title = lorem.generateWords(5);
            const text = lorem.generateSentences(2);

            items.push({ id: i, title, text }); // Add to items
        }
        return items; // Return items
    });

    const handleReadNotification = (index) => {
        const item = unreadNotification[index]; // Store the index of each unread notification in the item variable

        // Add to the read array
        dispatch(openModal());
        setReadNotification([...readNotification, item]);

        // Remove from the unread array
        const updatedUnreadNotification = [...unreadNotification];
        updatedUnreadNotification.splice(index, 1); // Remove the item with splice
        setUnreadNotification(updatedUnreadNotification);

        // Pass the selected item to the Home component
        setSelectedItem(item);
    };

    return (
        <div className='notification-modal'>
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
