import React from 'react'
import Titles from '../../Common/Common Titles/Titles'
import './Collections.css';

import CollectionItems from './../Collections/Collection items/CollectionItems';
import Buttons from '../../Common/Common Buttons/Buttons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Collections = () => {
    return (
        
        <div className='collection-div' id='collections-section'>
            <Helmet>
                <title>Collections</title>
            </Helmet>
            {/* title */}
            <Titles titleText="Collections" />
            <CollectionItems />
            {/* page navigation with link */}
            <Link to='/placeholder-page'>
            <div className="more-collections-container">
                {/* more collections button */}
                <Buttons buttonText="more collections" />
            </div>
            </Link>
        </div>
    )
}

export default Collections
