import './SirrealAiInfo.css'
import Buttons from '../../../Common/Common Buttons/Buttons'
import { HashLink } from 'react-router-hash-link'
import { motion } from 'framer-motion'
const SirrealAiInfo = () => {
  const textAnimation = {
    initial: {
      x: -40
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
      }
    },
  }
  return (
    <div>
      <motion.div className='sirreal-info-container'
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: .3,
          duration: 2
        }}
      >
        <div>
          <div className='subscribe-container'>
            <HashLink to='/#subscribe' smooth>
              <Buttons buttonText="subscribe" />
            </HashLink>
          </div>
          <motion.h1
            variants={textAnimation}
            initial="initial"
            animate="animate">SIRREAL.AI</motion.h1>
          <motion.ul
            variants={textAnimation}
            initial="initial"
            animate="animate"
          >
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  )
}

export default SirrealAiInfo
