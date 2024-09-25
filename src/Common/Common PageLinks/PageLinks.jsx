import React from 'react'
import './PageLinks.css'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
const PageLinks = () => {
    return (
        <div>
            <ul className='page-links'>
                {/* hashlink ile sayfa içi yönlendirmeleri idlere göre sağlandı */}
                <HashLink to='/#header' smooth>
                    <li>about</li>
                </HashLink>
                <span></span>

                <HashLink to='/#collections-section' smooth>
                    <li>collections</li>
                </HashLink>
                <span></span>

                <HashLink to='/#roadmap-section' smooth>
                    <li>roadmap</li>
                </HashLink>
                <span></span>
                {/* Link ile sayfa yönlendirileri */}
                <Link to='/placeholder-page'>
                    <li>tutorials</li>
                    <span></span>
                </Link>
            </ul>
            {/* terms section */}
            <ul className='terms'>
                <Link to='/placeholder-page' >
                    <li>Privacy Policy</li>
                </Link>

                <Link to='/placeholder-page'>
                    <li>Terms of Service</li>
                </Link>
            </ul>

        </div>

    )
}

export default PageLinks