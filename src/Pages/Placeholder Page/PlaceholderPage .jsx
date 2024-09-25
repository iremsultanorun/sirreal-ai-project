import React from 'react'
import bear from './bear.png'
import './PlaceholderPage.css'
import { Helmet } from 'react-helmet'

const PlaceholderPage = () => {
  return (
    <div>
      <div className="placeholder-page-container" >
        <Helmet>
          <title>Placeholder Page</title>
        </Helmet>
        <div className="placeholder-page-img" >
          <img src={bear} alt="" />
        </div>
        <div className="placeholder-page-text" >
          <p>🎀Since the pages are not completed, this is a common page shown for redirects.🎀</p>
        </div>
      </div>
    </div>
  )
}

export default PlaceholderPage 