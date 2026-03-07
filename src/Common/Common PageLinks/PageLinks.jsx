import './PageLinks.css'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
const PageLinks = () => {
    return (
        <div>
            <ul className='page-links'>
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
                <Link to='/placeholder-page'>
                    <li>tutorials</li>
                    <span></span>
                </Link>
            </ul>
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