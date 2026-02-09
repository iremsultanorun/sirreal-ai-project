import './Navbar.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-items-container'>
                <HashLink to="/#home-section" smooth> <li className='nav-item about'>About</li></HashLink>
                <HashLink to="/#collections-section" smooth> <li className='nav-item '>Collections</li></HashLink>
                <HashLink to="/#roadmap-section" smooth> <li className='nav-item roadmap'>Roadmap</li></HashLink>
                <Link to="/placeholder-page"><li className='nav-item tutorial'>
                    Tutorial
                </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
