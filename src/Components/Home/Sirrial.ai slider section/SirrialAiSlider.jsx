import React, { useState } from 'react';
import './SirrialAiSlider.css';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { slidesData } from "./SlidesData.jsx";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SirrialAiSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Geri gitme fonksiyonu
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  // İleri gitme fonksiyonu
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <motion.div
        className="slider-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="slider-wrapper">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 29}%)` }}
          >
            {slidesData.map((slideData) => (
              <motion.div
                className="slide-item"
                key={slideData.id}
                variants={itemVariants}
              >
                <div className="slide-content">
                  <div className="slide-content-top">
                    <img src={slideData.contentImage} alt="" />
                  </div>
                  <div className="slide-content-bottom">
                    <p>{slideData.contentText}</p>
                    <Link to="/placeholder-page">
                      <button>
                        <FiArrowUpRight className="detail-icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="arrow-container">
            <button onClick={prevSlide}>
              <IoMdArrowDropleft className="arrow" />
            </button>
            <button onClick={nextSlide}>
              <IoMdArrowDropright className="arrow" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SirrialAiSlider;
