
import './Home.css';
import sirreal from '../../assets/sirreal.mp4';
import SirrealAiInfo from './Sirreal.ai info section/SirrealAiInfo';
import SirrialAiSlider from './Sirrial.ai slider section/SirrialAiSlider';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Home = () => {


    return (
        <main id='home-section'> 
         <Helmet>
                <title>Sirreal.ai</title>
            </Helmet>

            <div className="left-container">
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
               
            </div>

            <div className="right-container">
                <SirrealAiInfo />
                <SirrialAiSlider />
            </div>
        </main>
    );
};

export default Home;
