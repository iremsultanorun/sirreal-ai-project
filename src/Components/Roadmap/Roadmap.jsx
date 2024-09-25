import React from 'react'
import './Roadmap.css'
import Titles from '../../Common/Common Titles/Titles'
import Circles from '../../Common/Common Circles/Circles'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

const Roadmap = () => {
  const leftItem = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const rightItem = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <div id='roadmap-section'>
      <Helmet>
        <title>Roadmap</title>
        <meta name="description" content="Explore our detailed roadmap to see what's next on our journey towards building innovative solutions." />
        <meta name="keywords" content="roadmap, future plans, project updates, next steps" />
      </Helmet>
      <Circles />
      <div className="roadmap-title-container">
        <Titles titleText="roadmap" />
      </div>
      <div className="branch-container">
        <div className="branch-wrapper">
          <div className="branch-line"></div>
          <div className="branch branch-one"

          >
            <motion.div className="roadmap-text-container"
              variants={rightItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            > <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, eos?</p></motion.div>
          </div>
          <div className="branch branch-two"

          >
            <motion.div className="roadmap-text-container"
              variants={leftItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            > <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, eos?</p></motion.div>
          </div>
          <div className="branch branch-three"

          >
            <motion.div className="roadmap-text-container"
              variants={rightItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            > <p>Lorem ipsum dolor sit amet, consectetur adipis?</p></motion.div>
          </div>
          <div className="branch branch-four "

          >
            <motion.div className="roadmap-text-container"
              variants={leftItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod harum eaque culpa totam corporis nulla repudiandae quibusdam omnis obcaecati, voluptatum minima, saepe, laboriosam nisi. </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Circles />
    </div>
  )
}

export default Roadmap
