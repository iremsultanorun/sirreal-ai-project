import { useState } from 'react';
import './CollectionItems.css';
import { BsArrowsAngleExpand } from "react-icons/bs";
import Circles from '../../../Common/Common Circles/Circles';
import { collectionsData } from './CollectionsData.jsx';
import CollectionModal from './../../../Modal/CollectionModal/CollectionModal.jsx';
import { motion } from 'framer-motion'; // Framer Motion importu

const CollectionItems = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // modal is initially closed
  const [selectedCollection, setSelectedCollection] = useState(null); // no collection selected initially

  const openModal = (collection, imageIndex) => {
    setSelectedCollection({ // update state based on the selected image
      image: collection.collectionImages[imageIndex],
      title: collection.collectionDetailTitle[imageIndex],
      content: collection.collectionDetailContent,
      groupName: collection.collectionGroupName,
    });
    setIsModalOpen(true); // show modal
  };

  // function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCollection(null);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
  };

  return (
    <div className="collection-items-container">
      {collectionsData.map((collectionData, index) => (
        <div key={index} className="collection-group">
          <Circles />
          <h4>-{collectionData.collectionGroupName}-</h4>
          <div className="collection-item-container">
            {collectionData.collectionImages.map((image, imgIndex) => (
              <motion.div 
                key={imgIndex} 
                className="collection-item"
                variants={itemVariants}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false }} 
              >
                <img src={image} alt="collection" />
                <button className='center' onClick={() => openModal(collectionData, imgIndex)}>
                  <BsArrowsAngleExpand className="size-icon" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Show CollectionModal when the modal is open */}
      {isModalOpen && selectedCollection && (
        <CollectionModal
          image={selectedCollection.image}
          title={selectedCollection.title}
          content={selectedCollection.content}
          groupName={selectedCollection.groupName}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default CollectionItems;
