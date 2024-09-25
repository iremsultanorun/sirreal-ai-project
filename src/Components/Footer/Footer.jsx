import React from 'react';
import './Footer.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
// component import
import infraredDreamers from './../../assets/Collections-images/Infrared-Dreamers/infrared-dreamers1.jpg';
import Buttons from '../../Common/Common Buttons/Buttons';
import PageLinks from '../../Common/Common PageLinks/PageLinks';
// icons import
import { FaInstagram } from "react-icons/fa6";
import { BsThreads } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';



const Footer = () => {

  // form validation schema (yup)
  const SubscribeSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  });

  // form state management (formik)
  const { handleChange, values, errors, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: SubscribeSchema,

  });
  

  const item = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='footer-container'>
      <div className="footer-content">
        {/* footer left container contains images and page links */}
        <div className="footer-left-container">
          <div>
            {/* footer image */}
            <motion.img
              src={infraredDreamers}
              alt="Infrared Dreamers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1 }}
            />
          </div>
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <PageLinks />
          </motion.div>
        </div>

        {/* footer right container contains subscription form and social media links */}
        <div className="footer-right-container">
          {/* newsletter */}

          <form className="newsletter-container" id='subscribe' onSubmit={handleSubmit} >
            <label className='subscribe-text'>Subscribe to our newsletter:</label>
            <div className='newsletter-form'>
              {/* email input */}
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={values.email}
                onChange={handleChange}
              />
              <Buttons buttonText="subscribe"  />
            </div>
            {/* error text */}
            {errors.email && <p className='error-info'>{errors.email}</p>}
          </form>


          {/* follow */}
          <div className='follow-us'>
            <div><p>Follow us:</p></div>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaInstagram className='social-icon' /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsThreads className='social-icon' /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaXTwitter className='social-icon' /></a>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="copyright">
        <p>© 2024 YourWebsite. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
