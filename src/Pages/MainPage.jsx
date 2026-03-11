import React from 'react'
import './MainPage.css'
import Header from './../../src/Components/Header /Header';
import Home from './../../src/Components/Home/Home';
import Collections from './../../src/Components/Collections/Collections';
import Roadmap from './../../src/Components/Roadmap/Roadmap';
import Footer from './../../src/Components/Footer/Footer';
import UpButton from './../../src/Common/Common Up Button/UpButton';
const MainPage = () => {
  return (
    <div className='main-page'>
        {/* <UpButton/> */}
        <div className="header-container">
          <Header />
        </div>
        <div className="Home-container">
          <Home />
        </div>
        <div className="container">
          <Collections />
          <Roadmap />
        </div>
        <Footer />
      </div>
  )
}

export default MainPage