import React from 'react';

import '../../styles/header.css'

const Header = () => {
  return (
    <header id='header-main'>
        <nav id='main-nav'>
            <ul id='nav-list'>
                {/* <li class='nav-item'>Home</li> */}
                <li class='nav-item'>abilities</li>            
                <li class='nav-item'>class</li>
                <li class='nav-item'>abilities</li>
                <li class='nav-item'>background</li>
                <li class='nav-item'>equipment</li>  
            </ul>
        </nav>
    </header>
  )
};

export default Header;
