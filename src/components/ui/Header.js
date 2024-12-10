import React from 'react';
import { Link, useLocation } from 'react-router-dom'

import '../../styles/header.css'

const Header = () => {

  const usePathname = () => {
    const location = useLocation()
    return location.pathname
  }

  const location = usePathname()

  return (
    <header id='header-main'>
        <nav id='main-nav'>
            <ul id='nav-list'>
                {/* <li class='nav-item'>Home</li> */}
                <Link to='/races'><li className={`nav-item ${location.includes('/races') ? 'location' : ''}`}>race</li></Link>            
                <Link to='/classes'><li className={`nav-item ${location.includes('/classes') ? 'location' : ''}`}>class</li></Link>
                <Link to='/abilities'><li className={`nav-item ${location === '/abilities' ? 'location' : ''}`}>abilities</li></Link>
                <li className={`nav-item ${location === '/background' ? 'location' : ''}`}>background</li>
                <li className={`nav-item ${location === '/equipment' ? 'location' : ''}`}>equipment</li>  
            </ul>
        </nav>
    </header>
  )
};

export default Header;