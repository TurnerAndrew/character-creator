import React from 'react';
import { Link, useParams } from 'react-router-dom'

import '../../styles/header.css'

const Header = () => {

  const location = useParams()

  console.log(location)

  return (
    <header id='header-main'>
        <nav id='main-nav'>
            <ul id='nav-list'>
                {/* <li class='nav-item'>Home</li> */}
                <Link to='/races'><li className='nav-item'>race</li></Link>            
                <Link to='/classes'><li className='nav-item'>class</li></Link>
                <li className='nav-item'>abilities</li>
                <li className='nav-item'>background</li>
                <li className='nav-item'>equipment</li>  
            </ul>
        </nav>
    </header>
  )
};

export default Header;
